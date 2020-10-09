const Parser = require('../parser/Parser');
const Lexer = require('../parser/Lexer');
const TokenType = require('../parser/TokenType');

class LogicalExpression {
    constructor(expression) {
        this.expression = expression;
        this.truthTable = [];
        this.parser = new Parser(new Lexer());
    }

    // x1=0 x2=0; x1=0 x2=1 etc...
    generateInputCombinations() {
        this.parser.lexer.tokenize(this.expression);

        const tokenNames = this.getUniqueTokenNames(this.parser.lexer.tokens);
        const cols = tokenNames.length;
        const rows = Math.pow(2, cols);

        const matrix = [];

        // (2^cols) / 2^col
        for (let i = 0; i < rows; i++) {
            const binary = parseInt(i).toString(2).split('');
            const binaryRow = Array(cols - binary.length)
                .fill('0')
                .concat(binary);
            matrix.push(binaryRow);
        }

        return matrix;
    }

    getUniqueTokenNames(tokenSet) {
        //remove duplicates and get only TOKEN_NAMES(VALUES) with VAR type
        return tokenSet
            .filter((t) => t.type === TokenType.VAR)
            .filter(
                (val, idx, self) =>
                    self.findIndex((el) => el.value === val.value) === idx
            )
            .map((t) => t.value);
    }

    // returns matrix with all combinations of logical expression
    getTruthTable() {
        
    }
}

module.exports = LogicalExpression;
