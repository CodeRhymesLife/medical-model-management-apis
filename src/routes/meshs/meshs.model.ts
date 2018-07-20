/** @namespace medmod.apis */
import { MongoError } from 'mongodb';
import mongoose from "mongoose";
import {
    arrayProp,
    instanceMethod,
    InstanceType,
    ModelType,
    prop,
    staticMethod,
    Ref,
    Typegoose,
} from "typegoose";
import httpStatus from "http-status";

import { logger } from "../../config/winston";
import APIError from "../helpers/APIError";
import { User } from "../users/users.model";

const LOG_TAG = "[MeshModels.Model]";

/** Represents a part of a mesh, like an aorta */
export class MeshPart extends Typegoose {}

/** Mesh states */
export enum ResourceState {
    DELETED = 'deleted',
        INVALID = 'invalid',
        PROCESSING = 'processing',
        READY = 'ready',
}

/** Represents a Mesh model */
export class Mesh extends Typegoose {
    /** The owner of this model */
    @prop({ ref: User, required: true })
    owner: Ref<User>;

    /** The version of this model */
    @prop({ required: true })
    version: number;

    /** The name of this model */
    @prop({ required: true })
    name: string;

    /** A short description of the model */
    @prop() shortDesc: string;

    /** A long description of the model */
    @prop() longDesc: string;

    /** The state of the model */
    @prop({
        required: true,
        enum: ResourceState,
    })
    state: ResourceState;

    /** The date the model was created */
    @prop({ default: Date.now })
    created: Date;

    /** The date the model was last accessed */
    @prop({ default: Date.now })
    lastAccessed: Date;

    /** Array of model parts */
    @arrayProp({ itemsRef: MeshPart })
    parts: Ref<MeshPart>[];

    /** Returns whether the given user is authorized to interact with this mesh */
    @instanceMethod
    isAuthorized(user: InstanceType<User>): boolean {
        return this.owner.toString() === user._id.toString();
    }

    /** Gets a model by its id */
    @staticMethod
    static async get(
        this: ModelType<Mesh> & typeof Mesh,
        user: InstanceType<User>,
        id: string
    ): Promise<InstanceType<Mesh>> {
        logger.req().info(`${LOG_TAG} attempting to get mesh by id '${id}' for user '${user.email}'`);

        try {
            logger.req().info(`${LOG_TAG} getting mesh with id ${id}`);
            const mesh = await this.findById(id).exec();

            // If the mesh does not exist return bad request
            if (!mesh) {
                logger.req().error(`${LOG_TAG} mesh with id '${id}' does not exist`);
                const doesNotExistError = new APIError(`Mesh with id ${id} does not exist`, httpStatus.NOT_FOUND);
                throw doesNotExistError;
            }

            // Make sure the user is authorized to get this mesh
            if (!mesh.isAuthorized(user)) {
                logger.req().error(`${LOG_TAG} user '${user.email}' is not authorized to interact with mesh '${id}'`);
                const unauthorizedError = new APIError(`User '${user.email}' is not authorized to interact with mesh '${id}'`, httpStatus.UNAUTHORIZED);
                throw unauthorizedError;
            }

            logger.req().info(`${LOG_TAG} successfully retrieved mesh '${mesh.name}' by id '${id}' for user '${user.email}'`);
            return mesh;
        } catch (err) {
            logger.req().error(`${LOG_TAG} unable to retrieve mesh by id '${id}'. Err: ${err}`);
            throw err;
        }
    }

    /**
     * Create user
     * @param {string} name - The name of the mesh
     * @param {string} shortDesc - a short description of the mesh
     * @param {string} longDesc - a long description of the mesh
     */
    @staticMethod
    static async createMesh(
        this: ModelType<Mesh> & typeof Mesh,
        owner: InstanceType<User>,
        name: string,
        shortDesc: string,
        longDesc: string
    ): Promise<InstanceType<Mesh>> {
        logger.info(`${LOG_TAG} creating new mesh with name '${name}'`);

        try {
            const savedMesh = await MeshModel.create({
                owner,
                name,
                shortDesc,
                longDesc,
                version: 1,
                state: ResourceState.PROCESSING,
            });

            logger.req().info(`${LOG_TAG} Successfully created mesh '${savedMesh._id}' owned by user '${owner.email}'`);
            return savedMesh;
        } catch (err) {
            if (err instanceof MongoError && err.code == 11000) {
                logger.req().error(`${LOG_TAG} user ${owner.email} attempted to create a mesh with name '${name}' but a mesh by that name already exists`);
                const duplicateKeyError = new APIError(`A mesh with name '${name}' already exists`, httpStatus.BAD_REQUEST, true);
                return Promise.reject(duplicateKeyError);
            } else {
                logger.req().error(`${LOG_TAG} error while creating mesh. Error: ${err}`);
                const unknownError = new APIError('Unable to create mesh');
                return Promise.reject(unknownError);
            }
        }
    }
}

export const MeshModel = new Mesh().getModelForClass(Mesh, {
    schemaOptions: { toJSON: { virtuals: true } },
});

