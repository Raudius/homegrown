const interpreter = require('./interpreter/interpreter');
const Environment = require('./interpreter/environment').Environment;
const fs = require('fs');

// Load program
const program = fs.readFileSync(0, 'utf-8');

// Create root environment (optional)
const rootEnv = new Environment();
rootEnv.assign('log', console.log);
rootEnv.assign('pi', Math.PI);

// Execute program
interpreter.execute(program, rootEnv)
;

// View final program state
// console.log(root_env.assigns);
