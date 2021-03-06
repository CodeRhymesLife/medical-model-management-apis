import httpStatus from 'http-status';
import chai from 'chai';
import { InstanceType } from 'typegoose';

import app from '../../index';
import settings from '../../config/settings';
import {
    createMesh,
    createUser,
    request,
    TestCollateral,
    testData,
    TestMesh
} from '../../tests/testUtils';
import { Mesh, MeshModel, ResourceStates } from './meshes.model';
import meshProcessor from './meshProcessing/meshProcessor';
import { User } from '../users/users.model';

const expect = chai.expect;
chai.config.includeStack = true;

describe('## Mesh APIs', () => {
    // Test users
    let userOne: InstanceType<User> = undefined;
    let userTwo: InstanceType<User> = undefined;

    /** Validates that the response returned from the /meshes API contains the correct data */
    const validateMeshResponse = (responseObj: any, expected: TestMesh): void => {
        expect(responseObj.name).to.equal(expected.name);
        expect(responseObj.shortDesc).to.equal(expected.shortDesc);
        expect(responseObj.longDesc).to.equal(expected.longDesc);
    };

    /** Setup before any test is run */
    before(async () => {
        // Create test users
        userOne = await createUser(testData.users.one);
        userTwo = await createUser(testData.users.two);
        return Promise.resolve();
    });

    /** Clean up after all tests are run */
    after(async () => {
        // Delete test users
        await userOne.remove();
        return userTwo.remove();
    });

    /** Cleans up after each test */
    afterEach(() => {
        // Deletes all meshes
        return MeshModel.remove({}).exec();
    });

    describe('# POST /meshes', () => {

        describe('POST /meshes with mesh processing disabled', () => {

            /** Setup before any test is run */
            before(async () => {
                // Enter test mode
                // DONT process jobs
                const processMeshes = false;
                meshProcessor.queue.testMode.enter(processMeshes);
                return Promise.resolve();
            });

            /** Clean up after all tests are run */
            after(async () => {
                // Exit queue test mode
                meshProcessor.queue.testMode.exit();
                return Promise.resolve();
            });

            /** Cleans up after each test */
            afterEach(() => {
                // Removes all jobs from the queue
                meshProcessor.queue.testMode.clear();
                return Promise.resolve();
            });

            it('should fail validation when name is undefined', async () => {
                const testMeshWithoutName = <TestMesh>Object.create(testData.meshes.one);
                testMeshWithoutName.name = undefined;

                // Attempt to create a mesh without a name
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testMeshWithoutName)
                    .expect(httpStatus.BAD_REQUEST);

                // Validate the response message is informative
                expect(res.body.message).to.equal('"name" is required');
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(0);
            });

            it('should fail validation when name is empty', async () => {
                const testMeshWithEmptyName = <TestMesh>Object.create(testData.meshes.one);
                testMeshWithEmptyName.name = '';

                // Attempt to create a mesh without a name
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testMeshWithEmptyName)
                    .expect(httpStatus.BAD_REQUEST);

                // Validate the response message is informative
                expect(res.body.message).to.equal('"name" is not allowed to be empty');
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(0);
            });

            it('should fail validation when no files are uploaded', async () => {
                const testMeshWithoutFile = <TestMesh>Object.create(testData.meshes.one);
                testMeshWithoutFile.files = undefined;

                // Attempt to create a mesh without a name
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testMeshWithoutFile)
                    .expect(httpStatus.BAD_REQUEST);

                // Validate the response message is informative
                expect(res.body.message).to.equal('No mesh files detected');
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(0);
            });

            it('should create a new mesh', async () => {
                // Create the mesh
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testData.meshes.one)
                    .expect(httpStatus.CREATED);

                // Validate the response
                validateMeshResponse(res.body, testData.meshes.one);
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(1);
            });

            it('should create a new mesh with the same information as a mesh that already exists', async () => {
                // Create a mesh
                await createMesh(userOne, testData.meshes.one);

                // Create a mesh with the same data
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testData.meshes.one)
                    .expect(httpStatus.CREATED);

                // Validate the response
                validateMeshResponse(res.body, testData.meshes.one);
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(1);
            });
        });

        describe('POST /meshes with mesh processing enabled', () => {
            /** Setup before any test is run */
            before(async () => {
                // Enter test mode
                // DO process jobs
                const processMeshes = true;
                meshProcessor.queue.testMode.enter(processMeshes);
                return Promise.resolve();
            });

            /** Clean up after all tests are run */
            after(async () => {
                // Exit queue test mode
                meshProcessor.queue.testMode.exit();
                return Promise.resolve();
            });

            /** Cleans up after each test */
            afterEach(() => {
                // Removes all jobs from the queue
                meshProcessor.queue.testMode.clear();
                return Promise.resolve();
            });

            it('should create and process new mesh', async () => {
                // Create a mesh
                const res = await request(app)
                    .post('/meshes')
                    .set(settings.headers.idToken, testData.users.one.idToken)
                    .attachTestMesh(testData.meshes.one)
                    .expect(httpStatus.CREATED);

                // Validate the response
                validateMeshResponse(res.body, testData.meshes.one);
                expect(meshProcessor.queue.testMode.jobs.length).to.equal(1);

                // Wait for job to complete
                const jobCompletePromise = new Promise((fulfill, reject) => {
                    const job = meshProcessor.queue.testMode.jobs[0];
                    job.on('enqueue', fulfill);
                });

                // End this test after the job is complete
                await jobCompletePromise;
            });
        });
    });

    describe('# GET /meshes', () => {
        it('should get list of meshes for user', async () => {
            // Create a series of meshes
            await createMesh(userOne, testData.meshes.one);
            await createMesh(userOne, testData.meshes.two);

            // Get a list of the meshes
            const res = await request(app)
                .get(`/meshes`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate that each meshs was returned
            expect(res.body.length).to.equal(2);
            validateMeshResponse(res.body[0], testData.meshes.one);
            validateMeshResponse(res.body[1], testData.meshes.two);
        });

        it('should get user one meshes by not user two', async () => {
            // Create a mesh for user one
            await createMesh(userOne, testData.meshes.one);

            // Create a mesh for user two
            await createMesh(userTwo, testData.meshes.two);

            // Get a list of the meshes for user one
            const res = await request(app)
                .get(`/meshes`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate that only user one's mesh was returned
            expect(res.body.length).to.equal(1);
            validateMeshResponse(res.body[0], testData.meshes.one);
        });
    });

    describe('# GET /meshes/<id>', () => {
        it('should get mesh by id', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one);

            // Get the mesh by its id
            const res = await request(app)
                .get(`/meshes/${mesh._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate the response
            validateMeshResponse(res.body, testData.meshes.one);
        });

        it('should fail when user 1 tries to retrieve mesh owned by user 2', async () => {
            // Create a mesh for user one
            await createMesh(userOne, testData.meshes.one);

            // Create a mesh for user two
            const userTwoMesh = await createMesh(userTwo, testData.meshes.two);

            // Send a request from user one and try to get user two's mesh
            const res = await request(app)
                .get(`/meshes/${userTwoMesh._id}`)                          // User one does not own user 2's mesh
                .set(settings.headers.idToken, testData.users.one.idToken)  // User one does not own user 2's mesh
                .expect(httpStatus.UNAUTHORIZED);

            // Validate repsonse message
            expect(res.body.message).to.equal('Unauthorized');
        });

        it('should fail when user tries to get a mesh that does not exist', async () => {
            // Try to get a mesh that doesn't exist
            const res = await request(app)
                .get(`/meshes/${testData.invalidId}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            // Validate the response message
            expect(res.body.message).to.equal('Not Found');
        });
    });

    describe('# UPDATE /meshes', () => {
        it('should update mesh', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one);

            // The updates to save
            const update: TestMesh = {
                name: 'New name',
                shortDesc: 'short description',
                longDesc: 'some very long description. Mamma I made it!',
                files: [TestCollateral.Cube_FBX],
            };

            // Save the update
            const res = await request(app)
                .put(`/meshes/${mesh._id}`)
                .send(update)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate the response contains the update
            validateMeshResponse(res.body, update);
        });

        it('should fail to update mesh that does not exist', async () => {
            // Attempt to update a mesh that does not exist
            const res = await request(app)
                .put(`/meshes/${testData.invalidId}`) // Invalid mesh id
                .send({ longDesc: 'updated long desc' })
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            expect(res.body.message).to.equal('Not Found');
        });

        it('should fail to update mesh when no data passed to server', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one);

            // No new data will be sent to the server
            const update = {};

            // Attempt to update the mesh with no data
            const res = await request(app)
                .put(`/meshes/${mesh._id}`)
                .send(update)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body.message).to.equal('"value" must contain at least one of [name, shortDesc, longDesc]');
        });

        it('should fail to update mesh with invalid property', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one);

            // Update has invalid property
            const update = {
                invalidProperty: 'This property key is invalid',
            };

            // Attempt to update the mesh with an invalid property
            const res = await request(app)
                .put(`/meshes/${mesh._id}`)
                .send(update)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.BAD_REQUEST);

            // Validate the response message
            expect(res.body.message).to.equal('"value" must contain at least one of [name, shortDesc, longDesc]');
        });

        it('should fail to update mesh when user does not own mesh', async () => {
            // Create a mesh for user one
            await createMesh(userOne, testData.meshes.one);

            // Create a mesh for user two
            const userTwoMesh = await createMesh(userTwo, testData.meshes.two);

            // An update with valid properties
            const update = {
                name: 'new Name',
            };

            // Attempt to update user two's mesh using user one's credentials
            const res = await request(app)
                .put(`/meshes/${userTwoMesh._id}`)                          // User 1 does not own mesh two
                .send(update)
                .set(settings.headers.idToken, testData.users.one.idToken)  // User 1 does not own mesh two
                .expect(httpStatus.UNAUTHORIZED);

            // Validate the response message
            expect(res.body.message).to.equal('Unauthorized');
        });
    });

    describe('# DELETE /meshes', () => {
        it('should fail to delete mesh that does not exist', async () => {
            // Attempt to delete a mesh that doesn't exist
            const res = await request(app)
                .delete(`/meshes/${testData.invalidId}`) // Invalid mesh id
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            // Validate the response
            expect(res.body.message).to.equal('Not Found');
        });

        it('should fail to delete mesh that\'s still processing', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one, ResourceStates.PROCESSING);

            // Attempt to delete a mesh that doesn't exist
            const res = await request(app)
                .delete(`/meshes/${mesh._id}`) // Invalid mesh id
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.CONFLICT);

            // Validate the response
            expect(res.body.message).to.equal(`Mesh state must be '${ResourceStates.READY}' to delete`);
        });

        it('should fail to delete mesh when user does not own mesh', async () => {
            // Create a mesh for user one
            await createMesh(userOne, testData.meshes.one);

            // Create a mesh for user two
            const userTwoMesh = await createMesh(userTwo, testData.meshes.two, ResourceStates.READY);

            // Attempt to delete user two's mesh with user one's credentials
            const res = await request(app)
                .delete(`/meshes/${userTwoMesh._id}`)                       // User 1 does not own mesh two
                .set(settings.headers.idToken, testData.users.one.idToken)  // User 1 does not own mesh two
                .expect(httpStatus.UNAUTHORIZED);

            // Validate response message
            expect(res.body.message).to.equal('Unauthorized');
        });

        it('should delete mesh owned by user', async () => {
            // Create a mesh for user one
            const mesh = await createMesh(userOne, testData.meshes.one, ResourceStates.READY);

            // Delete the mesh
            const res = await request(app)
                .delete(`/meshes/${mesh._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate the response
            validateMeshResponse(res.body, testData.meshes.one);
        });
    });
});
