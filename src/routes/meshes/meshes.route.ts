import express from 'express';
import validate from 'express-validation';

import paramValidation from '../../config/param-validation';
import MeshModelsCtrl from './meshes.controller';
import { MeshStorage } from './meshes.storage';
import { UsersAuthUtils } from '../users/users.auth';

const router = express.Router(); // eslint-disable-line new-cap

/** Make sure the user is authorized for each request */
router.use(UsersAuthUtils.load);

router.route('/')
/** GET /meshes List all the user's meshes */
    .get(MeshModelsCtrl.list)

/** POST /users - Create a new mesh */
    .post(validate(paramValidation.createMesh),
        MeshStorage.uploadFilesToTempDir,
        MeshModelsCtrl.create
    );

router.route('/:modelId')
/** GET /meshes/:modelId - Get mesh by id */
    .get(MeshModelsCtrl.get)

/* PUT /meshes/:modelId - Update mesh **/
    .put(validate(paramValidation.updateMesh), MeshModelsCtrl.update)

/** DELETE /meshes/:moedlId - Delete mesh */
    .delete(MeshModelsCtrl.remove);

/** Load the model for all requests that contain the model id para */
router.param('modelId', MeshModelsCtrl.load);

export default router;
