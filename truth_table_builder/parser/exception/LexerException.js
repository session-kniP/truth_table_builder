const {ChainException} = require('@session-knip/general');

class LexerException extends ChainException {
    constructor(message, cause) {
        super(message, cause);
        this.message = message;
        this.cause = cause;
        this.name = 'LexerException';
    }
}

module.exports = LexerException;