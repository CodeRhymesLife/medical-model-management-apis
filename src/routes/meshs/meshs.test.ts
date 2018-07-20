import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../index';
import settings from '../../config/settings';
import { createUser, deleteUser, fakeIdToken, fakeIdTokenHeaderValue } from '../../tests/testUtils';

const expect = chai.expect;
chai.config.includeStack = true;

describe('## Mesh APIs', () => {
    /** Creates a test user */
    before(() => {
        return createUser();
    });

    /** Delete the test user */
    after(async () => {
        return deleteUser();
    });

    const meshData = {
        name: 'Test Mesh',
        shortDesc: 'This is a short description',
        longDesc: 'This is a really, really, really long description that\'s not actually all that long',
    };

    let createdMesh = undefined;

    describe('# POST /meshs', async () => {
        it('should fail validation', async () => {
            const res = await request(app)
                .post('/meshs')
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .send({
                    // no name
                    shortDesc: meshData.shortDesc,
                    longDesc: meshData.longDesc,
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body.message).to.equal('"name" is required');
        });

        it('should create a new mesh', async () => {
            const res = await request(app)
                .post('/meshs')
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .send(meshData)
                .expect(httpStatus.CREATED);

            expect(res.body.name).to.equal(meshData.name);
            expect(res.body.shortDesc).to.equal(meshData.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.longDesc);
            createdMesh = res.body;
        });

        it('should fail to create a new mesh with the same name', async () => {
            const res = await request(app)
                .post('/meshs')
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .send(meshData)
                .expect(httpStatus.BAD_REQUEST);


            expect(res.body.message).to.equal(`A mesh with name '${meshData.name}' already exists`);
        });
    });

    describe('# DELETE /meshs', async () => {
        it('should delete mesh', async () => {
            const res = await request(app)
                .delete(`/meshs/${createdMesh._id}`)
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(meshData.name);
            expect(res.body.shortDesc).to.equal(meshData.shortDesc);
            expect(res.body.longDesc).to.equal(meshData.longDesc);
        });
    });

// Things to test:
    // - CRUD
    // - should fail when user tries to RUD but doesn't own mesh
});
