const {ChainException} = require('@session-knip/general');

class ParserException extends ChainException {
    constructor({ message, cause }) {
        super({ message: 'ParserException:\n' + message, cause });
        this.cause = cause;
    }

    stackTrace() {
        const trace = super.stackTrace();
        return `${this.message}\n${trace}`
    }
}

module.exports = ParserException;
