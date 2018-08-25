import { InstanceType } from 'typegoose'

import { User } from '../routes/users/users.model'
import { Mesh } from '../routes/meshes/meshes.model'
import { WinstonRequestLogger } from '../config/winston';

declare module "express" {
    export interface Request {
        /** The authenticated user */
        authedUser: InstanceType<User>

        /** Request id */
        id: string

        /** The loaded mesh */
        loadedMesh: InstanceType<Mesh>

        /**
         * The user who's id matches the :userId
         * parameter when calling the /users API
         */
        loadedUser: InstanceType<User>

        /** Request logger */
        winston: WinstonRequestLogger
    }
}
