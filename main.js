const interpreter = require('./interpreter/interpreter');
const Environment = require('./interpreter/environment').Environment;
const fs = require('fs');

// Load program
const program = fs.readFileSync(0, 'utf-8');

// Create root environment (optional)
const root_env = new Environment();
root_env.assign('log', console.log);
root_env.assign('pi', Math.PI);

// Execute program
interpreter.execute(program, root_env);

// View final program state
// console.log(root_env.assigns);