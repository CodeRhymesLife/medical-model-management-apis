import child_process from 'child_process';

import config from '../../../config/config';
import { logger } from '../../../config/winston';

const LOG_TAG = '[Blender]';

/** Communicates with Blender */
export default class Blender {
    /**
     * Instantiates an instance of Blender with the python
     * script and given arguments
     */
    static python(pythonFilePath: string, scriptArgs: string[]): Promise<string> {
        return new Promise((fulfill, reject) => {
            // Arguments to call blender with
            const blenderArgs = [
                "--background",
                "-noaudio",
                "--python", pythonFilePath,
                "--"
            ].concat(scriptArgs);

            logger.req().info(`${LOG_TAG} running ${pythonFilePath} ${blenderArgs.join(' ')}`);

            // Run the Blender script in a child process
            const blenderProc = child_process.spawn("blender", blenderArgs);

            let cummulativeStdout = '';
            blenderProc.stdout.on('data', (data) => {
                const dataStr = data.toString();
                logger.req().info(`${LOG_TAG} ${dataStr}`);
                cummulativeStdout += dataStr;
            });

            let cummulativeStderr = '';
            blenderProc.stderr.on('data', (data) => {
                const dataStr = data.toString();
                logger.req().error(`${LOG_TAG} ${dataStr}`);
                cummulativeStderr += dataStr;
            });

            blenderProc.on('exit', (code) => {
                if (code === 0) {
                    logger.req().info(`${LOG_TAG} successfully ran blender script and retrieved the following response '${cummulativeStdout}'`);
                    fulfill(cummulativeStdout);
                } else {
                    logger.req().error(`${LOG_TAG} error running blender. Exit code: ${code}. Error: ${cummulativeStderr}`);
                    reject(cummulativeStderr);

                }
            });
        });
    }
}
