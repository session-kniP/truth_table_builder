const ChainException = require('../../exception/ChainException');

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
