import fs from 'fs-extra';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import multer from 'multer';
import path from 'path';
import { InstanceType } from 'typegoose';

import ApiError from '../helpers/APIError';
import { logger } from '../../config/winston';
import { GridFSFile, GridFSFileModel, Mesh, MeshFileCollection, MeshFileCollectionModel } from './meshes.model';

const LOG_TAG = '[MeshStorage]';

/** The max number of files that can be uploaded */
export const MaxFiles = 100;

/** The name of the field used to upload */
export const FieldName = 'modelFile';

/** Handles storing mesh models */
export class MeshStorage {
    /** Upload and validates mesh files */
    static uploadFilesToTempDir (req: Request, res: Response, next: NextFunction) {
        // Configure multer to save and configure the files
        const upload = multer({
            limits: { files: MaxFiles },
            fileFilter: MeshStorage.limitFileTypes,
        });

        // Get a handler that supports a max number of files
        const uploadReqHandler = upload.array(FieldName, MaxFiles);

        // Call the handler
        uploadReqHandler(req, res, next);
    }

    /** Remove file from the file system */
    static async deleteFile(file: Express.Multer.File): Promise<boolean> {
        try {
            await fs.unlink(file.path);
            logger.info(`${LOG_TAG} successfully deleted '${file.originalname}' from the file system`);
            return true;
        } catch (err) {
            logger.error(`${LOG_TAG} failed to delete file '${file.originalname} from disk. Error: ${err}'`);
            return false;
        }
    }

    /** Ensure the uploaded files have a valid extension and a valid mimetype */
    private static limitFileTypes (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
        const mimeTypes = /jpeg|png|text/;
        const isValidMimeType = mimeTypes.test(file.mimetype);

        const fileTypes = /.jpg|.jpeg|.png|.obj|.mtl|.fbx|.stl/;
        const fileExt = path.extname(file.originalname).toLowerCase();
        const isValidFileType = fileTypes.test(fileExt);

        if (isValidMimeType && isValidFileType) {
            return callback(undefined, true);
        }

        callback(new Error(`At least one file type or mime type is invalid. Supported types are file: '${fileTypes}', mime: ${mimeTypes}`), false);
    }
}
