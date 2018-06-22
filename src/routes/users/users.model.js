/** @namespace medmod.database */
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { isEmail } from 'validator';

import settings from '../../config/settings';
import { logger } from '../../config/winston';
import APIError from '../helpers/APIError';

const LOG_TAG = '[Users.Model]';

/**
* Defines metadata for a user
* @typedef User
*/
const UserSchema = new mongoose.Schema({
  /**
   * Data about the user in google
   * @type {object}
   * @property {string} id    - id of the user on google
   * @property {string} id_token  - the user's last id_token
   * @property {string} name    - the name of the user on google
   * @property {string} email   - the user's gmail address
   */
  google: {
    id: {
      type: String,
      required: true,
    },

    id_token: String,

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: { validator(email) { return isEmail(email); }, message: 'invalid email' },
      required: true,
    },
  },

  /**
   * The date this invitation was created
   * @type {date}
   */
  created: {
    type: Date,
    default: Date.now,
  },
},
  {
    toObject: {
      transform(doc, ret) {
        delete ret.accountMemberships; // eslint-disable-line no-param-reassign
        delete ret.accountInvitations; // eslint-disable-line no-param-reassign
        delete ret.google.id_tokem; // eslint-disable-line no-param-reassign
      },
    },
    toJSON: {
      transform(doc, ret) {
        delete ret.accountMemberships; // eslint-disable-line no-param-reassign
        delete ret.accountInvitations; // eslint-disable-line no-param-reassign
        delete ret.google.id_tokem; // eslint-disable-line no-param-reassign
      },
      virtuals: true,
    },
  });

/**
* The account memberships associated with this user.
* An account membership is created for users that accept their invitation
* @type {Array<medmod.database.AccountMembership>}
*/
UserSchema.virtual('accountMemberships', {
  ref: 'AccountMembership',
  localField: '_id',
  foreignField: 'user',
});

/**
* The invitations associated with this user.
* An invitation is created for each user invited to be a member of an account.
* An AccountMembership is created when the user accepts their invitation
* @type {Array<medmod.database.AccountInvitation>}
*/
UserSchema.virtual('accountInvitations', {
  ref: 'AccountInvitation',
  localField: 'google.email',
  foreignField: 'userEmail',
});

/**
* A list of the account this user is a member of
* @type {Array<medmod.database.Account>}
*/
UserSchema.virtual('accounts').get(function getAccounts() {
  if (!this.accountMemberships) { return undefined; }

  const accounts = [];
  this.accountMemberships.forEach((membership) => {
    accounts.push(membership.account);
  });

  return accounts;
});

/**
* Returns the user's name
* @returns {string}
*/
UserSchema.virtual('name').get(function getNAme() { return this.google.name; });

/**
* Returns the user's email
* @returns {string}
*/
UserSchema.virtual('email').get(function getEmail() { return this.google.email; });

/**
* Returns whether this user is a master user
* @todo this should be read from a config file
* @returns {string}
*/
UserSchema.virtual('isMaster').get(function getIsMaster() {
  return settings.masterUsers.includes(this.email);
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of the user.
   * @returns {Promise<Account, APIError>}
   */
  async get(id) {
    logger.req().info(`${LOG_TAG} attempting to get user by id '${id}'`);

    const user = await this.findById(id).exec();
    if (user) {
      logger.req().info(`${LOG_TAG} found user '${user.name}' by id '${id}'`);
      return user;
    }

    logger.req().error(`${LOG_TAG} user with id ${id} does not exist`);
    const err = new APIError(`user with id ${id} does not exist`, httpStatus.NOT_FOUND);
    throw err;
  },

  /**
   * Create user
   * @param {string} googleId - The id of the user on google.
   * @param {string} googleName - The name of the user on google.
   * @param {string} googleEmail - The user's gmail.
   * @returns {Promise<Account, APIError>}
   */
  async create(googleId, googleName, googleEmail) {
    try {
      // eslint-disable-next-line no-use-before-define
      let user = new User({
        'google.id': googleId,
        'google.name': googleName,
        'google.email': googleEmail,
      });

      user = await user.save();

      logger.req().info(`${LOG_TAG} Successfully created user '${user._id}' with email '${googleEmail}'`);
      return user;
    } catch (err) {
      logger.req().error(`${LOG_TAG} error while creating user with email '${googleEmail}'. Error: ${err}`);
      const unknownError = new APIError(`Unable to create user with email '${googleEmail}'`);
      return Promise.reject(unknownError);
    }
  },
};

const User = mongoose.model('User', UserSchema);
export default User;
