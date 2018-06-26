import express from 'express';
import validate from 'express-validation';

import paramValidation from '../../config/param-validation';
import * as userGroupsCtrl from './userGroups.controller';
import * as usersAuth from '../users/users.auth';

const router = express.Router(); // eslint-disable-line new-cap

/** Load the authorized user before each request */
router.use(usersAuth.load);

router.route('/')
  /** GET /userGroups - Get list of userGroups */
  .get(userGroupsCtrl.list)

  /** POST /userGroups - Create new userGroup */
  .post(validate(paramValidation.createUserGroup),
    usersAuth.isMaster,
    userGroupsCtrl.create);

router.route('/:userGroupId')
  /** GET /userGroups - Get userGroup by id */
  .get(userGroupsCtrl.get)

  /** DELETE /userGroups - Remove userGroup by id */
  .delete(usersAuth.isMaster, userGroupsCtrl.remove);
/** Attach userGroup to request when API with userGroupId route parameter is hit */
router.param('userGroupId', userGroupsCtrl.load);

export default router;
