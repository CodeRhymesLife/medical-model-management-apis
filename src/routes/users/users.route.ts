import express from 'express';

import UsersCtrl from './users.controller';
import { UsersAuthUtils } from './users.auth';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
/** POST /users - Create new users */
    .post(UsersCtrl.create);

router.route('/:userId')
/** GET /users/:userId - Get user */
    .get(UsersCtrl.get)

/** DELETE /users/:userId - Delete user */
    .delete(UsersAuthUtils.load, UsersAuthUtils.isMaster, UsersCtrl.remove);

/** Attach loadedUser to request when API with userId route parameter is hit */
router.param('userId', UsersCtrl.load);

export default router;
