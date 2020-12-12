const assert = require('assert').strict;
const Parser = require('../parser/Parser');
const TokenType = require('../parser/token/TokenType');
const Lexer = require('../parser/Lexer');
const BinaryExpression = require('../expression/BinaryExpression');
const LogicalExpression = require('../logical_expression/LogicalExpression');

describe('parser tests', () => {
    it('if expression is "-X1 + X2" then two subexpressions', () => {
        const expression = new LogicalExpression('-X1 -> X2');
        const subexpressions = expression.getSubexpressions();

        assert.strictEqual(subexpressions.length, 2);
    });
    it('if expression is "X1 + X2 * X1 -> X2 ~ X2" then two unique names', () => {
        const expression = new LogicalExpression('X1 + X2 * X1 -> X2 ~ X2');
        expression.parse();
        const uniqueNames = expression.getUniqueTokenNames();

        assert.strictEqual(uniqueNames.length, 2);
    });
    it('if expression is "X2 * X1 -> X2 ~ X3" then 8 input combinations', () => {
        const expression = new LogicalExpression('X2 * X1 -> X2 ~ X3');
        expression.parse();
        const combinations = expression.generateInputCombinations(
            expression.getUniqueTokenNames()
        );

        assert.strictEqual(combinations.length, 8);
    });
    it('if expression is "X1 -> (X2 ~ X3)" then truth table has 6 true and 2 false values at final expression', () => {
        const expression = new LogicalExpression('X1 -> (X2 ~ X3)');
        const truthTable = expression.getTruthTable();

        assert.strictEqual(truthTable.getResultColumn().filter(el => el === true).length, 6);
        assert.strictEqual(truthTable.getResultColumn().filter(el => el === false).length, 2);
    });
});
