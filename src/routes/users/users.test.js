import mongoose from 'mongoose';
import request from 'supertest-as-promised'; // eslint-disable-line import/no-extraneous-dependencies
import httpStatus from 'http-status';
import chai from 'chai'; // eslint-disable-line import/no-extraneous-dependencies

import app from '../../index';
import settings from '../../config/settings';

const expect = chai.expect;
chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## User APIs', () => {
  // A fake token used to authenticate the user
  const fakeIdToken = {
    idToken: 'abcdefg', // Fake id token
    id: '123456789', // Fake google id
    name: 'Test User', // user's name
    email: 'test@test.com', // user's email
  };

  // In the test env the id token is a json string
  const fakeIdTokenHeaderValue = JSON.stringify(fakeIdToken);

  // User created from id token
  let createdUser = null;

  describe('# POST /users', async () => {
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/users')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .expect(httpStatus.OK);

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
        .set(settings.headers.testIsMaster, true)
        .expect(httpStatus.OK);

      expect(res.body.name).to.equal(createdUser.name);
      expect(res.body.email).to.equal(createdUser.email);
    });
  });
});
