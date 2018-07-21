import mongoose from 'mongoose';

import { logger } from '../config/winston';

const LOG_TAG = '[TestSetup]';

/** Cleans the mongoose object after each test */
export const cleanMongoose = () => {
    // Need to cast so typescript doesn't complain about modelSchemas line
    const mongooseCast = <any> mongoose;

    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {};
    mongooseCast.modelSchemas = {};
    mongoose.connection.close();
};

/** Cleans mongoose and drops the db after all tests have run */
after(async () => {
    logger.info(`${LOG_TAG} cleaning up mongo DB`);

    await mongoose.connection.db.dropDatabase();
    cleanMongoose();
    return Promise.resolve();
});


