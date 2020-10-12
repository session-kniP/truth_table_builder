const TokenType = require('../parser/token/TokenType');
const Expression = require('./Expression');
const ExpressionException = require('./ExpressionException');

// represents expression of binary operation
class BinaryExpression extends Expression {
    constructor(type, firstVal, secondVal) {
        super();
        this.type = type;
        this.firstVal = firstVal;
        this.secondVal = secondVal;
    }

    eval(firstValue, secondValue) {
        super.eval();

        if (firstValue) {
            this.firstVal = firstValue;
        }

        if (secondValue) {
            this.secondVal = secondValue;
        }

        try {
            const firstEval = this.firstVal.eval();
            const secondEval = this.secondVal.eval();

            if (
                typeof firstEval !== 'boolean' ||
                typeof secondEval !== 'boolean'
            ) {
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
        } catch (e) {
            throw new ExpressionException({
                message: "Can't evaluate one of expression values",
                cause: e,
            });
        }
    }

    implication(firstVal, secondVal) {
        return !!(!firstVal + secondVal);
    }

    equivalence(firstVal, secondVal) {
        return !!(
            this.implication(firstVal, secondVal) *
            this.implication(secondVal, firstVal)
        );
    }

    toString() {
        super.toString();
        return `${this.firstVal.toString()} ${
            this.type[0]
        } ${this.secondVal.toString()}`;
    }

    clone() {
        super.clone();
        return new BinaryExpression(
            this.type,
            this.firstVal.clone(),
            this.secondVal.clone()
        );
    }
}

module.exports = BinaryExpression;
