const parser = require('../language/parser');
const performActions = require('./actions').performActions;
const Environment = require('./environment').Environment;

/**
 * Runs a program in the specified environment.
 * If no environment is specified, a fresh (empty) one is created.
 *
 * @param {String} input
 * @param {Environment|null} rootEnv
 */
function execute (input, rootEnv = null) {
  console.time('Compilation');
  const actions = parser.parse(input);
  console.timeEnd('Compilation');

  rootEnv = rootEnv ?? new Environment();

  console.time('Runtime');
  performActions(rootEnv, actions);
  console.timeEnd('Runtime');
}

module.exports = {
  execute
};
