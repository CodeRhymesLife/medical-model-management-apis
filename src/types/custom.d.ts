import { InstanceType } from 'typegoose';
import { User } from '../routes/users/users.model';
import { LoggerInstance } from 'winston';

declare module 'express' {
  export interface Request {
    /** The authenticated user */
    authedUser: InstanceType<User>;
      
    /**
     * The user who's id matches the :userId
     * parameter when calling the /users API
     */
      loadedUser: InstanceType<User>;
      
    /** Request id */
    id: string;

    /** Request logger */
    winston: any;
  }
}
