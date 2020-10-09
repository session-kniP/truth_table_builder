const TokenType = require('../parser/TokenType');
const Expression = require('./Expression');

// represents expression of operation
class UnaryExpression extends Expression {
    constructor(type, val) {
        super();
        this.type = type;
        this.val = val;
    }

    eval() {
        super.eval();
        switch(this.type) {
            case TokenType.NOT:
                return !this.val.eval();
        }
    }
}

module.exports = UnaryExpression;
