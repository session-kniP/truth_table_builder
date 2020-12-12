const TokenType = require('./token/TokenType');

const LogicalOperators = Object.freeze([
    ...TokenType.NOT,
    ...TokenType.CONJ,
    ...TokenType.DISJ,
    ...TokenType.IMPL,
    ...TokenType.EQUIV,
    ...TokenType.LB,
    ...TokenType.RB,
]);

const OperatorParts = Object.freeze(['-', '>', '/', '\\']);

const PunctuationSymbols = Object.freeze([' ']);

const LettersAndNumbers = /[a-zA-Z0-9]/;

exports.LogicalOperators = LogicalOperators;
exports.OperatorParts = OperatorParts;
exports.PunctuationSymbols = PunctuationSymbols;
exports.LettersAndNumbers = LettersAndNumbers;
