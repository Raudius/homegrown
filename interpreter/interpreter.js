import { parse } from '../language/parser.js';
import { performActions } from './actions.js';
import { Environment } from './environment.js';

export class Interpreter {
  executeProgram (program, environment = null) {
    console.time('Compilation');
    const actions = parse(program);
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
