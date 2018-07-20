import mongoose from 'mongoose';
import util from 'util';

// config should be imported before importing any other file
import config from './config/config';

import bluebird from 'bluebird';
import pe from 'pretty-error';

import app from './config/express';
import { logger } from './config/winston';

const LOG_TAG = '[medmod-apis]';

// Start making errors look pretty
pe.start();

/** Connect to mongo db */
const connectToDb = async () => {
    // Use bluebird promises
    mongoose.Promise = bluebird;

    try {
        const mongoUri = config.mongo.host;
        await mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
        logger.info(`${LOG_TAG} mongo connection successful`);
    } catch (err) {
        logger.error(`${LOG_TAG} Error connecting to mongoose db ${err}`);
    }

    // print mongoose logs in dev env
    if (config.mongooseDebug) {
        mongoose.set('debug', (collectionName: mongoose.Collection, method: Function, query: mongoose.Query<any>, doc: mongoose.Document) => {
            logger.req().info(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
        });
    }
};

// Connect to mongo
connectToDb();

// Start the server
app.listen(config.port, () => {
    logger.info(`${LOG_TAG} server started on port ${config.port} (${config.env}).`); // eslint-disable-line no-console
});

export default app;

