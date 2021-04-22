function errRuntime (msg) {
  throw new Error('Runtime error: ' + msg);
}

function errLanguage (msg) {
  throw new Error('Language error: ' + msg);
}

module.exports = {
  UnknownOperation: (symbol) => {
    errRuntime(`Unknown operand "${symbol}"`);
  },

  UnknownExpressionType: (type) => {
    errLanguage(`Unknown expression type "${type}"`);
  },

  UnknownActionType: (type) => {
    errLanguage(`Unknown action type "${type}"`);
  },

  ArgumentMismatch: () => {
    errRuntime('Provided arguments don\'t match method signature');
  }
};
