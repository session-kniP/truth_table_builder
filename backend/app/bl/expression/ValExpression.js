const Expression = require("./Expression");

//real value (e.g. 0 or 1, false or true)
class ValExpression extends Expression {
    constructor(val) {
        super();
        this.val = val; 
    }

    eval() {
        super.eval();
        return this.val;
    }
}

module.exports = ValExpression;
