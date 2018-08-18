import child_process from 'child_process';

import { logger } from '../../../config/winston';

const LOG_TAG = '[Blender]';

/** Communicates with Blender */
export default class Blender {
    /**
     * Instantiates an instance of Blender with the python
     * script and given arguments
     */
    static python(pythonFilePath: string, scriptArgs: string[]): Promise<string> {
        logger.req().info(`${LOG_TAG} running blender script '${pythonFilePath}' with args ${scriptArgs.join(',')}`);

        // Arguments to call blender with
        const blenderArgs = [
            "--background",
            "-noaudio",
            "--python", pythonFilePath,
            "--"
        ].concat(scriptArgs);

        return new Promise((fulfill, reject) => {
            // Run the Blender script in a child process
            child_process.execFile(
                "blender",
                blenderArgs,
                (error: Error, stdout: Buffer, stderr: Buffer) => {
                    if (error || stderr) {
                        logger.req().error(`${LOG_TAG} error running blender. Error: ${error || stderr}`);
                        reject(error || stderr);
                    } else {
                        const stdoutStr = stdout.toString();
                        logger.req().info(`${LOG_TAG} successfully ran blender script and retrieved the following response '${stdoutStr}'`);
                        fulfill(stdoutStr);
                    }
                }
            );
        });
    }
}
