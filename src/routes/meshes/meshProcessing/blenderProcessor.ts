import child_process from 'child_process';
import loadJsonFile from 'load-json-file';
import tempy from 'tempy';
import { InstanceType } from 'typegoose';

import { logger } from '../../../config/winston';
import { GridFSFile, Mesh, MeshFileCollection } from '../meshes.model';

const LOG_TAG = '[BlenderProcessor]';
const PYTHON_SCRIPT_PATH = `${__dirname}/processMeshInBlender.py`;

class BlenderProcessor {
    async process(mesh: InstanceType<Mesh>): Promise<BlenderResponse> {
        logger.req().info(`${LOG_TAG} preparing to process mesh in blender`);

        // Save original files to disk
        const filePaths = await this.saveFilesToDisk(mesh);

        // Process files in Blender
        const response = await this.processInBlender(mesh, filePaths);

        // Save files (blend, objs, mtls, images, fbx)
        //

        return response;
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

class Blender {
    static python(pythonFilePath: string, scriptArgs?: string[]): Promise<void> {
        const blenderArgs = [
            "--background",
            "-noaudio",
            "--python", pythonFilePath,
            "--"
        ];
        blenderArgs.concat(scriptArgs);

        return new Promise((fulfill, reject) => {
            // Run the Blender script in a child process
            child_process.execFile(
                "blender",
                blenderArgs,
                (error: Error, stdout: Buffer, stderr: Buffer) => {
                    if (error || stderr) {
                        reject(error || stderr);
                    } else {
                        fulfill();
                    }
                }
            );
        });
    }
}
