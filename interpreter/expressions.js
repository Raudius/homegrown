import { Environment } from './environment.js';
import { ERRORS as err } from './errors.js';
import { performActions } from './actions.js';
import { evalAssignable } from './assignable.js';

/**
 * Replace the 'escaped' characters with the expected characters.
 *
 * @param str
 * @returns {*}
 */
function escapeCharacters (str) {
  return str.replace(/\\'/g, "'")
    .replace(/\\n/g, '\n')
    .replace(/\\t'/g, '\t')
    .replace(/\\\\/g, '\\');
}

/**
 * @param {Environment} env
 * @param {String[]} args
 * @param {[]} vals
 * @returns {Environment}
 */
function createEnvironmentForFunction (env, args, vals) {
  if (args.length > vals.length) {
    err.ArgumentMismatch();
  }
  const newEnv = new Environment(env);
  for (let i = 0; i < args.length; i++) {
    newEnv.assign(args[i], vals[i]);
  }

  return newEnv;
}

/**
 * @param {Environment} env
 * @param {{}} expression
 * @returns {Function}
 */
function evalFuncDefinition (env, expression) {
  return function () {
    const args = expression.args ?? [];
    const argsVals = arguments ?? [];
    const newEnv = createEnvironmentForFunction(env, args, argsVals);
    performActions(newEnv, expression.body);
    return newEnv.getReturn();
  };
}

/**
 * @param {Environment} env
 * @param {{}} expression
 * @returns {Function}
 */
function evalRawArray (env, expression) {
  const array = {};
  for (const key in expression.values) {
    array[key] = evalExpression(env, expression.values[key]);
  }

  return array;
}

/**
 * @param {Environment} env
 * @param {{}} expression
 */
function evalArrayContains (env, expression) {
  const array = evalExpression(env, expression.array);
  const key = evalExpression(env, expression.value);

  return Object.values(array).includes(key);
}

/**
 * @param {Environment} env
 * @param {{}} expression
 */
function evalArrayContainsKey (env, expression) {
  const array = evalExpression(env, expression.array);
  const key = evalExpression(env, expression.key);

  return Object.keys(array).includes(key);
}

/**
 * Evaluate the result of an operation.
 *
 * @param {Environment} env
 * @param {{}} expression
 * @returns {number|boolean|string}
 */
function evalOperation (env, expression) {
  const term1 = evalExpression(env, expression.term1);
  const term2 = evalExpression(env, expression.term2);

  switch (expression.operand) {
    case '+': return term1 + term2;
    case '-': return term1 - term2;
    case '*': return term1 * term2;
    case '/': return term1 / term2;
    case '>': return term1 > term2;
    case '<': return term1 < term2;
    case '>=': return term1 >= term2;
    case '<=': return term1 <= term2;
    case '==': return term1 === term2;
    case '!=': return term1 !== term2;
    case '&': return term1 && term2;
    case '|': return term1 || term2;

    default: err.UnknownOperation(expression.operand);
  }
}

/**
 * Evaluates the result of a function.
 *
 * @param {Environment} env
 * @param {{}} expression
 * @returns {Function|string|number|boolean|null}
 */
function evalFuncCall (env, expression) {


  const assignable = evalAssignable(env, expression.function);

  const func = assignable.read();
  const container = assignable.container?.read();
  const args = (expression.args ?? []).map(ex => { return evalExpression(env, ex); });

  if (container instanceof Promise) {
    env.registerPromise(container.finally());
  }

  return func.apply(container, args);
}

/**
 * Returns the value of the referred assignable.
 *
 * @param {Environment} env
 * @param {{}} data
 * @returns {Function|string|number|boolean|null}
 */
function evalAssignableValue (env, data) {
  const assignable = evalAssignable(env, data.assignable);
  return assignable.read();
}

/**
 * @param {Environment} env
 * @param {Function|string|number|boolean|null} data
 * @returns {Function|string|number|boolean|null}
 */
function evalLiteral (env, data) {
  if (typeof data === 'string') {
    data = escapeCharacters(data);
  }
  return data;
}

/**
 * Returns the function with which the expression can be evaluated.
 *
 * @param {String} type
 * @returns {Function}
 */
function getEvalFunction (type) {
  switch (type) {
    case 'literal': return evalLiteral;
    case 'read_assignable': return evalAssignableValue;
    case 'define_func': return evalFuncDefinition;
    case 'call_func': return evalFuncCall;
    case 'operation': return evalOperation;
    case 'raw_array': return evalRawArray;
    case 'array_contains': return evalArrayContains;
    case 'array_contains_key': return evalArrayContainsKey;
  }

  err.UnknownExpressionType(type);
}

/**
 * Returns the container of an expression: if the expression is a member of an object it returns the object.
 *
 * @param {Environment} env
 * @param {{}} expression
 * @returns {Function|string|number|boolean|null}
 */
export function evalExpressionContainer (env, expression) {
  if (!expression.data.container) {
    return null;
  }

  return evalExpression(env, expression.data.container);
}

/**
 * Evaluates an expression to an assignable type.
 *
 * @param {Environment} env
 * @param {{}} expression
 * @returns {Function|string|number|boolean|null}
 */
export function evalExpression (env, expression) {
  const type = expression.expression_type;
  const evalFunction = getEvalFunction(type);
  return evalFunction(env, expression.data);
}