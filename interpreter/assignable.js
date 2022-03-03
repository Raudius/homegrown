import { ERRORS as err } from './errors.js';
import { evalExpression } from './expressions.js';

class Assignable {
  /**
   * @param {Environment} env
   * @param {Assignable|null} container - Assignable to that contains our object.
   * @param {string} identifier
   */
  constructor (env, container, identifier) {
    this.env = env;
    this.container = container;
    this.identifier = identifier;
  }

  assign (value) {
    if (this.container) {
      this.container.read()[this.identifier] = value;
    } else {
      this.env.assign(this.identifier, value);
    }
  }

  read () {
    if (this.container) {
      return this.container.read()[this.identifier];
    } else {
      return this.env.fetch(this.identifier);
    }
  }
}

/**
 *
 * @param {Environment} env
 * @param {{}} data - AST object containing an assignable
 */
export function evalAssignable (env, data) {
  if (!('identifier' in data)) {
    err.UnknownAssignable();
  }

  const container = data.container !== null ? evalAssignable(env, data.container) : null;
  const identifier = evalExpression(env, data.identifier);
  return new Assignable(env, container, identifier);
}
