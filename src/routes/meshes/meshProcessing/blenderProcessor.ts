import { InstanceType } from 'typegoose';

import { Mesh, MeshFileCollection } from '../meshes.model';

const PYTHON_SCRIPT_PATH = `${__dirname}/processMeshInBlender.py`;

class BlenderProcessor {
    async process(mesh: InstanceType<Mesh>) {
        Blender.python(PYTHON_SCRIPT_PATH, );

        // Save files (blend, objs, mtls, images, fbx)
    }

    async saveFilesToDisk(files: InstanceType<MeshFileCollection>) {
        // Loop over the GridFS files and save them to a temp directory
        const filePaths = [];
        for (const fileIndex in files.originalFiles) {
            const file = files.originalFiles[fileIndex];
            // const filePath = file.saveFile();
            // filePaths.push(filePath);
        }
    }
}

class Blender {
    static async python(filePath: string, ... args: string[]): Promise<string> {
        return '';
    }
}
