import { InstanceType } from "typegoose"
import { LoggerInstance } from "winston"

import { User } from "../routes/users/users.model"
import { Mesh } from "../routes/meshs/meshs.model"

declare module "express" {
    export interface Request {
        /** The authenticated user */
        authedUser: InstanceType<User>

            /** The loaded mesh */
            loadedMesh: InstanceType<Mesh>

            /**
             * The user who's id matches the :userId
             * parameter when calling the /users API
             */
            loadedUser: InstanceType<User>

            /** Request id */
            id: string

        /** Request logger */
        winston: any
    }
}
