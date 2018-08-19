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

class BlenderMeshProcessor {
    async process(mesh: InstanceType<Mesh>): Promise<InstanceType<Mesh>> {
        logger.req().info(`${LOG_TAG} preparing to process mesh in blender`);

        // Save original files to disk
        const filePaths = await this.saveFilesToDisk(mesh);

        // Process files in Blender
        const blenderResponse = await this.processInBlender(mesh, filePaths);

        // Save files (blend, objs, mtls, images, fbx)
        const updatedMesh = await this.saveBlenderResponseFiles(mesh, blenderResponse);

        return updatedMesh;
    }

    private async saveFilesToDisk(mesh: InstanceType<Mesh>): Promise<string[]> {
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

        return filePaths;
    }

    private async processInBlender(mesh: InstanceType<Mesh>, filePaths: string[]): Promise<BlenderResponse> {
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
            await Blender.python(PYTHON_SCRIPT_PATH, scriptArgs);

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

    private async saveBlenderResponseFiles(mesh: InstanceType<Mesh>, blenderResponse: BlenderResponse): Promise<InstanceType<Mesh>> {
        logger.req().info(`${LOG_TAG} saving files created in blender to DB`);

        // Make sure the files collection is populated
        const populatedMesh = await mesh.populate({
            path: 'files',
        }).execPopulate();

        // Get the files object so we can populate it
        const files = <InstanceType<MeshFileCollection>>populatedMesh.files;

        // Read file from buffer and save to gridFS
        const save = async (filePath: string): Promise<GridFSFile> => {
            const fileName = path.basename(filePath);
            const mimeType = mime.lookup(filePath) || 'application/octet-stream';

            logger.req().info(`${LOG_TAG} saving '${fileName}' to db'`);
            const gridFSFile = GridFSFileModel.save(fileName, filePath, mimeType);
            logger.req().info(`${LOG_TAG} successfully saved '${fileName}' to db`);

            return gridFSFile;
        };

        files.blendFile = await save(blenderResponse.blendFilePath);
        files.fbx = await save(blenderResponse.fbxFilePath);
        files.picture = await save(blenderResponse.pictureFilePath);

        // Save obj and mtl files
        for (let objMtlIndex = 0; objMtlIndex < blenderResponse.objMtlFilePaths.length; objMtlIndex++) {
            const objMtlFilePaths = blenderResponse.objMtlFilePaths[objMtlIndex];
            const objMtlPair = await OBJMTLPairModel.create({
                obj: await save(objMtlFilePaths.objFilePath),
                mtl: await save(objMtlFilePaths.mtlFilePath),
            });
            files.objMtlFiles.push(objMtlPair);
        }

        // Save textures
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

        return populatedMesh;
    }
}

interface BlenderResponse {
    blendFilePath: string;
    pictureFilePath: string;
    fbxFilePath: string;
    objMtlFilePaths: ObjMtlFilePaths[];
    texturePaths?: string[];
    partInfo: MeshPartInfo[];
}

interface ObjMtlFilePaths {
    objFilePath: string;
    mtlFilePath: string;
}

interface MeshPartInfo {
    originalName: string;
    internalName: string;
    name: string;
}

