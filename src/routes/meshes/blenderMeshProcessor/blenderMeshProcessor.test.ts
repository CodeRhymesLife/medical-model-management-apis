import chai from 'chai';
import { InstanceType } from 'typegoose';

import BlenderMeshProcessor from './blenderMeshProcessor';
import { MeshFileCollection, OBJMTLPair } from '../meshes.model';
import { User } from '../../users/users.model';
import { createMesh, createUser, testData } from '../../../tests/testUtils';

const expect = chai.expect;

describe('## BlenderMeshProcessor tests', () => {

    let user: InstanceType<User> = undefined;
    beforeEach(async () => {
        user = await createUser(testData.users.one);
        return Promise.resolve();
    });

    afterEach(() => {
        return user.remove();
    });

    describe('# process meshes in blender', () => {
        it('process fbx mesh without textures', async () => {
            // Create the mesh
            const meshWithoutTextures = await createMesh(user, testData.meshes.one);

            // Process the mesh
            const updatedMesh = await BlenderMeshProcessor.process(meshWithoutTextures);

            // Ensure that references were updated properly
            const files = <InstanceType<MeshFileCollection>>updatedMesh.files;
            expect(files.blendFile).to.not.be.null;
            expect(files.fbx).to.not.be.null;
            expect(files.picture).to.not.be.null;
            expect(files.objMtlFiles.length).to.equal(1);

            const objMtlPair = <InstanceType<OBJMTLPair>>files.objMtlFiles[0];
            expect(objMtlPair.obj).to.be.not.null;
            expect(objMtlPair.mtl).to.be.not.null;

            expect(files.textures.length).to.equal(0);
        });
    });
});
