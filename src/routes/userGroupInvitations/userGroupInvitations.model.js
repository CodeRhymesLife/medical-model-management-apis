/** @namespace medmod-apis */
import mongoose from 'mongoose';
import { isEmail } from 'validator';
import { logger } from '../../config/winston'; // eslint-disable-line import/no-extraneous-dependencies

import AccountMembership from './userGroupMemberships.model.js';
import APIError from '../helpers/APIError';

const LOG_TAG = '[UserGroupInvitations]';
/**
* Defines metadata for an userGroup invitation--a concept that
* represents an invitation for a user to join an userGroup
* @typedef UserGroupInvitation
*/
const UserGroupInvitationSchema = new mongoose.Schema({
  /**
   * The userGroup this invitation is for
   * @type {(medmod.database.Account|ObjectId)}
   */
  userGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },

  /**
   * The email of the user this invitation is for
   * @type {string}
   */
  userEmail: {
    type: String,
    trim: true,
    lowercase: true,
    validate: { validator(email) { return isEmail(email); }, message: 'invalid email' },
    required: true,
  },

  /**
   * The user that created the invitation
   * @type {User}
   */
  creator: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  }

  /**
   * The date this invitation was created
   * @type {date}
   */
  created: {
    type: Date,
    default: Date.now,
  },

  /**
   * The date this invitation was accepted
   * @type {date}
   */
  accepted: Date,
});

/** Make sure there is only one invitation for a unique user for under single userGroup */
UserGroupInvitationSchema.index({ userGroup: 1, userEmail: 1 }, { unique: true });

UserGroupInvitationSchema.methods({
   /**
    * Accepts the invitation
    * @returns {UserGroupInvitation}
    */
    async accept() {
      const invitation = this;
      const userGroup = this.userGroup;
      const creator = this.creator;
      const email = userEmail;

      try {
        logger.req().info(`${LOG_TAG} accepting invitation for user '${email}' for userGroup '${userGroup._id}'`);
        invitation.accepted = Date.now();
        const acceptedInvitation = await invitation.save();
  
        logger.req().info(`${LOG_TAG} user '${email}' accepted invitation '${acceptedInvitation._id}' successfully`);
        next();
      } catch (err) {
        logger.req().info(`${LOG_TAG} unable to accept invitation '${invitation._id}' for user '${email}'`);
        next(err);
      } 
    },
});

UserGroupInvitationSchema.statics = {
    /**
     * Gets the invitation with the given id
     * @param {ObjectId} id - invitation id
     * @returns {Promise<Invitation|Error>}
     */
    async get(id) {
        try {
            logger.req().info(`${LOG_TAG} getting invitation with id '${id}'`);

            // eslint-disable-next-line no-use-before-define
            const invitation = await UserGroupInvitation.findById(id).exec();

            if(invitation) {
              logger.req().info(`${LOG_TAG} successfully retrieved userGroup invitation '${id}'`);
              return invitation;
            }

            const notFoundError = new APIError(`Unable to find invitation with id '${id}'`);
            throw notFoundError;
        } catch(err) {
            logger.req().info(`${LOG_TAG} unable to find invitation by id '${id}'`);
            throw err;
        }
    }
    
    /**
     * Creates an invitation to the given userGroup for the given user
     * @param {ObjectId} userGroup - The userGroup to create the invitation for
     * @param {User} creator - The user creating the invitation
     * @param {email} - The email of the user the invitation is for
     */
    async create(userGroup, creator, userEmail) {
      try {
        logger.req().info(`${LOG_TAG} creating invitation for user '${userEmail}' from '${creator._id}' for userGroup '${userGroup._id}'`);
        const invitation = new UserGroupInvitation({
          userGroup,
          creator,
          userEmail,
        });
        await invitation.save();
        
        logger.req().info(`${LOG_TAG} successfully created invitation for user '${userEmail}' from '${creator._id}' for userGroup '${userGroup._id}'`);
      } catch(err) {
        logger.req().info(`${LOG_TAG} unable to create userGroup for user '${userEmail}' from '${creator._id}' for userGroup '${userGroup._id}'. Error: ${err}`);
        throw err;
      }      
    },
}

const UserGroupInvitation = mongoose.model('UserGroupInvitation', UserGroupInvitationSchema);
export default UserGroupInvitation;

