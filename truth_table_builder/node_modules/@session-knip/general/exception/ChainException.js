class ChainException extends Error {
    constructor({ message, cause }) {
        super(message);
        this.cause = cause;
    }

    stackTrace() {
        return `${this.message}\n${
            this.cause && this.cause.stackTrace
                ? this.cause.stackTrace()
                : this.cause && this.cause.message
                ? this.cause.message
                : ''
        }`;
    }
}

module.exports = ChainException;
