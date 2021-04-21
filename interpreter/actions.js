
/**
 * @param {Environment} env
 * @param {{}} action_data
 */
function actionAssign(env, action_data) {
    const k = action_data.identifier;
    const v = evalExpression(env, action_data.expression)
    env.assign(k, v);
}

/**
 * @param {Environment} env
 * @param {{}} action_data
 */
function actionConditional(env, action_data) {
    let condition = evalExpression(env, action_data.condition);
    if (condition) {
        performActions(env, action_data.actions);
    }
}

/**
 * @param {Environment} env
 * @param {{}} action_data
 */
function actionWhile(env, action_data) {
    while (evalExpression(env, action_data.condition)) {
        performActions(env, action_data.actions);
    }
}

/**
 * @param {Environment} env
 * @param {{}} action_data
 */
function actionLoneExpression(env, action_data) {
    evalExpression(env, action_data.expression);
}

/**
 * @param {Environment} env
 * @param {{}} action_data
 */
function actionReturn(env, action_data) {
    const val = evalExpression(env, action_data.expression);
    env.assign('__return', val);
}

/**
 * @param {String} type
 * @returns {function(Environment,{})}
 */
function getActionCallableFromType(type) {
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
    for (let i=0; i<actions.length; i++) {
        performAction(env, actions[i]);
        if (env.hasAssign('__return')) {
            break;
        }
    }
}

module.exports = {
    performActions
}

const evalExpression = require('./expressions.js').evalExpression;