
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
  env.assign('__return', val);
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

    default: throw new Error('Unknown action: ' + type);
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
function performActions (env, actions) {
  for (let i = 0; i < actions.length; i++) {
    performAction(env, actions[i]);
    if (env.hasAssign('__return')) {
      break;
    }
  }
}

module.exports = {
  performActions
};

const evalExpression = require('./expressions').evalExpression;
