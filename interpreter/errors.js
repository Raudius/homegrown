function errRuntime (msg) {
  throw new Error('Runtime error: ' + msg);
}

function errLanguage (msg) {
  throw new Error('Language error: ' + msg);
}

export const ERRORS = {
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
  },

  UnknownAssignable: () => {
    errRuntime('Could not determine the assignable variable.');
  }
};
