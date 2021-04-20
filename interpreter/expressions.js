const Environment = require('./environment.js').Environment;

/**
 * Helper function to determine whether the variable is a literal.
 * @param {*} v
 * @returns {boolean}
 */
function isLiteral(v) {
    return v === null
        || typeof v === 'boolean'
        || typeof v === 'string'
        || typeof v === 'number';
}

function createEnvironmentForFunction(env, args, vals) {
    if (args.length !== vals.length) {
        throw new Error('Provided arguments don\'t match method signature');
    }
    const new_env = new Environment(env);
    for (let i=0; i<args.length; i++) {
        new_env.assign(args[i], vals[i]);
    }

    return new_env;
}

function evalExprFunction(env, expression) {
    return (...arg_vals) => {
        const new_env = createEnvironmentForFunction(env, expression.arguments, arg_vals)
        performActions(new_env, expression.body);
        return new_env.fetch('__return');
    };
}

function evalExprOperation(env, expression) {
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

        default: throw new Error('Unknown operand ' + expression.operand);
    }
}

function evalExprCallFunction(env, action_data) {
    const func = evalExpression(env, action_data.function);
    const arguments = action_data.arguments ?? [];
    const args = arguments.map(ex => { return evalExpression(env, ex) });
    return func.apply(this, args);
}

function evalExpression (env, expression) {
    if (isLiteral(expression)) {
        return expression;
    }

    if (expression.hasOwnProperty('reference')) {
        const id = expression.reference;
        return env.fetch(id);
    }

    if (expression.hasOwnProperty('body')) {
        return evalExprFunction(env, expression);
    }

    if (expression.hasOwnProperty('operand')) {
        return evalExprOperation(env, expression);
    }

    if (expression.hasOwnProperty('function')) {
        return evalExprCallFunction(env, expression);
    }

    console.error('Unknown expression');
}

module.exports = {
    evalExpression
}

const performActions = require('./actions.js').performActions;