let parser = require('../language/parser');
let performActions = require('./actions').performActions;
let Environment = require('./environment').Environment;

/**
 * Runs a program in the specified environment.
 * If no environment is specified, a fresh (empty) one is created.
 *
 * @param {String} input
 * @param {Environment|null} root_env
 */
function execute (input, root_env=null) {
    console.time('Compilation');
    let actions = parser.parse(input);
    console.timeEnd('Compilation');

    root_env = root_env ?? new Environment();

    console.time('Runtime');
    performActions(root_env, actions);
    console.timeEnd('Runtime');
}

module.exports = {
    execute
}