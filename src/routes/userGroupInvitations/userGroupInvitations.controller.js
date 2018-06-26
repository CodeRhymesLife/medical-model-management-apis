import { logger } from '../../config/winston';
import userGroupInvitation from './userGroupInvitations.model';

const LOG_TAG = '[UserGroupInvitations.Controller]';

/**
 * Load userGroup invitation and append to req.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {string} id - The userGroup invitation id
 */
export const load = async (req, res, next, id) => {
  try {
    // eslint-disable-next-line  no-param-reassign
    req.loadedUserGroupInvitation = await Account.get(id);
    return next();
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error adding userGroup invitation '${id}' to req`);
    return next(err);
  }
};

/**
 * Get userGroup invitation
 * @returns {Account}
 */
export const get = async (req, res) => res.json(req.loadedAccount);

/**
 * Create new userGroup invitation
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @property {string} req.body.email - The email of the user to invite.
 * @returns {UserGroupInvitation}
 */
export const create = async (req, res, next) => {
  const creator = req.loadedUser;
  const userGroupId = req.body.userGroupId;
  const userEmail = req.body.email;

  try {
    const invitation = await UserGroupInvitation.create(userGroupId, creator, email);

    logger.req().info(`${LOG_TAG} Successfully created userGroup invitation ${invitation._id}`);
    return res.json(invitation);
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error while creating userGroup invitation for user ${email}`);
    return next(err);
  }
};

/**
 * Accepts userGroup invitation and creates a new userGroup membership
 * @returns {UserGroupInvitation}
 */
export const update = async (req, res, next) => {
  const invitation = req.loadedInvitation;
  const user = req.authedUser;

  try {
    // Make sure the user accepting the invitation is
    // a master user or the user the invitation is for
    if(user.isMaster || user.email != invitation.userEmail) {
      logger.req().error(`${LOG_TAG} '${user.email}' cannot accept invitation for '${invitation.userEmail}'`);
      const unauthorizedErr = new APIError(`'${user.email}' cannot accept invitation for '${invitation.userEmail}'`, httpStatus.UNAUTHORIZED);
      throw unauthorizedErr;
    }

    // Accept the invitation
    const acceptedInvitation = await invitation.accept();

    // Create a new membership
    const membership = await AccountMembership.create(invitation.userGroup, user);
    logger.req().info(`${LOG_TAG} successfully created membership '${membership._id}' for user '${user.email}' for userGroup '${invitation.userGroup}'`);

    // Respond with the accepted invitation
    res.json(acceptedInvitation);
  } catch(err) {
    logger.req().error(`${LOG_TAG} unable to accept invitation '${invitation._id}' for user '${user.email}' for userGroup '${invitation.userGroup._id}'`);
    next(err);
  } 
};

/**
 * Delete userGroup invitation.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {UserGroupInvitation}
 */
export const remove = async (req, res, next) => {
  const invitation = req.loadedInvitation;

  try {
    const deletedInvitation = await invitation.remove();
    logger.req().info(`${LOG_TAG} successfully deleted invitation '${invitation._id}' for user '${invitation.userEmail}'`);
    res.json(deletedInvitation);
  } catch (err) {
    logger.req().error(`${LOG_TAG} unable to delete invitation '${invitation._id}' for user '${invitation.userEmail}'`);
    next(err);
  }
};

/**
 * List userGroup invitations
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {UserGroupInvitation[]}
 */
export const list = async (req, res, next) => {
  const user = req.authedUser;

  try {
    logger.req().info(`${LOG_TAG} retrieving invitations for user '${user.email}');
    const invitations = UserGroupInvitation.find({ userEmail: user.email });
    logger.req().info(`${LOG_TAG} Returning ${invitations.length || 0} invitations for user ${user._id}`);
    return res.json(invitations);
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error retrieving invitations. Error: ${err}`);
    return next(err);
  }
};

