import { Request } from 'express';
import kue from 'kue';
import { InstanceType } from 'typegoose';

import config from '../../../config/config';
import { logger, createReqLogger } from '../../../config/winston';
import { Mesh, MeshModel } from '../meshes.model';

const LOG_TAG = '[MeshProcessor]';

const QUEUE_NAME = 'mesh_processor';

/**
 * Handles mesh processing.
 * Meshes are processed in a queue using kue.
 * During processing, mesh files are loaded in Blender
 * and prepared for the web and virtual reality. Blender exports
 * an FBX file that's then passed to Unity which creates an asset package
 * for VR, AR and other platforms so apps on those platforms can load
 * meshes at runtime.
 */
class MeshProcessor {
    // The jobs queue
    queue: kue.Queue;

    constructor() {
        // Create the queue
        this.queue = kue.createQueue({ redis: config.redisUrl });

        // Begin processing meshes
        this.queue.process(QUEUE_NAME, this.process);
    }

    /** Enque a new mesh for processing */
    enqueue(req: Request, mesh: InstanceType<Mesh>) {
        logger.req().info(`${LOG_TAG} adding mesh '${mesh._id}' with name '${mesh.name}' to processing queue`);

        // Create a job with all of the data we need to process the mesh
        const jobData = <MeshJobData>{
            loggerData: {
                reqId: req.id,
                sessionId: req.sessionID,
            },
            meshId: mesh._id,
        };
        const job = this.queue.create(QUEUE_NAME, jobData);

        // Attaches kue events that track the model in the queue
        this.attachEvents(job);

        // Saves the job. It will be enqueued soon.
        job.save();

        logger.req().info(`${LOG_TAG} successfully created job '${job.id}' for mesh '${mesh._id}' with name '${mesh.name}'`);
    }

    /** Begin processing a mesh */
    async process(job: kue.Job, done: kue.DoneCallback) {
        // Get a mesh job and make sure it includes the mesh from the DB
        const meshJob = MeshProcessor.createMeshJob(job);

        // Get the mesh from the db
        try {
            const mesh = await MeshModel.findById(meshJob.meshData.meshId).exec();

            // If the mesh does not exist throw an error
            if (!mesh) {
                meshJob.reqLogger.info(`${LOG_TAG} unable to find mesh by id ${meshJob.meshData.meshId}.`);
                throw new Error('Mesh does not exist');
            }

            // If all went well save the mesh to the job
            meshJob.meshData.mesh = mesh;
        } catch (err) {
            meshJob.reqLogger.info(`${LOG_TAG} unable to process mesh with id '${meshJob.meshData.meshId}'. Error: ${err}`);
            return done(err);
        }

        // Begin processing the mesh
    }

    /** Attach events that are fired as the mesh moves through the queue */
    private void; attachEvents(job: kue.Job) {
        // Passes a mesh job to the kue callback
        const createMeshJobListener = (listener: (meshJob: MeshJob, ...args: any[]) => void) => {
            return () => {
                // Get a mesh job, but don't waste time getting the mesh from the db
                const meshJob = MeshProcessor.createMeshJob(job);

                // Add the mesh job to the beginning of the arguments collection
                const args = Array.prototype.slice.call(arguments);
                args.unshift(meshJob);
                listener.apply(undefined, args);
            };
        };

        job
            .on('enqueue', createMeshJobListener((meshJob: MeshJob) => {
                meshJob.reqLogger.info(`${LOG_TAG} enqueued model with id '${meshJob.meshData.meshId}'`);

                // Start queued timer
                meshJob.reqLogger.profile(`${meshJob.meshData.meshId} queued time`);
            }))
            .on('start', createMeshJobListener((meshJob: MeshJob) => {
                meshJob.reqLogger.info(`${LOG_TAG} starting to process model with id '${meshJob.meshData.meshId}'`);

                // End queued timer
                meshJob.reqLogger.profile(`${meshJob.meshData.meshId} queued time`);

                // Start processing timer
                meshJob.reqLogger.profile(`${meshJob.meshData.meshId} processing time`);
            }))
            .on('progress', createMeshJobListener((meshJob: MeshJob, progress: number) => {
                meshJob.reqLogger.info(`${LOG_TAG} ${progress}% through processing model with id '${meshJob.meshData.meshId}'`);
            }))
            .on('complete', createMeshJobListener((meshJob: MeshJob) => {
                meshJob.reqLogger.info(`${LOG_TAG} done processing model with id '${meshJob.meshData.meshId}'`);

                // End processing timer
                meshJob.reqLogger.profile(`${meshJob.meshData.meshId} processing time`);
            }))
            .on('failed', createMeshJobListener((meshJob: MeshJob, errMsg: string) => {
                meshJob.reqLogger.error(`${LOG_TAG} failed while processing model with id '${meshJob.meshData.meshId}'. Error: ${errMsg}`);
            }));
    }

    /**
     * Create a mesh job from the kue job.
     * Kue returns a job with data that is not typed.
     * We cast the kue job to an object that has the data we need to process the model.
     * When includeMesh is true we retrieve the mesh from the DB
     */
    private static createMeshJob(job: kue.Job): MeshJob {
        const meshJob = <MeshJob>job;
        meshJob.meshData = job.data;
        meshJob.reqLogger = createReqLogger(meshJob.meshData.loggerData.reqId, meshJob.meshData.loggerData.sessionId);

        return meshJob;
    }
}

/**
 * Extends the underlying kue job with extra properties
 * important for processing meshes
 */
interface MeshJob extends kue.Job {
    /** Data for this job */
    meshData: MeshJobData;

    /** Logger associated with the request */
    reqLogger: any;
}

/** Data for a mesh job */
interface MeshJobData {
    /** Data about the logger */
    loggerData: LoggerData;

    /** The mesh's id */
    meshId: string;

    /** The mesh to process */
    mesh: InstanceType<Mesh>;
}

/** Logger data */
interface LoggerData {
    /** The request id */
    reqId: string;

    /** The session id */
    sessionId: string;
}

export default new MeshProcessor();
