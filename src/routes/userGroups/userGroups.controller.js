import { logger } from '../../config/winston';
import UserGroup from './userGroups.model';

const LOG_TAG = '[UserGroups.Controller]';

/**
 * Load userGroup and append to req.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {string} id - The userGroup id
 */
export const load = async (req, res, next, id) => {
  try {
    // eslint-disable-next-line  no-param-reassign
    req.loadedUserGroup = await UserGroup.get(id);
    return next();
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error adding userGroup '${id}' to req`);
    return next(err);
  }
};

/**
 * Get userGroup
 * @returns {UserGroup}
 */
export const get = async (req, res) => res.json(req.loadedUserGroup);

/**
 * Create new userGroup
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @property {string} req.body.name - The name of the userGroup.
 * @returns {UserGroup}
 */
export const create = async (req, res, next) => {
  const name = req.body.name;

  try {
    const userGroup = await UserGroup.create(name);

    logger.req().info(`${LOG_TAG} Successfully created userGroup ${userGroup._id}`);
    return res.json(userGroup);
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error while creating userGroup with name ${name}`);
    return next(err);
  }
};

/**
 * Update existing userGroup
 * @property {string} req.body.name - The name of the userGroup.
 * @returns {UserGroup}
 */
export const update = async (req, res, next) => {
  const userGroup = req.loadedUserGroup;
  userGroup.name = req.body.name;

  try {
    const updatedUserGroup = userGroup.save();

    logger.req().info(`${LOG_TAG} successfully updated userGroup ${updatedUserGroup._id}`);
    res.json(updatedUserGroup);
  } catch (err) {
    logger.req().error(`${LOG_TAG} error updating userGroup with id '${userGroup._id}'`);
    next(err);
  }
};

/**
 * Delete userGroup.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {UserGroup}
 */
export const remove = async (req, res, next) => {
  const userGroup = req.loadedUserGroup;

  try {
    const deletedUserGroup = await userGroup.remove();

    logger.req().info(`${LOG_TAG} successfully deleted userGroup '${userGroup.name}' with id '${userGroup._id}'`);
    res.json(deletedUserGroup);
  } catch (err) {
    logger.req().error(`${LOG_TAG} unable to delete userGroup '${userGroup.name}' with id '${userGroup._id}'`);
    next(err);
  }
};

/**
 * List userGroups
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {UserGroup[]}
 */
export const list = async (req, res, next) => {
  const user = req.authedUser;

  try {
    const listUserGroups = user.isMaster ?
      listUserGroupsForMasterUser :         // eslint-disable-line  no-use-before-define
      listUserGroupsForNonMasterUser;       // eslint-disable-line  no-use-before-define

    const userGroups = await listUserGroups(user);

    logger.req().info(`${LOG_TAG} Returning ${userGroups.length || 0} userGroups for user ${user._id}`);
    return res.json(user.userGroups);
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error retrieving userGroups. Error: ${err}`);
    return next(err);
  }
};

/**
 * List userGroups for a master user
 * @param {User} user
 * @returns {UserGroup[]}
 */
const listUserGroupsForMasterUser = async (user) => {
  const userGroups = await UserGroup.find();

  logger.req().info(`${LOG_TAG} returning ${userGroups.length || 0} for user${user.google.email}`);
  return userGroups;
};

/**
 * List userGroups for a non-master user
 * @param {User} user
 * @returns {UserGroup[]}
 */
const listUserGroupsForNonMasterUser = async (user) => {
  // Populate the userGroup memberships for this user
  const populatedUser = await user
    .populate({
      path: 'userGroupMemberships',
      populate: { path: 'userGroup' },
    })
    .execPopulate();

  logger.req().info(`${LOG_TAG} User ${populatedUser._id} is a member of ${populatedUser.userGroups.length || 0} userGroups`);
  return populatedUser.userGroups;
};
