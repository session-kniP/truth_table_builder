const TokenType = require('./TokenType');
const ValExpression = require('../expression/ValExpression');
const ParserException = require('./exception/ParserException');
const BinaryExpression = require('../expression/BinaryExpression');
const Token = require('./Token');
const UnaryExpression = require('../expression/UnaryExpression');

class Parser {
    constructor(lexer) {
        this.lexer = lexer; //DI
        this.tokens = null;
        this.absPos = 0;
    }


    /**
     * @param {String} input 
     */
    parse(input) {
        try {
            if (!this.tokens) {
                this.lexer.tokenize(input)
                this.tokens = this.lexer.tokens;
            }

            const result = [];

            let current = this.peek(0);
            while (current.type !== TokenType.EOF) {
                result.push(this.parseExpression());
                current = this.peek(0);
            }

            return result;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse token set",
                cause: e,
            });
        }
    }

    parseExpression() {
        try {
            return this.parseEquiv();
        } catch (e) {
            throw new ParserException({
                message: "Can't parse exception",
                cause: e,
            });
        }
    }

    parseEquiv() {
        try {
            let expr = this.parseImpl();

            while (true) {
                const current = this.peek(0);
                if (current.type === TokenType.EQUIV) {
                    this.absPos++;
                    expr = new BinaryExpression(
                        TokenType.EQUIV,
                        expr,
                        this.parseImpl()
                    );
                    continue;
                }
                break;
            }

            return expr;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse equivalence token",
                cause: e,
            });
        }
    }

    parseImpl() {
        try {
            let expr = this.parseDisj();

            while (true) {
                const current = this.peek(0);
                if (current.type === TokenType.IMPL) {
                    this.absPos++;
                    expr = new BinaryExpression(
                        TokenType.IMPL,
                        expr,
                        this.parseDisj()
                    );
                    continue;
                }
                break;
            }

            return expr;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse implication token",
                cause: e,
            });
        }
    }

    parseDisj() {
        try {
            let expr = this.parseConj();

            while (true) {
                const current = this.peek(0);
                if (current.type === TokenType.DISJ) {
                    this.absPos++;

                    expr = new BinaryExpression(
                        TokenType.DISJ,
                        expr,
                        this.parseConj()
                    );
                    continue;
                }
                break;
            }

            return expr;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse disjunction token",
                cause: e,
            });
        }
    }

    parseConj() {
        try {
            let expr = this.parseUnary();

            while (true) {
                const current = this.peek(0);
                if (current.type === TokenType.CONJ) {
                    this.absPos++;

                    expr = new BinaryExpression(
                        TokenType.CONJ,
                        expr,
                        this.parseUnary()
                    );
                    continue;
                }
                break;
            }
            return expr;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse conjunction token",
                cause: e,
            });
        }
    }

    parseUnary() {
        try {
            let expr = this.parsePrimary();

            while (true) {
                const current = this.peek(0);
                if (current.type === TokenType.NOT) {
                    this.absPos++;
                    expr = new UnaryExpression(
                        TokenType.NOT,
                        this.parsePrimary()
                    );
                    continue;
                }
                break;
            }

            return expr;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse unary operation token",
                cause: e,
            });
        }
    }

    parsePrimary() {
        try {
            const current = this.peek(0);

            if (current.type === TokenType.VAR) {
                this.absPos++;
                return new ValExpression(current.value);
            }
            if (current.type === TokenType.LB) {
                this.absPos++;
                const result = this.parseExpression();
                this.absPos++;
                return result;
            }
        } catch (e) {
            throw new ParserException({
                message: "Can't parse primary token",
                cause: e,
            });
        }
    }

    peek(relPos) {
        try {
            const position = relPos + this.absPos;

            if (position >= this.tokens.length) {
                return new Token(TokenType.EOF);
            }

            return this.tokens[position];
        } catch (e) {
            throw new ParserException({
                message: "Can't peek a token",
                cause: e,
            });
        }
    }
}

module.exports = Parser;
