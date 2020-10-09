const ChainException = require('../../exception/ChainException');

class ParserException extends ChainException {
    constructor({ message, cause }) {
        super({ message: 'ParserException:\n' + message, cause });
    }
}

module.exports = ParserException;
