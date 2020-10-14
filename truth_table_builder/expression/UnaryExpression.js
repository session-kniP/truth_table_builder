const TokenType = require('../parser/token/TokenType');
const Expression = require('./Expression');

// represents expression of operation
class UnaryExpression extends Expression {
    constructor(type, val) {
        super();
        this.type = type;
        this.val = val;     //expression
    }

    eval(value) {
        super.eval();
        if (value) {
            this.val = value;
        }
        switch (this.type) {
            case TokenType.NOT:
                return !this.val.eval();
        }
    }

    toString() {
        super.toString();
        return `${this.type[0]}${this.val.toString()}`; 
    }

    clone() {
        return new UnaryExpression(this.type, this.val.clone());
    }
}

module.exports = UnaryExpression;
