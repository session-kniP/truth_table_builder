class ChainException extends Error {
    constructor({ message, cause }) {
        super(message);
        this.cause = cause;
    }
}

module.exports = ChainException;
