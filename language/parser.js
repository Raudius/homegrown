let Lexer = require("lex");
let symbols = require('./syntax.js');
let Parser = require('./grammar.js').Parser;

/**
 * Initiate the parser and pass our lexer to it.
 */
let parser = new Parser();
let lexer = new Lexer();
parser.lexer = lexer;

/**
 * Add new line rule to keep track of the input's line number.
 */
let line_number = 1;
lexer.addRule(/\n/, () => { line_number++ });

/**
 * Add Meta rules
 */
for (let symbol_type in symbols.META_SYMBOLS) {
    let syntax = symbols.META_SYMBOLS[symbol_type];
    lexer.addRule(syntax, () => {});
}

/**
 * Add Symbol rules
 */
for (let symbol_type in symbols.SYMBOLS) {
    let syntax = symbols.SYMBOLS[symbol_type];
    lexer.addRule(syntax, function (lexeme) {
        //console.log(symbol_type + ' | ' + lexeme);
        this.yytext = lexeme;
        this.yylineno = line_number;
        return symbol_type;
    });
}

/**
 * Add "unknown" character sequence rule.
 */
lexer.addRule(/./, (lexeme) => {
    throw new Error('Syntax error, unexpected character: ' + lexeme + '. In line: ' + line_number);
});

/**
 * Parse the input into Homegrown's AST notation.
 *
 * @param {String} input
 * @returns {*}
 */
function parse(input) {
    return parser.parse(input);
}

module.exports = {
    parse
}