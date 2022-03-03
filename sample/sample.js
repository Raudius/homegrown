import { Interpreter } from '../interpreter/interpreter.js';
import { Environment } from '../interpreter/environment.js';
import fs from 'fs';

async function wait (time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Create interpreter
class SampleInterpreter extends Interpreter {
  createRootEnvironment () {
    const env = new Environment();
    // Assign built-in functions/variables
    env.assign('log', console.log);
    env.assign('pi', Math.PI);
    env.assign('wait', wait);
    return env;
  }
}
const interpreter = new SampleInterpreter();

// Load program
const program = fs.readFileSync(0, 'utf-8');

// Execute program
interpreter.executeProgram(program).then(exitEnvironment => {
  console.log('Exit message: ' + exitEnvironment.getReturn());
});
