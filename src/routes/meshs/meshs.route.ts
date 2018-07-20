import express from 'express';
import validate from 'express-validation';

import paramValidation from '../../config/param-validation';
import MeshModelsCtrl from './meshs.controller';
import * as usersAuth from '../users/users.auth';

const router = express.Router(); // eslint-disable-line new-cap

/** Make sure the user is authorized for each request */
router.use(usersAuth.load);

router.route('/')
/** GET /meshs List all the user's meshs */
    .get(MeshModelsCtrl.list)

/** POST /users - Create a new mesh */
    .post(validate(paramValidation.createMesh), MeshModelsCtrl.create);

router.route('/:modelId')
/** GET /meshs/:modelId - Get mesh by id */
    .get(MeshModelsCtrl.get)

/* PUT /meshs/:modelId - Update mesh **/
    .put(MeshModelsCtrl.update)

/** DELETE /meshs/:moedlId - Delete mesh */
    .delete(MeshModelsCtrl.remove);

/** Load the model for all requests that contain the model id para */
router.param('modelId', MeshModelsCtrl.load);

export default router;
