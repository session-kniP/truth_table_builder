const Token = require('./token/Token');
const TokenType = require('./token/TokenType');
const SyntaxElements = require('./SyntaxElements');
const ChainException = require('@session-knip/general/exception/ChainException');
const LexerException = require('./exception/LexerException');
const LogicalOperators = SyntaxElements.LogicalOperators;
const OperatorParts = SyntaxElements.OperatorParts;
const PunctuationSymbols = SyntaxElements.PunctuationSymbols;
const LettersAndNumbers = SyntaxElements.LettersAndNumbers;

class Lexer {
    constructor() {
        this.tokens = [];
        this.absPos = 0;
        this.input = null;
    }

    /**
     * @param {String} input
     */
    tokenize(input) {
        this.input = input;

        const currSeq = [];
        function clearSeq() {
            currSeq.length = 0; //clear the char array
        }

        try {
            while (this.absPos < this.input.length) {
                const currChar = this.peek(0);
                currSeq.push(currChar);
                const currString = currSeq.join('');

                // if logical operator or part of it
                if (LogicalOperators.includes(currString)) {
                    if (!TokenType.LB.includes(currString) && !TokenType.RB.includes(currString)) {
                        while (OperatorParts.includes(this.peek(1))) {
                            this.next();
                            const nextChar = this.peek(0);
                            currSeq.push(nextChar);
                        }
                    }
                    this.tokenizeOperator(currSeq.join(''));
                } else if (
                    // if a space is encountered, but the sequence consists of more than just it
                    PunctuationSymbols.includes(currChar) &&
                    currString !== ' '
                ) {
                    this.tokenizeVariable(currString.substr(0, currString.length - 1));
                } else {
                    // if character or number
                    if (LettersAndNumbers.test(this.peek(0))) {
                        while (LettersAndNumbers.test(this.peek(1))) {
                            this.next();
                            const nextChar = this.peek(0);
                            currSeq.push(nextChar);
                        }
                        this.tokenizeVariable(currSeq.filter((el) => el !== ' ').join(''));
                    } else if (OperatorParts.includes(this.peek(0))) {
                        throw new LexerException(`Unexpected token ${this.peek(0)}`);
                    }
                }

                this.next();
                clearSeq();
            }
        } catch (e) {
            throw new LexerException(`Unexpected token ${this.peek(0)}`);
        }
        if (currSeq.length != 0) {
            this.tokenizeVariable(currSeq.join(''));
        }
    }

    tokenizeOperator(operator) {
        try {
            this.tokens.push(new Token(TokenType.of(operator)));
        } catch(e) {
            throw new LexerException(`Can't tokenize operator ${operator}`)
        }
    }

    tokenizeVariable(variable) {
        this.tokens.push(new Token(TokenType.VAR, variable));
    }

    next() {
        this.absPos++;
        return this.peek(0); //return current symbol
    }

    peek(relPos) {
        const position = relPos + this.absPos;

        if (position >= this.input.length) {
            return '\0';
        }

        return this.input.charAt(position);
    }

    addToken(type) {
        this.tokens.push(new Token(type));
    }

    addToken(type, value) {
        this.tokens.push(new Token(type, value));
    }
}

module.exports = Lexer;
