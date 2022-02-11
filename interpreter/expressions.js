import { Environment } from './environment.js';
import { ERRORS as err } from './errors.js';
import { performActions } from './actions.js';

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
  if (args.length !== vals.length) {
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
  return (...argVals) => {
    const newEnv = createEnvironmentForFunction(env, expression.arguments, argVals);
    performActions(newEnv, expression.body);
    return newEnv.fetch('__return');
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
function evalArrayAccess (env, expression) {
  const index = evalExpression(env, expression.index);
  if (index < 0) {
    return null;
  }

  const array = evalExpression(env, expression.reference);
  if (!array || index >= array.length) {
    return null;
  }

  return array[index];
}

/**
 * @param {Environment} env
 * @param {{}} expression
 */
function evalArrayContains(env, expression) {
  const array = evalExpression(env, expression.array);
  const key = evalExpression(env, expression.value);

  return Object.values(array).includes(key);
}

/**
 * @param {Environment} env
 * @param {{}} expression
 */
function evalArrayContainsKey(env, expression) {
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
  const func = evalExpression(env, expression.function);
  const args = expression.arguments.map(ex => { return evalExpression(env, ex); });
  return func.apply(this, args);
}

/**
 * Returns the value of the referred identifier.
 *
 * @param {Environment} env
 * @param {{}} data
 * @returns {Function|string|number|boolean|null}
 */
function evalReference (env, data) {
  const id = data.reference;
  return env.fetch(id);
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
    case 'ref': return evalReference;
    case 'define_func': return evalFuncDefinition;
    case 'call_func': return evalFuncCall;
    case 'operation': return evalOperation;
    case 'raw_array': return evalRawArray;
    case 'array_access': return evalArrayAccess;
    case 'array_contains': return evalArrayContains;
    case 'array_contains_key': return evalArrayContainsKey;
  }

  err.UnknownExpressionType(type);
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
