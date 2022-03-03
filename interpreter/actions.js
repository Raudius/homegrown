import { evalExpression } from './expressions.js';
import { ERRORS as err } from './errors.js';
import { evalAssignable } from './assignable.js';

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
function assignValue (env, actionData) {
  const assignable = evalAssignable(env, actionData.assignable);
  const value = evalExpression(env, actionData.value);

  assignable.assign(value);
}

/**
 * @param {String} type
 * @returns {function(Environment,{})}
 */
function getActionCallableFromType (type) {
  switch (type) {
    case 'conditional': return actionConditional;
    case 'while': return actionWhile;
    case 'lone_expression': return actionLoneExpression;
    case 'return': return actionReturn;
    case 'for_each': return evalForEach;
    case 'ast_assign_value': return assignValue;

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
