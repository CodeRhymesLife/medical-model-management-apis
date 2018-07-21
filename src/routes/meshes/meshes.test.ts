import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../index';
import settings from '../../config/settings';
import { createUser, deleteUser, testData, TestMesh } from '../../tests/testUtils';

const expect = chai.expect;
chai.config.includeStack = true;

/**
 * Data about an individual mesh including the
 * data it was created with and the instance that was
 * created
 */
interface MeshData {
    /** Data used to create and update the mesh */
    data: TestMesh;

    /** The created mesh */
    created: any;
}

/** A collection of data used furing mesh tests */
interface MeshesTestData {
    /** Data about the first mesh */
    one: MeshData;

    /** Data about the second mesh */
    two: MeshData;

    /** An invalid mesh id */
    invalidId: string;
}

// A collection of data we will use during this test
const meshData: MeshesTestData = {
    one: {
        data: Object.assign({}, testData.meshes.one),
        created: undefined,
    },

    two: {
        data: Object.assign({}, testData.meshes.two),
        created: undefined,
    },

    invalidId: '5b52594de29d171ae09642da',
};

describe('## Mesh APIs', () => {
    /** Creates a test user */
    before(async () => {
        await createUser(testData.users.one);
        return createUser(testData.users.two);
    });

    /** Delete the test user */
    after(async () => {
        await deleteUser(testData.users.one);
        return deleteUser(testData.users.two);
    });

    describe('# POST /meshes', async () => {
        it('should fail validation', async () => {
            const res = await request(app)
                .post('/meshes')
                .set(settings.headers.idToken, testData.users.one.idToken)
                .send({
                    // no name
                    shortDesc: meshData.one.data.shortDesc,
                    longDesc: meshData.one.data.longDesc,
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body.message).to.equal('"name" is required');
        });

        it('should create a new mesh for user 1', async () => {
            const res = await request(app)
                .post('/meshes')
                .set(settings.headers.idToken, testData.users.one.idToken)
                .send(meshData.one.data)
                .expect(httpStatus.CREATED);

            expect(res.body.name).to.equal(meshData.one.data.name);
            expect(res.body.shortDesc).to.equal(meshData.one.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.one.data.longDesc);
            meshData.one.created = res.body;
        });

        it('should create a new mesh for user 2', async () => {
            const res = await request(app)
                .post('/meshes')
                .set(settings.headers.idToken, testData.users.two.idToken)
                .send(meshData.two.data)
                .expect(httpStatus.CREATED);

            expect(res.body.name).to.equal(meshData.two.data.name);
            expect(res.body.shortDesc).to.equal(meshData.two.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.two.data.longDesc);
            meshData.two.created = res.body;
        });

    });

    describe('# GET /meshes', async () => {
        it('should get list of meshes for user 1', async () => {
            const res = await request(app)
                .get(`/meshes`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            expect(res.body.length).to.equal(1);
            expect(res.body[0].name).to.equal(meshData.one.data.name);
            expect(res.body[0].shortDesc).to.equal(meshData.one.data.shortDesc);
            expect(res.body[0].longDesc).to.equal(meshData.one.data.longDesc);
        });

        it('should get list of meshes for user 2', async () => {
            const res = await request(app)
                .get(`/meshes`)
                .set(settings.headers.idToken, testData.users.two.idToken)
                .expect(httpStatus.OK);

            expect(res.body.length).to.equal(1);
            expect(res.body[0].name).to.equal(meshData.two.data.name);
            expect(res.body[0].shortDesc).to.equal(meshData.two.data.shortDesc);
            expect(res.body[0].longDesc).to.equal(meshData.two.data.longDesc);
        });
    });

    describe('# GET /meshes/<id>', async () => {
        it('should get mesh for user 1', async () => {
            const res = await request(app)
                .get(`/meshes/${meshData.one.created._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.one.data.name);
            expect(res.body.shortDesc).to.equal(meshData.one.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.one.data.longDesc);
        });

        it('should get mesh for user 2', async () => {
            const res = await request(app)
                .get(`/meshes/${meshData.two.created._id}`)
                .set(settings.headers.idToken, testData.users.two.idToken)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.two.data.name);
            expect(res.body.shortDesc).to.equal(meshData.two.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.two.data.longDesc);
        });

        it('should fail when user 1 tries to retrieve mesh owned by user 2', async () => {
            const res = await request(app)
                .get(`/meshes/${meshData.two.created._id}`)                  // User one does not own user 2's mesh
                .set(settings.headers.idToken, testData.users.one.idToken)  // User one does not own user 2's mesh)
                .expect(httpStatus.UNAUTHORIZED);

            expect(res.body.message).to.equal('Unauthorized');
        });
    });

    describe('# UPDATE /meshes', async () => {
        it('should update mesh name', async () => {
            // Change the long description
            meshData.one.data.longDesc = `${meshData.one.data.longDesc} ${meshData.one.data.longDesc}`;

            const res = await request(app)
                .put(`/meshes/${meshData.one.created._id}`)
                .send({ longDesc: meshData.one.data.longDesc })
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.one.data.name);
            expect(res.body.shortDesc).to.equal(meshData.one.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.one.data.longDesc);
        });

        it('should fail to update mesh that does not exist', async () => {
            const res = await request(app)
                .put(`/meshes/${meshData.invalidId}`) // Invalid mesh id
                .send({ longDesc: 'updated long desc' })
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            expect(res.body.message).to.equal('Not Found');
        });

        it('should fail to update mesh when no data passed to server', async () => {
            const res = await request(app)
                .put(`/meshes/${meshData.one.created._id}`)
                .send({ /* No props */ })
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body.message).to.equal('"value" must contain at least one of [name, shortDesc, longDesc]');
        });

        it('should fail to update mesh with invalid property', async () => {
            const res = await request(app)
                .put(`/meshes/${meshData.one.created._id}`)
                .send({ invalidProperty: 'invalidProperty'})
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body.message).to.equal('"value" must contain at least one of [name, shortDesc, longDesc]');
        });

        it('should fail to update mesh when user does not own mesh', async () => {
            const res = await request(app)
                .put(`/meshes/${meshData.one.created._id}`)                  // User 2 does not own mesh one
                .send({ longDesc: 'valid long desc'})
                .set(settings.headers.idToken, testData.users.two.idToken)  // User 2 does not own mesh one
                .expect(httpStatus.UNAUTHORIZED);

            expect(res.body.message).to.equal('Unauthorized');
        });
    });

    describe('# DELETE /meshes', async () => {
        it('should fail to delete mesh that does not exist', async () => {
            const res = await request(app)
                .delete(`/meshes/${meshData.invalidId}`) // Invalid mesh id
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            expect(res.body.message).to.equal('Not Found');
        });

        it('should fail to update mesh when user does not own mesh', async () => {
            const res = await request(app)
                .delete(`/meshes/${meshData.one.created._id}`)               // User 2 does not own mesh one
                .set(settings.headers.idToken, testData.users.two.idToken)  // User 2 does not own mesh one
                .expect(httpStatus.UNAUTHORIZED);

            expect(res.body.message).to.equal('Unauthorized');
        });

        it('should delete mesh for user 1', async () => {
            const res = await request(app)
                .delete(`/meshes/${meshData.one.created._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.one.data.name);
            expect(res.body.shortDesc).to.equal(meshData.one.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.one.data.longDesc);
        });

        it('should delete mesh for user 2', async () => {
            const res = await request(app)
                .delete(`/meshes/${meshData.two.created._id}`)
                .set(settings.headers.idToken, testData.users.two.idToken)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.two.data.name);
            expect(res.body.shortDesc).to.equal(meshData.two.data.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.two.data.longDesc);
        });
    });
});
