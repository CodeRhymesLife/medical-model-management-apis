import express from 'express';

import * as usersCtrl from './users.controller';
import * as usersAuth from './users.auth';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** POST /users - Create new users */
  .post(usersCtrl.create);

router.route('/:userId')
  /** GET /users/:userId - Get user */
  .get(usersCtrl.get)

  /** DELETE /users/:userId - Delete user */
  .delete(usersAuth.load, usersAuth.isMaster, usersCtrl.remove);

/** Attach loadedUser to request when API with userId route parameter is hit */
router.param('userId', usersCtrl.load);

export default router;
