import fs from 'fs-extra';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import multer from 'multer';
import path from 'path';

import APIError from '../helpers/APIError';
import { logger } from '../../config/winston';

const LOG_TAG = '[MeshStorage]';

/** The max number of files that can be uploaded */
export const MaxFiles = 100;

/** The name of the field used to upload */
export const FieldName = 'modelFile';

const MeshFileExtensions = /.obj|.fbx|.stl/;
const MeshFileMimeTypes = /octet-stream|text\/plain/;
const ResourceFileExtensions = /.jpg|.jpeg|.mtl|.png/;
const ResourceFileMimeTypes = /octet-stream|jpeg|png/;

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

    /**
     * Tells whether the given file has a mesh file extension and mime type
     * @returns true if file has a mesh file extension and mimetype. False otherwise
     */
    static IsMeshFile (filename: string, mimeType: string): boolean {
        const fileExt = path.extname(filename).toLowerCase();
        return MeshFileExtensions.test(fileExt) && MeshFileMimeTypes.test(mimeType);
    }

    /**
     * Tells whether the given file has a resource file extension and mime type
     * @returns true if file has a resource file extension and mimetype. False otherwise
     */
    static IsMeshResourceFile(filename: string, mimeType: string): boolean {
        const fileExt = path.extname(filename).toLowerCase();
        return ResourceFileExtensions.test(fileExt) && ResourceFileMimeTypes.test(mimeType);
    }

    /** Ensure the uploaded files have a valid extension and a valid mimetype */
    private static limitFileTypes (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
        const filename = file.originalname;
        const mimeType = file.mimetype;

        // Make sure the file is a mesh file or a resource file file
        if (MeshStorage.IsMeshFile(filename, mimeType) || MeshStorage.IsMeshResourceFile(filename, mimeType)) {
            return callback(undefined, true);
        }

        const validFileTypes = MeshFileExtensions.toString() + ResourceFileExtensions.toString();
        const validMimeTypes = MeshFileMimeTypes.toString() + ResourceFileMimeTypes.toString();

        logger.error(`${LOG_TAG} '${filename}' with mimetype '${mimeType}' has an invalid file type or mime type.` +
            `Valid types are file: '${validFileTypes}', mime: '${validMimeTypes}'`);
        const invalidError = new APIError(`'${filename}' with mimetype '${mimeType}' has an invalid file type or mime type. ` +
                `Valid types are file: '${validFileTypes}', mime: '${validMimeTypes}'`, httpStatus.BAD_REQUEST);

        callback(invalidError, false);
    }
}
