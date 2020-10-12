const Expression = require("./Expression");

//real value (e.g. 0 or 1, false or true)
class ValExpression extends Expression {
    constructor({name, val}) {
        super();
        this.name = name;
        this.val = val; 
    }

    eval(value) {
        super.eval();
        if(value) {
            this.val = value;
        }
        return this.val;
    }

    toString() {
        super.toString();
        return this.name.toString();
    }

    clone() {
        return new ValExpression(this.val);
    }
}

module.exports = ValExpression;
