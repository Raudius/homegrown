const Interpreter = require('../interpreter/interpreter').Interpreter;
const Environment = require('../interpreter/environment').Environment;
const fs = require('fs');

// Create interpreter
class SampleInterpreter extends Interpreter {
  createRootEnvironment () {
    const env = new Environment();
    // Assign built-in functions/variables
    env.assign('log', console.log);
    env.assign('pi', Math.PI);
    return env;
  }
}
const interpreter = new SampleInterpreter();

// Load program
const program = fs.readFileSync(0, 'utf-8');

// Execute program
const exitMessage = interpreter.executeProgram(program);
console.log('Exit message: ' + exitMessage);

// View final program state
// console.log(root_env.assigns);
