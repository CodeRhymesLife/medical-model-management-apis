import express from 'express';
import glob from 'glob';
import path from 'path';

import { logger } from './config/winston';

const LOG_TAG = '[routes]';

const router = express.Router(); // eslint-disable-line new-cap

/**
* Mounts all routes defined in *.route.js files in routes/
* @example
*   accounts.route.js routes will be mounted to /accounts
*/
const mountRoutes = () => {
  logger.info(`${LOG_TAG} mounting routes`);

  // Route definitions
  const files = glob.sync('**/*.route.js');

  // Mount routes for each file
  files.forEach((routeFilename) => {
    const relativePath = path.relative(__dirname, routeFilename);
    const routes = require(`./${relativePath}`); // eslint-disable-line global-require

    // Create the url using the first part of the filename
    // e.g. auth.route.js will generate /auth
    const routeName = path.basename(routeFilename, '.route.js');
    const url = `/${routeName}`;

    // Mount the routes
    logger.info(`${LOG_TAG} ${path.basename(routeFilename)} -> ${url}`); // eslint-disable-line no-console
    router.use(url, routes.default); // https://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6
  });
};

// Mount routes defined in *.route.js files
mountRoutes();

export default router;
