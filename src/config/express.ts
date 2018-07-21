import express from 'express';
import morgan from 'morgan';
import expressSession from 'express-session';
import expressRequestId from 'express-request-id';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import expressValidation from 'express-validation';
import helmet from 'helmet';

import config from './config';
import routes from '../index.routes';
import APIError from '../routes/helpers/APIError';
import { logger, setupReqLogger } from './winston';

const app = express();

// Log all requests
app.use(morgan('combined', { stream: logger.stream }));

// Create sessions
app.use(expressSession({
    secret: 'medmod-apis',
    cookie: {},
    resave: true,
    saveUninitialized: true,
}));

// Assign a unique UUID to each request
// and assign it to the X-Request-Id header
app.use(expressRequestId({ setHeader: true }));

// Allow the logger to include properties from
// each request
app.use(setupReqLogger);

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// create transports for express winston
const transports = [
    new (logger.transports.Console)({
        json: true,
        colorize: true,
    }),
];

// enable detailed API logging
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
app.use(expressWinston.logger({
    transports,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorize: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
}));

// mount all routes on / path
app.use('/', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof expressValidation.ValidationError) {
        // validation error contains errors which is an array of error each containing message[]
        const unifiedErrorMessage: string = err.errors.map((error: any) => error.messages.join('. ')).join(' and ');
        const error = new APIError(unifiedErrorMessage, err.status, true);
        return next(error);
    } else if (!(err instanceof APIError)) {
        const apiError = new APIError(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

// log error in winston transports
app.use(expressWinston.errorLogger({
    transports,
}));

// error handler, send stacktrace only during development
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => // eslint-disable-line no-unused-vars
    res.status(err.status).json({
        message: err.isPublic ? err.message : (<any>httpStatus)[err.status],
        stack: config.env === 'development' ? err.stack : {},
    })
);

export default app;

