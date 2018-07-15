import httpStatus from 'http-status';

/**
 * @extends Error
 */
class ExtendableError extends Error {
  /** Http status code */
  status: Number;

  /** Is this error public */
  isPublic: boolean;

  /** Is this error operational */
  isOperational: boolean;

  constructor(message: string, status: Number, isPublic: boolean) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
      Error.captureStackTrace(this, <Function><any>this.constructor.name);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
export default class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message: string, status: Number = httpStatus.INTERNAL_SERVER_ERROR, isPublic: boolean = false) {
    super(message, status, isPublic);
  }
}
