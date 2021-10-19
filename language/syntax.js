/**
 * Export language symbols in precedence order.
 */
const SYMBOLS = {
  EOF: /$/,

  /* Casings */
  o_BRACKET: /\(/,
  c_BRACKET: /\)/,
  o_CURLY: /{/,
  c_CURLY: /}/,
  o_SQUARE: /\[/,
  c_SQUARE: /]/,

  /* Tokens */
  t_IF: /if/,
  t_WHILE: /while/,
  t_FOR: /for/,
  t_EACH: /each/,
  t_ARRAY: /array/,
  t_FUN: /fun/,
  t_RETURN: /return/,
  t_NULL: /null/,
  t_IN: /in/,
  t_INDEXOF: /indexof/,

  /* Literals */
  lit_BOOL: /true|false/,
  lit_NUM: /\d+(\.\d+)?/,
  lit_STR: /'(\\.|[^'])*'/,

  /* User-defined or built-in identifier */
  IDENTIFIER: /[a-zA-Z_][a-zA-Z1-9_]*/,

  /* Symbols */
  '+': /\+/,
  '-': /-/,
  '*': /\*/,
  '/': /\//,
  '<': /</,
  '>': />/,
  '<=': /<=/,
  '>=': />=/,
  '==': /==/,
  '!=': /!=/,
  '=': /=/,
  ',': /,/,
  '&': /&/,
  '|': /\|/,
  ':': /:/,
  '~': /~/,
};

/**
 * These are expressions that do not need to be tokenized but still need parsing.
 * They are simply the syntactic sugar of the language.
 */
const META_SYMBOLS = {
  Comment: /\/\/.*/,
  SemiColon: /;/,
  WhiteSpace: /\s/
};

module.exports = {
  SYMBOLS,
  META_SYMBOLS
};
