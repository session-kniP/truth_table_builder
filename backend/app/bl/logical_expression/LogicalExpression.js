const Parser = require('../parser/Parser');
const Lexer = require('../parser/Lexer');
const TokenType = require('../parser/token/TokenType');
const ChainException = require('../exception/ChainException');
const TrurhTable = require('./TruthTable');

class LogicalExpression {
    constructor(expression) {
        this.expression = expression;
        this.truthTable = [];
        this.parser = new Parser(new Lexer());
    }

    getSubexpressions() {
        return this.parser.parse(this.expression);
    }

    // returns matrix with all combinations of logical expression
    getTruthTable() {
        try {
            if (this.parser.lexer.tokens.length === 0) {
                this.parser.lexer.tokenize(this.expression);
            }
            const tokenNames = this.#getUniqueTokenNames(
                this.parser.lexer.tokens
            );

            const combinations = this.generateInputCombinations(tokenNames);
            this.parser.parse(this.expression);

            const truthTable = new TrurhTable(
                tokenNames.concat(this.parser.expressionTree.map((expr) => expr.toString()))
            );

            combinations.forEach((row) => {
                this.parser.values.forEach((value) => {
                    value.val = row.find((el) => el.name === value.name).value;
                });

                const truthTableRow = row.map(el => el.value);

                this.parser.expressionTree.forEach((el) => {
                    truthTableRow.push(el.eval());
                });

                truthTable.addRow(truthTableRow);
            });

            return truthTable;
        } catch (e) {
            throw new ChainException({
                message: 'Truth table exception',
                cause: e,
            });
        }
    }

    // x1=0 x2=0; x1=0 x2=1 etc...
    generateInputCombinations(tokenNames) {
        if (this.parser.lexer.tokens.length === 0) {
            this.parser.lexer.tokenize(this.expression);
        }

        if (!tokenNames) {
            tokenNames = this.#getUniqueTokenNames(this.parser.lexer.tokens);
        }
        const cols = tokenNames.length;
        const rows = Math.pow(2, cols);

        const matrix = [];

        // (2^cols) / 2^col
        for (let i = 0; i < rows; i++) {
            const binary = parseInt(i)
                .toString(2)
                .split('')
                .map((el) => !!parseInt(el));
            const binaryRow = Array(cols - binary.length)
                .fill(false)
                .concat(binary);
            matrix.push(
                binaryRow.map((el, idx) => {
                    return { name: tokenNames[idx], value: el };
                })
            );
        }

        return matrix;
    }

    #getUniqueTokenNames(tokenSet) {
        //remove duplicates and get only TOKEN_NAMES(VALUES) with VAR type
        return tokenSet
            .filter((t) => t.type === TokenType.VAR)
            .filter(
                (val, idx, self) =>
                    self.findIndex((el) => el.value === val.value) === idx
            )
            .map((t) => t.value);
    }

    reset() {
        this.parser.lexer.tokens.length = 0;
        this.truthTable = [];
    }

    toString() {
        return this.parser.expressions
            .reduce((str, e) => str + e.toString())
            .toString();
    }
}

module.exports = LogicalExpression;
