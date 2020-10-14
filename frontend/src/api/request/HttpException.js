const { ChainException } = require('@session-knip/general');

export class HttpException extends ChainException {
    constructor({ message, cause }) {
        super({ message: 'HttpException\n' + message, cause });
    }

    stackTrace() {
        return this.message + '\n' + this.cause && this.cause.stackTrace();
    }
}
