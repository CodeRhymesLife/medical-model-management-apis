import { OAuth2Client } from 'google-auth-library';
import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import { InstanceType } from 'typegoose';

import config from '../../config/config';
import settings from '../../config/settings';
import { logger } from '../../config/winston';
import { User, UserModel } from './users.model.js';
import APIError from '../helpers/APIError';

const LOG_TAG = '[Users.Auth]';

// Create a google auth client.
const authClient = new OAuth2Client('', '', '');

/** Data returned from verifyIdToken */
export interface GoogleAuthData {
  /** Id token returned from google auth */
  idToken: string;

  /** The user's google id */
  id: string;

  /** The user's name */
  name: string;

  /** The user's email */
  email: string;
}

/** Verifies the google id token is valid and returns its payload */
export const verifyIdToken = async (req: Request): Promise<GoogleAuthData> => {
  // Get the google id token from the authorization header or,
  // from the query param
  const idToken = req.get(settings.headers.idToken) || req.query.idToken;
  if (!idToken) {
    logger.req().error(`${LOG_TAG} id token undefined`);
    throw new Error('idToken undefined');
  }

  // If we're running tests the id token will be a json
  // string. Parse and return its values
  if (config.env === 'test') {
    const userData = JSON.parse(idToken);

    logger.req().info(`${LOG_TAG} ##test only## parsed id token ${JSON.stringify(userData)}`);
    return userData;
  }

  // The idToken could be from multiple client applications.
  // Here we crack it open to verify that it's valid
  // and to get the user's data
  try {
    const ticket = await authClient.verifyIdToken({
      idToken,
      audience: settings.oauthApps,
    });

    logger.info(`${LOG_TAG} successfully verified id token`);

    // Get the user's info from the payload
    const payload = ticket.getPayload();
    return {
      idToken,
      id: payload.sub,
      name: payload.name,
      email: payload.email,
    };
  } catch (err) {
    logger.error(`${LOG_TAG} unable to verify id token. Error: ${err}`);
    throw err;
  }
};

/** Gets the user from the google id token */
const getUserFromIdToken = async (req: Request): Promise<InstanceType<User>> => {
  try {
    logger.req().info(`${LOG_TAG} verifying id token`);
    const userData = await verifyIdToken(req);

    logger.req().info(`${LOG_TAG} retrieving user with email '${userData.email}'`);
    const user = await UserModel.findOne({ 'google.id': userData.id }).exec();
    logger.req().info(`${LOG_TAG} successfully retrieved user '${user._id}' with email '${userData.email}'`);
    return user;
  } catch (err) {
    logger.req().error(`${LOG_TAG} error retrieving user from id token. Error: ${err}`);
    throw err;
  }
};

/**
 * Attempts to get a user based on an email address in
 * the request header. The header key is defined in settings.json.
 * This method will only succeed in development mode.
 */
const getUserFromDevEmail = async (req: Request): Promise<InstanceType<User>> => {
  if (config.env !== 'development' && config.env !== 'test') {
    return undefined;
  }

  logger.req().info(`${LOG_TAG} attempting to retrieve dev user`);

  const userEmail = req.get(settings.headers.devEmail);
  if (!userEmail) {
    logger.req().info(`${LOG_TAG} dev user email not defined`);
    return undefined;
  }

  const user = await UserModel.findOne({ 'google.email': userEmail });

  if (user) {
    logger.req().info(`${LOG_TAG} found dev user ${user.google.email}`);
  } else {
    logger.req().warn(`${LOG_TAG} could not find user with email ${userEmail}`);
  }

  return user;
};

/**
 * Gets the user based on their id token or
 * if in development mode an email in a request header.
 */
const getUser = async (req: Request): Promise<InstanceType<User>> => {
  // If we're running in development mode this will try and
  // find a user based on an email in the header
  const devUser = await getUserFromDevEmail(req);
  if (devUser) {
    return devUser;
  }

  // If we could not get a dev user
  // get the user from the google id token
  return getUserFromIdToken(req);
};

/** Load user and append to req. */
export const load = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      logger.req().info(`${LOG_TAG} loading user onto request`);
    req.authedUser = await getUser(req); // eslint-disable-line  no-param-reassign
      logger.req().info(`${LOG_TAG} successfully loaded user ${req.authedUser.email} onto request`);
    return next();
  } catch (err) {
      logger.req().error(`${LOG_TAG} error loading user onto req. Err: ${err}`);
    return next(err);
  }
};

/** Ensures the user is a master user */
export const isMaster = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.authedUser;

  if (user.isMaster) {
    logger.req().info(`${LOG_TAG} '${user.email}' is a master user`);
    next();
  } else if (config.env === 'test' && req.get(settings.headers.testIsMaster)) {
    logger.info(`${LOG_TAG} test is master is set to ${req.get(settings.headers.testIsMaster)}`);
    next();
  } else {
    logger.req().error(`${LOG_TAG} '${user.email}' is not a master user`);
    const unauthorizedErr = new APIError('not a master user', httpStatus.UNAUTHORIZED);
    next(unauthorizedErr);
  }
};

