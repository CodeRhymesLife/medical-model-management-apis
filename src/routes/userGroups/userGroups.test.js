import mongoose from 'mongoose';
import request from 'supertest-as-promised'; // eslint-disable-line import/no-extraneous-dependencies
import httpStatus from 'http-status';
import chai from 'chai'; // eslint-disable-line import/no-extraneous-dependencies

import settings from '../../config/settings';
import app from '../../index';

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

describe('## UserGroups APIs', () => {
  // A fake token used to authenticate the user
  const fakeIdToken = {
    idToken: 'abcdefg', // Fake id token
    id: '123456789', // Fake google id
    name: 'Test User', // user's name
    email: 'test@test.com', // user's email
  };

  // In the test env the id token is a json string
  const fakeIdTokenHeaderValue = JSON.stringify(fakeIdToken);

  /** Create a dummy user */
  const createDummyUser = async() => {
    const res = await request(app)
        .post('/users')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .expect(httpStatus.OK);

    const createdUser = res.body;
    return createdUser;
  };

  /** Delete a user */
  const deleteUser = async(user) => {
    const res = await request(app)
      .delete(`/users/${user._id}`)
      .set(settings.headers.idToken, fakeIdTokenHeaderValue)
      .set(settings.headers.testIsMaster, true)
      .expect(httpStatus.OK);

    const deletedUser = res.body;
    return deletedUser;
  };

  let dummyUser = null;

  before(async () => {
    dummyUser = await createDummyUser();
  });

  after(async () => {
    if (dummyUser) {
      await deleteUser(dummyUser);
      dummyUser = null;
    }
  });

  const userGroupData = [
      { name: 'Test UserGroup 1' },
      { name: 'Test UserGroup 2' },
  ];

  // The created userGroup
  const createdUserGroups = [];

  describe('# POST /UserGroups', () => {
    it('should report error with message - Unauthorized - when a non-master user tries to create an userGroup', async () => {
      const res = await request(app)
        .post('/userGroups')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        // .set(settings.headers.testIsMaster, true) // The testIsMaster request header is not set
        .send(userGroupData[0])
        .expect(httpStatus.UNAUTHORIZED);

      expect(res.body.message).to.equal('Unauthorized');
    });

    it('should create userGroup 1', async () => {
      const res = await request(app)
        .post('/userGroups')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .set(settings.headers.testIsMaster, true)
        .send(userGroupData[0])
        .expect(httpStatus.OK);

      expect(res.body.name).to.equal(userGroupData[0].name);
      createdUserGroups.push(res.body);
    });

    it('should create userGroup 2', async () => {
      const res = await request(app)
        .post('/userGroups')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .set(settings.headers.testIsMaster, true)
        .send(userGroupData[1])
        .expect(httpStatus.OK);

      expect(res.body.name).to.equal(userGroupData[1].name);
      createdUserGroups.push(res.body);
    });
  });

  describe('# GET /UserGroups', () => {
    it('should list userGroups', async () => {
      const res = await request(app)
        .get('/userGroups')
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .expect(httpStatus.OK);

      expect(res.body.length).to.equal(2);
      expect(res.body[0].name).to.equal(createdUserGroups[0].name);
      expect(res.body[1].name).to.equal(createdUserGroups[1].name);
    });
  });

  describe('# DELETE /UserGroups', () => {
    it('should fail to delete userGroup 1 with message UNAUTHORIZED', async () => {
      const res = await request(app)
        .delete(`/userGroups/${createdUserGroups[0]._id}`)
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        // .set(settings.headers.testIsMaster, true)
        .expect(httpStatus.UNAUTHORIZED);
    });

    it('should delete userGroup 1', async () => {
      const res = await request(app)
        .delete(`/userGroups/${createdUserGroups[0]._id}`)
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .set(settings.headers.testIsMaster, true)
        .expect(httpStatus.OK);

      expect(res.body.name).to.equal(createdUserGroups[0].name);
    });

    it('should delete userGroup 2', async () => {
      const res = await request(app)
        .delete(`/userGroups/${createdUserGroups[1]._id}`)
        .set(settings.headers.idToken, fakeIdTokenHeaderValue)
        .set(settings.headers.testIsMaster, true)
        .expect(httpStatus.OK);

      expect(res.body.name).to.equal(createdUserGroups[1].name);
    });
  });
});
