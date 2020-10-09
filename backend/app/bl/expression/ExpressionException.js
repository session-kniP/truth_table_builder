const ChainException = require('../exception/ChainException');

class ExpressionException extends ChainException {
    constructor({message, cause}) {
        super({ message: 'ExpressionException:\n' + message, cause});
    }
}

module.exports = ExpressionException;
