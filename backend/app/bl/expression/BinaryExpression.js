const Expression = require('./Expression');
const TokenType = require('../parser/TokenType');
const ExpressionException = require('./ExpressionException');

// represents expression of binary operation
class BinaryExpression extends Expression {
    constructor(type, firstVal, secondVal) {
        super();
        this.type = type;
        this.firstVal = firstVal;
        this.secondVal = secondVal;
    }

    eval() {
        super.eval();

        try {
            const firstEval = this.firstVal.eval();
            const secondEval = this.secondVal.eval();
        } catch (e) {
            throw new ExpressionException({
                message: "Can't evaluate one of expression values",
                cause: e,
            });
        }

        if (typeof firstEval !== 'boolean' || typeof secondEval !== 'boolean') {
            throw new ExpressionException({
                message: 'Calculated values should have boolean type',
            });
        }

        switch (this.type) {
            case TokenType.CONJ:
                return !!(this.firstVal.eval() * this.secondVal.eval());
            case TokenType.DISJ:
                return !!(this.firstVal.eval() + this.secondVal.eval());
            case TokenType.IMPL:
                return this.implication(
                    this.firstVal.eval(),
                    this.secondVal.eval()
                );
            case TokenType.EQUIV:
                return this.equivalence(
                    this.firstVal.eval(),
                    this.secondVal.eval()
                );
        }
    }

    implication(firstVal, secondVal) {
        return !!(!firstVal + secondVal);
    }

    equivalence(firstVal, secondVal) {
        return (
            this.implication(firstVal, secondVal) *
            this.implication(secondVal, firstVal)
        );
    }
}

module.exports = BinaryExpression;
