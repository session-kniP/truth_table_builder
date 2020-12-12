class ChainException extends Error {
    constructor(message, cause) {
        super(message);
        this.message = message;
        this.cause = cause;
        this.name = 'ChainException';
    }

    getMessage() {
        return this.message;
    }

    getRootMessage() {
        let cause = this.cause;
        if (cause) {
            while (cause instanceof ChainException && cause.getCause() instanceof ChainException) {
                cause = cause.getCause();
            }
            return cause.message;
        }
        console.log('THE MESSAGE IS...', this.message);
        return this.message;
    }

    getCause() {
        return this.cause;
    }

    stackTrace() {
        return (
            this.stack +
            (this.cause
                ? '\n' + (this.cause instanceof ChainException ? this.cause.stackTrace() : this.cause.stack)
                : '')
        );
    }
}

module.exports = ChainException;
