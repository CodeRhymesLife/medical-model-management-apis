import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

import { logger } from '../../config/winston';
import { Mesh, MeshModel } from './meshs.model';

const LOG_TAG = '[MeshModels.Controller]';

export default class MeshModelController {
    /**
     * Load mesh and append to req.
     * @param {string} id - The mesh's id
     */
    static async load(req: Request, res: Response, next: NextFunction, id: string) {
        try {
            req.loadedMesh = await MeshModel.get(id);
            return next();
        } catch (err) {
            logger.req().error(`${LOG_TAG} Error loading mesh with '${id}' to req`);
            return next(err);
        }
    }

    /** List the meshs associated with the given user */
    static async list(req: Request, res: Response, next: NextFunction) {
        const user = req.authedUser;

        try {
            const meshs = MeshModel.find({ owner: user });
            logger.req().info(`${LOG_TAG} found '${meshs.count}' associated with user ${user.email}`);
            return res.json(meshs);
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
            const createdMesh = await MeshModel.createMesh(req.authedUser, req.body.name, req.body.shortDesc, req.body.longDesc);

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
            mesh.name = req.body.name || mesh.name;
            mesh.shortDesc = req.body.shortDesc;
            mesh.longDesc = req.body.longDesc;

            const updatedMesh = await mesh.save();

            logger.info(`${LOG_TAG} successfully updated mesh '${updatedMesh.id}' with (new) name '${updatedMesh.name}'`);
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
