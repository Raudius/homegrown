const parser = require('../language/parser');
const performActions = require('./actions').performActions;
const Environment = require('./environment').Environment;

class Interpreter {
  executeProgram (program, environment = null) {
    console.time('Compilation');
    const actions = parser.parse(program);
    console.timeEnd('Compilation');

    const rootEnvironment = environment ?? this.createRootEnvironment();

    console.time('Runtime');
    performActions(rootEnvironment, actions);
    console.timeEnd('Runtime');

    return rootEnvironment.getReturn();
  }

  createRootEnvironment() {
    return new Environment();
  }
}

module.exports = {
  Interpreter
};
