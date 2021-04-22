const Lexer = require('lex');
const symbols = require('./syntax');
const Parser = require('./grammar').Parser;

/**
 * Initiate the parser and pass our lexer to it.
 */
const parser = new Parser();
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
for (const symbolType in symbols.META_SYMBOLS) {
  const syntax = symbols.META_SYMBOLS[symbolType];
  lexer.addRule(syntax, () => {});
}

/**
 * Add Symbol rules
 */
for (const symbolType in symbols.SYMBOLS) {
  const syntax = symbols.SYMBOLS[symbolType];
  lexer.addRule(syntax, function (lexeme) {
    // console.log(symbol_type + ' | ' + lexeme);
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
function parse (input) {
  return parser.parse(input);
}

module.exports = {
  parse
};
