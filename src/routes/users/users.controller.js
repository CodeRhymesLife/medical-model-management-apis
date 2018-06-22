import { logger } from '../../config/winston';
import * as usersAuth from './users.auth';
import User from './users.model';

const LOG_TAG = '[Users.Controller]';

/**
 * Load user and append to req.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {string} id - The user's id
 */
export const load = async (req, res, next, id) => {
  try {
    // eslint-disable-next-line  no-param-reassign
    req.loadedUser = await User.get(id);
    return next();
  } catch (err) {
    logger.req().error(`${LOG_TAG} Error loading user with '${id}' to req`);
    return next(err);
  }
};

/**
 * Get user
 * @returns {User}
 */
export const get = async (req, res) => res.json(req.loadedUser);

/**
 * Create new user from the google id token
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {User}
 */
export const create = async (req, res, next) => {
  const userData = await usersAuth.verifyIdToken(req);

  try {
    const user = await User.create(userData.id, userData.name, userData.email);

    logger.req().info(`${LOG_TAG} successfully created user '${user._id}' with email '${userData.email}'`);
    return res.json(user);
  } catch (err) {
    logger.req().error(`${LOG_TAG} error while creating user with email '${userData.email}'`);
    return next(err);
  }
};

/**
 * Create new user from the google id token
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {User}
 */
export const remove = async (req, res, next) => {
  const user = req.loadedUser;

  try {
    const removedUser = await user.remove();

    logger.req().info(`${LOG_TAG} successfully removed user '${removedUser._id}' with email '${removedUser.email}'`);
    return res.json(removedUser);
  } catch (err) {
    logger.req().error(`${LOG_TAG} error while removing user '${user._id}' with email '${user.email}'`);
    return next(err);
  }
};
