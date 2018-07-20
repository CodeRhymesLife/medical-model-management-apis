/** @namespace medmod */
import mongoose from 'mongoose';
import { InstanceType, ModelType, prop, staticMethod, Typegoose } from 'typegoose';
import httpStatus from 'http-status';
import { isEmail } from 'validator';

import settings from '../../config/settings';
import { logger } from '../../config/winston';
import APIError from '../helpers/APIError';

const LOG_TAG = '[Users.Model]';

/** Represents a google user */
export class GoogleUser {
    /** Id of the google user */
    @prop({ required: true })
    id: string;

    /** Name of the user */
    @prop({ required: true })
    name: string;

    /** User's email */
    @prop({ required: true })
    email: string;
}

/** Represents a User */
export class User extends Typegoose {
    /** Data from google describing this user */
    @prop({ required: true })
    google: GoogleUser;

    /** The date this user was created */
    @prop({ required: true, default: Date.now })
    created: Date;

    /** User's name */
    @prop()
    get name(): string {
        return this.google.name;
    }

    /** User's email */
    @prop()
    get email(): string {
        return this.google.email;
    }

    /** Returns whether this user is a master user */
    get isMaster(): boolean {
        return settings.masterUsers.includes(this.email);
    }

    /**
     * Get user
     * @param {ObjectId} id - The objectId of the user.
     */
    @staticMethod
    static async getUser(this: ModelType<User> & typeof User, id: string): Promise<InstanceType<User>> {
        logger.req().info(`${LOG_TAG} attempting to get user by id '${id}'`);

        const user = await this.findById(id).exec();
        if (user) {
            logger.req().info(`${LOG_TAG} found user '${user.name}' by id '${id}'`);
            return user;
        }

        logger.req().error(`${LOG_TAG} user with id ${id} does not exist`);
        const err = new APIError(`user with id ${id} does not exist`, httpStatus.NOT_FOUND);
        throw err;
    }

    /**
     * Create user
     * @param {string} googleId - The id of the user on google.
     * @param {string} googleName - The name of the user on google.
     * @param {string} googleEmail - The user's gmail.
     */
    @staticMethod
    static async createUser(this: ModelType<User> & typeof User, googleId: string, googleName: string, googleEmail: string): Promise <InstanceType<User>> {
        try {
            // eslint-disable-next-line no-use-before-define
            const savedUser = await UserModel.create({
                'google.id': googleId,
                'google.name': googleName,
                'google.email': googleEmail,
            });

            logger.req().info(`${LOG_TAG} Successfully created user '${savedUser._id}' with email '${googleEmail}'`);
            return savedUser;
        } catch (err) {
            logger.req().error(`${LOG_TAG} error while creating user with email '${googleEmail}'. Error: ${err}`);
            const unknownError = new APIError(`Unable to create user with email '${googleEmail}'`);
            return Promise.reject(unknownError);
        }
    }
}

export const UserModel = new User().getModelForClass(User, { schemaOptions: { toJSON: {virtuals: true } } });

