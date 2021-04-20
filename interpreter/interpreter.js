let parser = require('../language/parser.js');
let performActions = require('./actions.js').performActions;
let Environment = require('./environment').Environment;

/**
 * Runs a program in the specified environment.
 * If no environment is specified, a fresh (empty) one is created.
 *
 * @param {String} input
 * @param {Environment|null} root_env
 */
function execute (input, root_env=null) {
    let actions = parser.parse(input);
    root_env = root_env ?? new Environment();
    performActions(root_env, actions);
}

module.exports = {
    load: execute
}