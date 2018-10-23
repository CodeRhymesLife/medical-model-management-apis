import { NextFunction, Request, Response } from 'express';
import contextService from 'request-context';
import winston from 'winston';
import WinstonContext from 'winston-context';

const LOG_TAG = '[medmod-apis-winston]';


export interface WinstonRequestLogger extends winston.Logger {
    req: () => WinstonRequestLogger;
}

export const logger = <WinstonRequestLogger><any>winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
            ),
            handleExceptions: true,
        }),
        new winston.transports.File({
            filename: 'logs/apis.log',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.json(),
            ),
            handleExceptions: true,
            maxsize: 5242880, // 5MB
        }),
    ],
});

logger.req = (): WinstonRequestLogger => {
    const reqLogger = contextService.get('request:req.winston');
    if (reqLogger) { return reqLogger; }

    logger.warn(`${LOG_TAG} unable to retrieve logger for request. Returning static logger`);
    return logger;
};

export const createReqLogger = (reqId: string, sessionId: string) => {
    const l = new WinstonContext(logger,
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

export const setupReqLogger = (req: Request, res: Response, next: NextFunction) => {
    contextService.middleware('request')(req, res, () => {
        // eslint-disable-next-line  no-param-reassign
        req.winston = createReqLogger(req.id, req.sessionID || req.session.id);
        contextService.set('request:req', req);

        next();
    });
};
