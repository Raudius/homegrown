import { evalExpression } from './expressions.js';
import { ERRORS as err } from './errors.js';

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function actionAssign (env, actionData) {
  const k = actionData.identifier;
  const v = evalExpression(env, actionData.expression);
  env.assign(k, v);
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function actionConditional (env, actionData) {
  const condition = evalExpression(env, actionData.condition);
  if (condition) {
    performActions(env, actionData.actions);
  }
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function actionWhile (env, actionData) {
  while (evalExpression(env, actionData.condition)) {
    performActions(env, actionData.actions);
  }
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function actionLoneExpression (env, actionData) {
  evalExpression(env, actionData.expression);
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function actionReturn (env, actionData) {
  const val = evalExpression(env, actionData.expression);
  env.setReturn(val);
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function evalForEach (env, actionData) {
  const array = evalExpression(env, actionData.array);

  Object.keys(array).forEach(key => {
    env.assign(actionData.each_index, key);
    env.assign(actionData.each_value, array[key]);

    performActions(env, actionData.loop_code);
  });
}

/**
 * @param {Environment} env
 * @param {{}} actionData
 */
function assignArrayValue (env, actionData) {
  const array = evalExpression(env, actionData.array);
  if (typeof array !== 'object') {
    return null;
  }

  const key = evalExpression(env, actionData.index);
  array[key] = evalExpression(env, actionData.value);
}

function resolvePromise (env, actionData) {
  const promise = Promise.resolve(evalExpression(env, actionData.promise));

  const promiseWrap = Promise.resolve(promise).then(function () {
    const f = evalExpression(env, actionData.success_callback);
    f?.apply(this, arguments);
  }).catch(function () {
    const f = evalExpression(env, actionData.failure_callback);
    f?.apply(this, arguments);
  });

  env.registerPromise(promiseWrap);
}

/**
 * @param {String} type
 * @returns {function(Environment,{})}
 */
function getActionCallableFromType (type) {
  switch (type) {
    case 'assign': return actionAssign;
    case 'conditional': return actionConditional;
    case 'while': return actionWhile;
    case 'lone_expression': return actionLoneExpression;
    case 'return': return actionReturn;
    case 'for_each': return evalForEach;
    case 'assign_array_value': return assignArrayValue;
    case 'promise': return resolvePromise;

    default: err.UnknownActionType(type);
  }
}

/**
 * @param {Environment} env
 * @param {{}} action
 */
function performAction (env, action) {
  const callable = getActionCallableFromType(action.action_type);
  callable(env, action.data);
}

/**
 * @param {Environment} env
 * @param {[]} actions
 */
export function performActions (env, actions) {
  for (let i = 0; i < actions.length; i++) {
    performAction(env, actions[i]);
    if (env.hasAssign('__return')) {
      break;
    }
  }
}
