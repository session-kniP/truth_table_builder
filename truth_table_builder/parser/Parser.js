const TokenType = require('./token/TokenType');
const ValExpression = require('../expression/ValExpression');
const ParserException = require('./exception/ParserException');
const BinaryExpression = require('../expression/BinaryExpression');
const Token = require('./token/Token');
const UnaryExpression = require('../expression/UnaryExpression');
const DisplayedExpression = require('../expression/display/DisplayedExpression');
const DisplayFeature = require('../expression/display/DisplayFeature');

class Parser {
    constructor(lexer) {
        this.lexer = lexer; //DI
        this.tokens = [];
        this.expressions = [];
        this.expressionTree = []; //to print each step in truth table
        this.values = [];
        this.absPos = 0;
        this.lastInput = null; //some optimization stuff
        this.bracketStack = 0;
    }

    /**
     * @param {String} input
     */
    parse(input) {
        try {
            if (!this.tokens || this.lastInput != input) {
                this.lastInput = input;
                this.lexer.tokenize(input);
                this.tokens = this.lexer.tokens;
            } else if(this.tokens && this.lastInput == input) {
                return this.expressions;
            }

            let current = this.peek(0);
            while (current.type !== TokenType.EOF) {
                this.expressions.push(this.parseExpression());

                current = this.peek(0);
            }

            return this.expressions;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse token set",
                cause: e,
            });
        }
    }

    getSubexpressions(input) {
        this.parse(input ? input : this.lastInput);
        return this.expressionTree;
    }

    parseExpression(isInner) {
        try {
            let result;
            //if inside of brackets or something else
            if (isInner) {
                const expr = this.parseEquiv();
                result = new DisplayedExpression(expr, {
                    leftDisplay: DisplayFeature.LB,
                    rightDisplay: DisplayFeature.RB,
                });
            } else {
                result = this.parseEquiv();
            }

            //this.expressionTree.push(result);
            return result;
        } catch (e) {
            throw new ParserException({
                message: "Can't parse expression",
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
                    this.expressionTree.push(expr);
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
                    this.expressionTree.push(expr);
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
                    this.expressionTree.push(expr);
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
                    this.expressionTree.push(expr);
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
                    this.expressionTree.push(expr);
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
                const value = new ValExpression({name: current.value, val: null});
                this.values.push(value);
                return value;
            }
            if (current.type === TokenType.LB) {
                this.absPos++;
                const result = this.parseExpression(true);
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
