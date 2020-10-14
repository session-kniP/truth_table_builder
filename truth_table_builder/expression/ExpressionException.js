const {ChainException} = require('@session-knip/general');

class ExpressionException extends ChainException {
    constructor({message, cause}) {
        super({ message: 'ExpressionException:\n' + message, cause});
    }
}

module.exports = ExpressionException;
