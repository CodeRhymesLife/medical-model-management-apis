import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import multer from 'multer';

import { logger } from '../../config/winston';
import APIError from '../helpers/APIError';
import { Mesh, MeshModel } from './meshes.model';
import { MeshStorage } from './meshes.storage';

const LOG_TAG = '[MeshModels.Controller]';

export default class MeshModelController {
    /**
     * Load mesh and append to req.
     * @param {string} id - The mesh's id
     */
    static async load(req: Request, res: Response, next: NextFunction, id: string) {
        try {
            logger.req().info(`${LOG_TAG} attempting to load mesh ${id} onto request`);

            req.loadedMesh = await MeshModel.get(req.authedUser, id);

            logger.req().info(`${LOG_TAG} successfully loaded mesh ${id} onto request`);

            return next();
        } catch (err) {
            logger.req().error(`${LOG_TAG} Error loading mesh with '${id}' onto req. Error: ${err}`);
            return next(err);
        }
    }

    /** List the meshes associated with the given user */
    static async list(req: Request, res: Response, next: NextFunction) {
        const user = req.authedUser;

        try {
            const meshes = await MeshModel.find({ owner: user }).exec();
            logger.req().info(`${LOG_TAG} found '${meshes.length}' associated with user ${user.email}`);
            return res.json(meshes);
        } catch (err) {
            logger.req().error(`${LOG_TAG} error loading meshes associated wtih user ${user.email}`);
            return next(err);
        }
    }

    /** Get loaded mesh */
    static async get(req: Request, res: Response) {
        res.json(req.loadedMesh);
    }

    /** Create new mesh from the passed in files */
    static async create (req: Request, res: Response, next: NextFunction) {
        try {
            // Get the uploaded files
            const files = <Express.Multer.File[]>req.files;

            // Save metadata about the mesh
            const createdMesh = await MeshModel.createMesh(
                req.authedUser,
                req.body.name,
                req.body.shortDesc,
                req.body.longDesc,
                files
            );

            logger.req().info(`${LOG_TAG} successfully created mesh ${createdMesh._id} for user '${req.authedUser.email}'`);
            return res.status(httpStatus.CREATED).json(createdMesh);
        } catch (err) {
            logger.req().error(`${LOG_TAG} error while creating mesh '${req.body.name}'`);
            return next(err);
        }
    }

    /** Updates mesh metadata, but not its files */
    static async update (req: Request, res: Response, next: NextFunction) {
        const mesh = req.loadedMesh;

        try {
            const getValueIfDefined = (value: string, defaultValue: string) => {
                return value != undefined ? value : defaultValue;
            };

            mesh.name = req.body.name || mesh.name;
            mesh.shortDesc = getValueIfDefined(req.body.shortDesc, mesh.shortDesc);
            mesh.longDesc = getValueIfDefined(req.body.longDesc, mesh.longDesc);

            const updatedMesh = await mesh.save();

            logger.req().info(`${LOG_TAG} successfully updated mesh '${updatedMesh.id}' with (potentially new) name '${updatedMesh.name}'`);
            return res.json(updatedMesh);
        } catch (err) {
            logger.error(`${LOG_TAG} error while update mesh '${mesh.id}' with name '${mesh.name}'`);
            return next(err);
        }
    }

    /** Remove the mesh by id */
    static async remove(req: Request, res: Response, next: NextFunction) {
        const mesh = req.loadedMesh;

        try {
            const removedMesh = await mesh.remove();

            logger.req().info(`${LOG_TAG} successfully removed mesh '${removedMesh._id}' with name '${removedMesh.name}'`);
            return res.json(removedMesh);
        } catch (err) {
            logger.req().error(`${LOG_TAG} error while removing mesh '${mesh._id}' with name '${mesh.name}'`);
            return next(err);
        }
    }
}
