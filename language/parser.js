import grammar from './grammar.js';
import { SYMBOLS, META_SYMBOLS } from './syntax.js';
import Lexer from 'lex';

/**
 * Initiate the parser and pass our lexer to it.
 */
const parser = new grammar.Parser();
const lexer = new Lexer();
parser.lexer = lexer;

/**
 * Add new line rule to keep track of the input's line number.
 */
let lineNumber = 1;
lexer.addRule(/\n/, () => { lineNumber++; });

/**
 * Add Meta rules
 */
for (const symbolType in META_SYMBOLS) {
  const syntax = META_SYMBOLS[symbolType];
  lexer.addRule(syntax, () => {});
}

/**
 * Add Symbol rules
 */
for (const symbolType in SYMBOLS) {
  const syntax = SYMBOLS[symbolType];
  lexer.addRule(syntax, function (lexeme) {
    this.yytext = lexeme;
    this.yylineno = lineNumber;
    return symbolType;
  });
}

/**
 * Add "unknown" character sequence rule.
 */
lexer.addRule(/./, (lexeme) => {
  throw new Error('Syntax error, unexpected character: ' + lexeme + '. In line: ' + lineNumber);
});

/**
 * Parse the input into Homegrown's AST notation.
 *
 * @param {String} input
 * @returns {*}
 */
export function parse (input) {
  return parser.parse(input);
}
