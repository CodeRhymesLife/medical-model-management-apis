/** @namespace medmod-apis */
import mongoose from 'mongoose';
import status from 'http-status';

import { logger } from '../../config/winston';
import APIError from '../helpers/APIError';

const LOG_TAG = '[UserGroups.Model]';

/**
* Defines metadata for an userGroup--a concept that
* facilitates data sharing between multiple users
* @typedef UserGroup
*/
const UserGroupSchema = new mongoose.Schema({
  /**
  * The name of this userGroup
  * @type {string}
  */
  name: {
    type: String,
    validate: { validator(name) { return name; }, message: 'invalid name' },
    unique: true,
    required: true,
  },

   /**
  * The time this userGroup was created
  * @type {date}
  */
  created: {
    type: Date,
    default: Date.now,
  },
},
  {
  /**
  * Makes sure userGroupMemberships and userGroupInvitations
  * are not converted from json
  */
    toObject: {
      transform(doc, ret) {
        delete ret.userGroupMemberships; // eslint-disable-line no-param-reassign
        delete ret.userGroupInvitations; // eslint-disable-line no-param-reassign
      },
    },

  /**
  * Makes sure userGroupMemberships and userGroupInvitations
  * are not converted to json
  */
    toJSON: {
      transform(doc, ret) {
        delete ret.userGroupMemberships; // eslint-disable-line no-param-reassign
        delete ret.userGroupInvitations; // eslint-disable-line no-param-reassign
      },
    },
  });

/**
* The userGroup memberships associated with this userGroup.
* An userGroup membership is created for users that accept their invitation
* @type {Array<medmod.database.UserGroupMembership>}
*/
UserGroupSchema.virtual('userGroupMemberships', {
  ref: 'UserGroupMembership',
  localField: '_id',
  foreignField: 'userGroup',
});

/**
* The invitations associated with this userGroup.
* An invitation is created for each user invited to be a member of this userGroup.
* An UserGroupMembership is created when a user accepts their invitation
* @type {Array<medmod.database.UserGroupInvitation>}
*/
UserGroupSchema.virtual('userGroupInvitations', {
  ref: 'UserGroupInvitation',
  localField: '_id',
  foreignField: 'userGroup',
});

/**
* A list of users associated with this userGroup
* Every user in this list has an userGroup membership
* @type {Array<medmod.database.User>}
*/
UserGroupSchema.virtual('users').get(function users() {
  if (!this.userGroupMemberships) { return []; }

  const members = [];
  this.userGroupMemberships.forEach((membership) => {
    if (membership.user) { members.push(membership.user); }
  });

  return members;
});

/**
* A list of user emails for users that have not accepted their invitation
* @type {Array<string>}
*/
UserGroupSchema.virtual('invitations').get(function invitations() {
  if (!this.userGroupInvitations) { return []; }

  const emails = [];
  this.userGroupInvitations.forEach((invitation) => {
    if (invitation.userEmail && !invitation.accepted) { emails.push(invitation.userEmail); }
  });

  return emails;
});

/** Makes sure virtuals are serialized in toJson calls */
UserGroupSchema.set('toJSON', { virtuals: true });

/**
 * Statics
 */
UserGroupSchema.statics = {
  /**
   * Get userGroup
   * @param {ObjectId} id - The objectId of the userGroup.
   * @returns {Promise<UserGroup, APIError>}
   */
  async get(id) {
    logger.req().info(`${LOG_TAG} attempting to get userGroup by id '${id}'`);

    const userGroup = await this.findById(id).exec();
    if (userGroup) {
      logger.req().info(`${LOG_TAG} found userGroup '${userGroup.name}' by id '${id}'`);
      return userGroup;
    }
    logger.req().error(`${LOG_TAG} userGroup with id ${id} does not exist`);

    const err = new APIError(`userGroup with id ${id} does not exist`, status.NOT_FOUND);
    return Promise.reject(err);
  },

  /**
   * Create userGroup
   * @param {string} name - The name of the userGroup.
   * @returns {Promise<UserGroup, APIError>}
   */
  async create(name) {
    // eslint-disable-next-line no-use-before-define
    let userGroup = new UserGroup({
      name,
    });

    try {
      userGroup = await userGroup.save();

      logger.req().info(`${LOG_TAG} Successfully created userGroup ${userGroup._id}`);
      return userGroup;
    } catch (err) {
      if (err.code === 11000) {
        logger.req().error(`${LOG_TAG} Error validating userGroup name '${name}'. Name already exists.`);
        const nameError = new APIError(`'${name}' already exists`, status.BAD_REQUEST);
        return Promise.reject(nameError);
      }

      const unknownError = new APIError(`Unable to create an userGroup with name '${name}'`);
      return Promise.reject(unknownError);
    }
  },
};

const UserGroup = mongoose.model('UserGroup', UserGroupSchema);
export default UserGroup;
