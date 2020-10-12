const assert = require('assert').strict;
const Parser = require('../app/bl/parser/Parser');
const TokenType = require('../app/bl/parser/token/TokenType');
const Lexer = require('../app/bl/parser/Lexer');
const BinaryExpression = require('../app/bl/expression/BinaryExpression');
const LogicalExpression = require('../app/bl/logical_expression/LogicalExpression');

describe('parser tests', () => {
    it('if expression is "-X1 + X2"', () => {
        const isToken = TokenType.EQUIV.includes('~');
        assert.strictEqual(isToken, true);
    });
    it('operators are all in one array', () => {
        try {
            const expression = new LogicalExpression(
                '(-X1 + X2) * X3 + (X3 ~ -X3)'
            );

            console.log(expression.getTruthTable().toString());
        } catch (e) {
            console.log(e);
        }    
    });
});
