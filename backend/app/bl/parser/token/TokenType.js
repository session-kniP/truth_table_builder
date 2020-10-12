/* logical operations and vars:
    - var - variable;
    - not - inversion;    
    - conj - conjunction;
    - disj - disjuntions;
    - impl - implication;
    - equiv - equivalence;
    - lb - left bracket;
    - rb - right bracket;
    - eof - end of file (expression)
*/
const TokenType = Object.freeze({
    VAR: [''],

    NOT: ['-'],
    CONJ: ['*'],
    DISJ: ['+'],
    IMPL: ['->'],
    EQUIV: ['=', '~'],

    LB: ['('],
    RB: [')'],

    EOF: '\0',

    of(charSet) {
        return TokenType[
            Object.keys(TokenType).find((k) => TokenType[k].includes(charSet))
        ];
    },
});

module.exports = TokenType;
