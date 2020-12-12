const { ChainException } = require('@session-knip/general');

class ParserException extends ChainException {
    constructor(message, cause) {
        super(message, cause);
        this.message = message;
        this.cause = cause;
        this.name = 'ParserException';
    }
}

module.exports = ParserException;
