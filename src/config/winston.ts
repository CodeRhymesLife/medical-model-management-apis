import { NextFunction, Request, Response } from 'express';
import contextService from 'request-context';
import winston from 'winston';
import WinstonContext from 'winston-context';

const LOG_TAG = '[medmod-apis-winston]';

const WINSTON_LOGGING_CONFIG = {
    transports: {
        console: {
            enabled: true,

            colorize: true,
            timestamp: false,
            json: false,
            handleExceptions: true,
        },

        file: {
            enabled: true,

            colorize: true,
            filename: 'logs/apis.log',
            timestamp: true,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
        },
    },
};

/**
 * Enable all transports for initial app startup
 * then disable them according to settings.
 * Add console transport.
 */
winston.remove(winston.transports.Console);

/** Console */
if (WINSTON_LOGGING_CONFIG.transports.console.enabled) {
    winston.add(winston.transports.Console, WINSTON_LOGGING_CONFIG.transports.console);
}

/** File transport. */
if (WINSTON_LOGGING_CONFIG.transports.file.enabled) {
    winston.add(winston.transports.File, WINSTON_LOGGING_CONFIG.transports.file);
}

winston.req = () => {
    const reqLogger = contextService.get('request:req.winston');
    if (reqLogger) { return reqLogger; }

    winston.warn(`${LOG_TAG} unable to retrieve logger for request. Returning static logger`);
    return winston;
};

const createReqLogger = (reqId: string, sessionId: string) => {
    const l = new WinstonContext(winston,
        '',
        {
            reqId,
            sessionId,
        });

    // Profile method currently not handled
    // https://github.com/citrix-research/node-winston-context/issues/2
    l.profile = winston.profile;

    return l;
};

export const logger = winston;

export const setupReqLogger = (req: Request, res: Response, next: NextFunction) => {
    contextService.middleware('request')(req, res, () => {
        // eslint-disable-next-line  no-param-reassign
        req.winston = createReqLogger(req.id, req.sessionID || req.session.id);
        contextService.set('request:req', req);

        next();
    });
};
