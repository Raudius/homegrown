import { Interpreter } from '../interpreter/interpreter.js';
import { Environment } from '../interpreter/environment.js';
import fs from 'fs';

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
const exitEnvironment = interpreter.executeProgram(program);

// View the return value and final state
console.log('Exit message: ' + exitEnvironment.getReturn());
// console.log(exitEnvironment.assigns);
