const { ChainException } = require('@session-knip/general');

export class HttpException extends ChainException {
    constructor({ message, statusCode, cause }) {
        super(message, cause);
        this.statusCode = statusCode;
    }

    stackTrace() {
        return this.message + '\n' + this.cause && this.cause.stackTrace();
    }

    getStatusCode() {
        return this.statusCode;
    }
}
