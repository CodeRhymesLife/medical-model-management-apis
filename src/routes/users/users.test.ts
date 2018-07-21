import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../index';
import settings from '../../config/settings';
import { createUser, testData, TestUser } from '../../tests/testUtils';
import { UserModel } from './users.model';

const expect = chai.expect;
chai.config.includeStack = true;

describe('## User APIs', () => {
    /** Validates the response retruend from one of the /users APIs */
    const validateUserResponse = (responseObj: any, expected: TestUser): void => {
        expect(responseObj.name).to.equal(expected.auth.name);
        expect(responseObj.email).to.equal(expected.auth.email);
    };

    /** Remove all users after each test */
    afterEach(() => {
        return UserModel.remove({});
    });

    describe('# POST /users', () => {
        it('should create a new user', async () => {
            // Create a new user
            const res = await request(app)
                .post('/users')
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.CREATED);

            // Validate the reponse
            validateUserResponse(res.body, testData.users.one);
        });

        it('should fail to create a new user with the same email as an old user', async () => {
            // Create a user with user one's info
            await createUser(testData.users.one);

            // Create a new user
            const res = await request(app)
                .post('/users')
                .set(settings.headers.idToken, testData.users.one.idToken)  // Attempt to create user one again
                .expect(httpStatus.BAD_REQUEST);

            // Validate the reponse
            expect(res.body.message).to.equal(`A user with email '${testData.users.one.auth.email}' already exists`);
        });
    });

    describe('# GET /users/:userId', () => {
        it('should get user details for self', async () => {
            // Create the user
            const user = await createUser(testData.users.one);

            // Get the user's details
            const res = await request(app)
                .get(`/users/${user._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.OK);

            // Validate the reponse
            validateUserResponse(res.body, testData.users.one);
        });

        it('should get user details for another user', async () => {
            // Create user one
            await createUser(testData.users.one);

            // Create second user
            const userTwo = await createUser(testData.users.two);

            // Get the user two's details
            const res = await request(app)
                .get(`/users/${userTwo._id}`)                               // Get user two's details
                .set(settings.headers.idToken, testData.users.one.idToken)  // with user one's creds
                .expect(httpStatus.OK);

            // Validate the reponse
            validateUserResponse(res.body, testData.users.two);
        });

        it('should report error with message - Not found, when user does not exists', async () => {
            // Attempt to get a user that doesn't exist
            const res = await request(app)
                .get(`/users/${testData.invalidId}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .expect(httpStatus.NOT_FOUND);

            // Validate the response
            expect(res.body.message).to.equal('Not Found');
        });
    });

    describe('# DELETE /users/', () => {
        it('should report error with message - Unauthorized - when a non-master user tries to delete', async () => {
            // Create the user
            const user = await createUser(testData.users.one);

            // Attempt to delete the user with a non-master user
            const res = await request(app)
                .delete(`/users/${user._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
            // .set(settings.headers.testIsMaster, true) // The testIsMaster request header is not set
                .expect(httpStatus.UNAUTHORIZED);

            // Validate the response message
            expect(res.body.message).to.equal('Unauthorized');
        });

        it('should delete user', async () => {
            // Create the user
            const user  = await createUser(testData.users.one);

            // Delete the user
            const res = await request(app)
                .delete(`/users/${user._id}`)
                .set(settings.headers.idToken, testData.users.one.idToken)
                .set(settings.headers.testIsMaster, 'true')
                .expect(httpStatus.OK);

            // Validate the reponse
            validateUserResponse(res.body, testData.users.one);
        });
    });
});
