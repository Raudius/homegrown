
/*
 * description: Homegrown language grammar.
 * author: R. Ferreira
 */

/* AST generator functions */
%{
    function ast_action(name, data) {
    console.log ( name );

    console.dir(data, { depth: null });
        return { action_type: name, data: data };
    }

    function ast_action_conditional(condition, actions) {
        const data = { condition: condition, actions: actions };
        return ast_action('conditional', data);
    }

    function ast_action_while(condition, actions) {
        const data = { condition: condition, actions: actions };
        return ast_action('while', data);
    }

    function ast_action_assign(id, expr) {
        const data = { identifier: id, expression: expr};
        return ast_action('assign', data);
    }

    function ast_lone_expression(expression) {
        const data = { expression: expression };
        return ast_action('lone_expression', data);
    }

    function ast_action_assign_array_value(array, index, value) {
        const data = {
            array: array,
            index: index,
            value: value
        };

        return ast_action('assign_array_value', data);
    }

    function ast_for_each(index, value, array, loop_code) {
        const data = {
            each_index: index,
            each_value: value,
            array: array,
            loop_code: loop_code
        };
        return ast_action('for_each', data);
    }

    function ast_action_return(expr) {
        const data = { expression: expr };
        return ast_action('return', data);
    }

    function ast_promise(promise, success_callback, failure_callback) {
        const data = {
            promise: promise,
            success_callback: success_callback,
            failure_callback: failure_callback
        };

        return ast_action('promise', data);
    }

    function ast_expression(type, data) {

    console.log ( type );
    console.dir(data, { depth: null });
        return { expression_type: type, data: data };
    }

    function ast_expr_operation(operand, term1, term2) {
        const data = {
            operand: operand,
            term1: term1,
            term2: term2
        };

        return ast_expression('operation', data);
    }

    function ast_expr_call_func(func_name, func_args) {
        const data = {
            function: func_name,
            arguments: func_args
        };

        return ast_expression('call_func', data);
    }

    function ast_expr_define_func(func_args, func_body) {
        const data = {
            arguments: func_args,
            body: func_body
        };

        return ast_expression('define_func', data);
    }

    function ast_expr_array_contains(value, array) {
        const data = {
            value: value,
            array: array
        };

        return ast_expression('array_contains', data);
    }

    function ast_expr_array_contains_key(key, array) {
        const data = {
            key: key,
            array: array
        };

        return ast_expression('array_contains_key', data);
    }

    function ast_expr_raw_array(values) {
        const data = {
            values: values
        };

        return ast_expression('raw_array', data);
    }

    function ast_array_access(array_name, index) {
        const data = {
            reference: array_name,
            index: index
        };
        return ast_expression('array_access', data);
    }

    function ast_expr_ref(id) {
        const data = { reference: id };
        return ast_expression('ref', data);
    }

    function ast_expr_literal(value) {
        return ast_expression('literal', value);
    }
%}

%left '&' '|'
%nonassoc '<' '>' '<=' '>=' '==' '!=' t_IN t_INDEXOF t_IF t_WHILE t_RETURN
%left '+' '-'
%left '*' '/'
%right o_BRACKET o_SQUARE '.'

$start expressions

%%

/* A program is defined as a set of actions */
program : actions EOF { return $1; };

/* A code block is a set of actions cased inside a set of curly braces */
code_block
    : o_CURLY actions c_CURLY
        {$$ = $2;}
    ;

/* List of actions which will make up the program */
actions
    :   {{ $$ = [] }}
    | action actions
        {{
            $2.unshift($1);
            $$ = $2;
        }}
    ;

/* Actions that can be performed by the language */
action
    : t_IF expression code_block
        { $$ = ast_action_conditional($2, $3); }

    | t_WHILE expression code_block
        { $$ = ast_action_while($2, $3); }

    | IDENTIFIER '=' expression ';'
        { $$ = ast_action_assign($1, $3); }

    | t_RETURN expression
        { $$ = ast_action_return($2); }

    | func_call_expr ';'
        { $$ = ast_lone_expression($1); }

    | ref o_SQUARE expression c_SQUARE '=' expression ';'
        { $$ = ast_action_assign_array_value($1, $3, $6); }

    | t_EACH IDENTIFIER ',' IDENTIFIER t_IN ref code_block
        { $$ = ast_for_each($2, $4, $6, $7); }
    ;

/* Expressions have a value */
expression
    : operation_expr
    | func_call_expr
    | func_call_async_expr
    | func_define_expr
    | ref
    | literal
    | array_raw_expr
    | array_access
    | dot_access
    ;

/* Math/logical operations */
operation_expr
    : o_BRACKET expression c_BRACKET { $$ = $2 }
    | expression '+' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '-' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '*' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '/' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '>' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '<' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '>=' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '<=' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '==' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '!=' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '&' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression '|' expression { $$ = ast_expr_operation($2, $1, $3); }
    | expression t_IN expression { $$ = ast_expr_array_contains($1, $3); }
    | expression t_INDEXOF expression { $$ = ast_expr_array_contains_key($1, $3); }
    ;


/* Raw array | e.g. `[1,2,3]` */
array_raw_expr
    : o_SQUARE voidable_expr_list c_SQUARE
        {{ $$ = ast_expr_raw_array($2); }}
    ;

/* Define a function */
func_define_expr
    : t_FUN o_BRACKET voidable_id_list c_BRACKET code_block
        {{ $$ = ast_expr_define_func($3, $5); }}
    ;

/* Function call */
func_call_expr
    : expression o_BRACKET voidable_expr_list c_BRACKET
        {{ $$ = ast_expr_call_func($1, $3); }}
    ;

/** Access an array value */
array_access
    : expression o_SQUARE expression c_SQUARE
        {{ $$ = ast_array_access($1, $3); }}
    ;

dot_access
    : expression '.' literal_identifier
        {{ $$ = ast_array_access($1, $3); }}
    ;

/* Reference to a variable. */
ref : IDENTIFIER {{ $$ = ast_expr_ref($1); }};

/* Literals */
literal
    : lit_BOOL { $$ = ast_expr_literal(yytext === 'true'); }
    | lit_NUM { $$ = ast_expr_literal(Number(yytext)); }
    | lit_STR { $$ = ast_expr_literal( yytext.substring(1, yytext.length-1) ); }
    | t_NULL { $$ = ast_expr_literal(null); }
    ;

/* Identifier literal, used (for example) in dot notation `obj.<identifier>` */
literal_identifier: IDENTIFIER {{ $$ = ast_expr_literal( $1 ); }};

/* Function arguments in the signature: a list of identifiers (or void) */
voidable_id_list : /* VOID */ | id_list;

/* List of identifiers */
id_list
    : IDENTIFIER { $$ = [$1] }
    | IDENTIFIER ',' id_list
        {{
            $3.unshift($1);
            $$ = $3;
        }}
    ;

/* Arguments in a function call: a list of expressions (or void) */
voidable_expr_list : /* VOID */ | expr_list;

/* List of expressions */
expr_list
    : expression { $$ = [$1] }
    | expression ',' expr_list
        {{
            $3.unshift($1);
            $$ = $3;
        }}
    ;