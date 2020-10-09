const assert = require('assert').strict;
const Parser = require('../app/bl/parser//Parser');
const TokenType = require('../app/bl/parser/TokenType');
const Lexer = require('../app/bl/parser/Lexer');
const BinaryExpression = require('../app/bl/expression/BinaryExpression');
const LogicalExpression = require('../app/bl/logical_expression/LogicalExpression');

describe('parser tests', () => {
    it('if expression is "-X1 + X2"', () => {
        const isToken = TokenType.EQUIV.includes('~');
        assert.strictEqual(isToken, true);
    });
    it('operators are all in one array', () => {
        //const lexer = new Lexer('(-X1 + X2) * X3');
        //lexer.tokenize();
        ////console.log(lexer.tokens);
        //const vals = [false, false, true];
        //const varTokens = lexer.tokens.filter((t) => t.type === TokenType.VAR);
        //vals.forEach((el, idx) => varTokens[idx].replaceValue(el));

        //const parser = new Parser(lexer.tokens);

        //console.log(parser.parse()[0].eval());
        
        const expression = new LogicalExpression('(-X1 + X2) * X3 * X1');
        const combinations = expression.generateInputCombinations();
        console.log(combinations);
    });
});
