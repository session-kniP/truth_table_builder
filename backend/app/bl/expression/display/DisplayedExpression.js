const Expression = require('../Expression');

// to display sub expressions, e.g. sub expressions in brackets
// this is wrapper only to store the display params, overrides toString() but calls eval() directly
class DisplayedExpression extends Expression {
    /**
     * @param {? extends Expression} expr
     * @param {object: display params} param1
     */
    constructor(expr, { leftDisplay, rightDisplay }) {
        super();
        this.expr = expr;
        this.leftDisplay = leftDisplay;
        this.rightDisplay = rightDisplay;
    }

    eval() {
        return this.expr.eval();
    }

    toString() {
        return `${this.leftDisplay}${this.expr.toString()}${this.rightDisplay}`;
    }

    clone() {
        super.clone();
        return new DisplayedExpression(this.expr.clone(), {
            leftDisplay: this.leftDisplay,
            rightDisplay: this.rightDisplay,
        });
    }
}

module.exports = DisplayedExpression;
