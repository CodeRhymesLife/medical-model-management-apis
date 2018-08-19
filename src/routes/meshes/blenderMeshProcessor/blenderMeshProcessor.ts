import loadJsonFile from 'load-json-file';
import mime from 'mime-types';
import path from 'path';
import tempy from 'tempy';
import { InstanceType } from 'typegoose';

import Blender from '../blender/blender';
import { logger } from '../../../config/winston';
import {
    GridFSFile,
    GridFSFileModel,
    Mesh,
    MeshFileCollection,
    OBJMTLPair,
    OBJMTLPairModel
} from '../meshes.model';

const LOG_TAG = '[BlenderProcessor]';
const PYTHON_SCRIPT_PATH = `${__dirname}/processMeshInBlender.py`;

/**
 * Processes meshes in Blender
 * To prepare a mesh to be viewed in third part applications,
 * such as on a website or in virtual reality, we need to process
 * the mesh and export files that are compatible with different platforms.
 * This class does just that.
 */
export default class BlenderMeshProcessor {
    /**
     * Processes the given mesh in Blender by:
     *  1) Saving its files to disk so they can be read by Blender
     *  2) Processing the files in Blender with a python script
     *  3) Saving the files Blender produces (listed bleow) to the DB
     *      - model.blend: a blend file packed with everything
     *      - picture.png: a picture of the model
     *      - model.fbx: an fbx of the model we can use to pass to other processes, like Unity
     *      - <.obj, .mtl>[]: an array of obj and mtl files that we later use to render the model in web applications
     */
    public static async process(mesh: InstanceType<Mesh>): Promise<InstanceType<Mesh>> {
        logger.req().info(`${LOG_TAG} preparing to process mesh '${mesh._id}' in blender`);

        // Save original files to disk
        const filePaths = await BlenderMeshProcessor.saveFilesToDisk(mesh);

        // Process files in Blender
        const blenderResponse = await BlenderMeshProcessor.processInBlender(mesh, filePaths);

        // Save files (blend, objs, mtls, images, fbx)
        const updatedMesh = await BlenderMeshProcessor.saveBlenderResponseFiles(mesh, blenderResponse);

        return updatedMesh;
    }

    /**
     * Saves mesh files from gridfs to disk so Blender can read them
     * @returns a promise that resolves an array containing the path to each saved file
     */
    private static async saveFilesToDisk(mesh: InstanceType<Mesh>): Promise<string[]> {
        logger.req().info(`${LOG_TAG} saving mesh files to temp dir`);

        // Make sure the original files collection is populated
        const populatedMesh = await mesh.populate({
            path: 'files.originalFiles',
        }).execPopulate();

        // Loop over the GridFS files and save them to a temp directory
        const filePaths = [];
        const files = <InstanceType<MeshFileCollection>>populatedMesh.files;
        for (const fileIndex in files.originalFiles) {
            const file = <InstanceType<GridFSFile>>files.originalFiles[fileIndex];
            const filePath = await file.saveToTemp();
            filePaths.push(filePath);
        }

        // Return the path the each file
        return filePaths;
    }

    /**
     * Tells Blender to process the mesh's files with our python script
     * @returns data about the files Blender created during processing
     */
    private static async processInBlender(mesh: InstanceType<Mesh>, filePaths: string[]): Promise<BlenderResponse> {
        logger.req().info(`${LOG_TAG} processing files in blender`);

        // Create arguments to pass to our blender python script
        const outputDir = tempy.directory();
        const scriptArgs = [
            "--outputDir", outputDir,
            "--meshId", mesh._id,
            "--meshFilePaths"
        ].concat(filePaths);

        // Process the mesh in Blender
        const profileId = `blender ${mesh._id}`;
        logger.req().profile(profileId);
        let response: BlenderResponse = undefined;
        try {
            // Execute our python script in Blender
            logger.req().info(`${LOG_TAG} calling blender with our python script`);
            await Blender.python(PYTHON_SCRIPT_PATH, scriptArgs);

            // Our python script saves output in response.json
            // Parse that file to get output
            const responseFilePath = `${outputDir}/response.json`;
            logger.req().info(`${LOG_TAG} parsing response file '${responseFilePath}'`);
            response = <BlenderResponse>(await loadJsonFile(responseFilePath));
        } catch (err) {
            logger.req().error(`${LOG_TAG} processing model in blender failed. Error: ${err}`);
            throw err;
        }
        finally {
            logger.req().profile(profileId);
        }

        logger.req().info(`${LOG_TAG} finished processing files in blender`);
        return response;
    }

    /**
     * Blender produces several files while it's processing.
     * This function saves those files to the DB
     */
    private static async saveBlenderResponseFiles(mesh: InstanceType<Mesh>, blenderResponse: BlenderResponse): Promise<InstanceType<Mesh>> {
        logger.req().info(`${LOG_TAG} saving files created in blender to DB`);

        // Make sure the files collection is populated
        const populatedMesh = await mesh.populate({
            path: 'files',
        }).execPopulate();

        // Get the files object so we can update it
        const files = <InstanceType<MeshFileCollection>>populatedMesh.files;

        /**
         * Saves the given file to gridfs
         * @returns a promise that resolves to a pointer to the gridfs document
         */
        const save = async (filePath: string): Promise<GridFSFile> => {
            const fileName = path.basename(filePath);
            const mimeType = mime.lookup(filePath) || 'application/octet-stream';

            logger.req().info(`${LOG_TAG} saving '${fileName}' to db'`);
            const gridFSFile = GridFSFileModel.save(fileName, filePath, mimeType);
            logger.req().info(`${LOG_TAG} successfully saved '${fileName}' to db`);

            return gridFSFile;
        };

        // Save the blend, fbx and picture to gridfs and
        // refeerence them in the mesh file collection
        files.blendFile = await save(blenderResponse.blendFilePath);
        files.fbx = await save(blenderResponse.fbxFilePath);
        files.picture = await save(blenderResponse.pictureFilePath);

        // Save obj and mtl files
        // and reference them in the mesh file collection
        for (let objMtlIndex = 0; objMtlIndex < blenderResponse.objMtlFilePaths.length; objMtlIndex++) {
            const objMtlFilePaths = blenderResponse.objMtlFilePaths[objMtlIndex];
            const objMtlPair = await OBJMTLPairModel.create({
                obj: await save(objMtlFilePaths.objFilePath),
                mtl: await save(objMtlFilePaths.mtlFilePath),
            });
            files.objMtlFiles.push(objMtlPair);
        }

        // Save textures and reference them in the mesh file collection
        if (blenderResponse.texturePaths) {
            const texturePaths = blenderResponse.texturePaths;
            for (let textureIndex = 0; textureIndex < texturePaths.length; textureIndex++) {
                const texturePath = texturePaths[textureIndex];
                const texture = await save(texturePath);
                files.textures.push(texture);
            }
        }

        // Save references to the files
        await files.save();

        // Return the updated mesh
        return populatedMesh;
    }
}

/** Represents data contained in the response from Blender */
interface BlenderResponse {
    /** The path to the blend file created in Blender */
    blendFilePath: string;

    /** The path to the picture created in Blender */
    pictureFilePath: string;

    /** The path to the FBX file created in Blender */
    fbxFilePath: string;

    /** Paths to the .obj and .mtl files created in Blender */
    objMtlFilePaths: ObjMtlFilePaths[];

    /** Paths to the textures created in Blender */
    texturePaths?: string[];

    /** Information about the separate parts this mesh is made of */
    partInfo: MeshPartInfo[];
}

/** Describes paths to an obj file and its associated mtl file */
interface ObjMtlFilePaths {
    /** The path to the obj file created in Blender */
    objFilePath: string;

    /** The path to the mtl file created in Blender */
    mtlFilePath: string;
}

/**
 * Meshes can be segmented into individdual parts.
 * Knowing this information is useful in third party applications
 * that, for example, allow the user to interact with individual parts
 * This interface describes each part based on output from Blender.
 */
interface MeshPartInfo {
    /** The original name of the part in Blender */
    originalName: string;

    /** Our internal name of the part */
    internalName: string;

    /** A display name of the part */
    name: string;
}

