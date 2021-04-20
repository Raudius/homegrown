let parser = require('../language/parser.js');
let performActions = require('./actions.js').performActions;
let Environment = require('./environment').Environment;

function load (input, root_env=null) {
    let actions = parser.parse(input);
    root_env = root_env ?? new Environment();
    performActions(root_env, actions);
}

module.exports = {
    load
}