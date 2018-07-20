import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../index';
import settings from '../../config/settings';
import { fakeIdToken, fakeIdTokenHeaderValue } from '../../tests/testUtils';

const expect = chai.expect;
chai.config.includeStack = true;

describe('## User APIs', () => {
    // User created from id token
    let createdUser: any  = undefined;

    describe('# POST /users', async () => {
        it('should create a new user', async () => {
            const res = await request(app)
                .post('/users')
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .expect(httpStatus.CREATED);

            expect(res.body.name).to.equal(fakeIdToken.name);
            expect(res.body.email).to.equal(fakeIdToken.email);
            createdUser = res.body;
        });
    });

    describe('# GET /users/:userId', () => {
        it('should get user details', async () => {
            const res = await request(app)
                .get(`/users/${createdUser._id}`)
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(createdUser.name);
            expect(res.body.email).to.equal(createdUser.email);
        });

        it('should report error with message - Not found, when user does not exists', async () => {
            const res = await request(app)
                .get('/users/56c787ccc67fc16ccc1a5e92')
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .expect(httpStatus.NOT_FOUND);

            expect(res.body.message).to.equal('Not Found');
        });
    });

    describe('# DELETE /users/', () => {
        it('should report error with message - Unauthorized - when a non-master user tries to delete', async () => {
            const res = await request(app)
                .delete(`/users/${createdUser._id}`)
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
            // .set(settings.headers.testIsMaster, true) // The testIsMaster request header is not set
                .expect(httpStatus.UNAUTHORIZED);

            expect(res.body.message).to.equal('Unauthorized');
        });

        it('should delete user', async () => {
            const res = await request(app)
                .delete(`/users/${createdUser._id}`)
                .set(settings.headers.idToken, fakeIdTokenHeaderValue)
                .set(settings.headers.testIsMaster, 'true')
                .expect(httpStatus.OK);

            expect(res.body.name).to.equal(createdUser.name);
            expect(res.body.email).to.equal(createdUser.email);
        });
    });
});
