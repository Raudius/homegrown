/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"program":3,"actions":4,"EOF":5,"code_block":6,"o_CURLY":7,"c_CURLY":8,"action":9,"t_IF":10,"expression":11,"IDENTIFIER":12,"=":13,"t_RETURN":14,"func_call_expr":15,"operation_expr":16,"func_define_expr":17,"ref":18,"literal":19,"o_BRACKET":20,"c_BRACKET":21,"call_args":22,"lit_BOOL":23,"lit_NUM":24,"lit_STR":25,"t_NULL":26,"+":27,"-":28,"*":29,"/":30,">":31,"<":32,">=":33,"<=":34,"==":35,"!=":36,"&":37,"|":38,"t_FUN":39,"func_args":40,"id_list":41,",":42,"expr_list":43,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"o_CURLY",8:"c_CURLY",10:"t_IF",12:"IDENTIFIER",13:"=",14:"t_RETURN",20:"o_BRACKET",21:"c_BRACKET",23:"lit_BOOL",24:"lit_NUM",25:"lit_STR",26:"t_NULL",27:"+",28:"-",29:"*",30:"/",31:">",32:"<",33:">=",34:"<=",35:"==",36:"!=",37:"&",38:"|",39:"t_FUN",42:","},
productions_: [0,[3,2],[6,3],[4,0],[4,2],[9,3],[9,3],[9,2],[9,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,3],[15,4],[19,1],[19,1],[19,1],[19,1],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[17,5],[18,1],[40,0],[40,1],[41,1],[41,3],[22,0],[22,1],[43,1],[43,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$
) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = $$[$0-1];
break;
case 3: this.$ = [] 
break;
case 4:
            $$[$0].unshift($$[$0-1]);
            this.$ = $$[$0];
        
break;
case 5: this.$ = ast_action_conditional($$[$0-1], $$[$0]); 
break;
case 6: this.$ = ast_action_assign($$[$0-2], $$[$0]); 
break;
case 7: this.$ = ast_action_return($$[$0]); 
break;
case 8: this.$ = ast_lone_expression($$[$0]); 
break;
case 14: this.$ = $$[$0-1] 
break;
case 15: this.$ = ast_expr_call_func($$[$0-3], $$[$0-1]); 
break;
case 16: this.$ = yytext === 'true'; 
break;
case 17: this.$ = Number(yytext); 
break;
case 18: this.$ = yytext.substring(1, yytext.length-1); 
break;
case 19: this.$ = null; 
break;
case 20: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 21: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 22: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 23: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 24: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 25: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 26: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 27: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 28: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 29: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 30: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 31: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 32:
            this.$ = {
                arguments: $$[$0-2],
                body: $$[$0]
            }
        
break;
case 33: this.$ = { reference: $$[$0] } 
break;
case 36: this.$ = [$$[$0]] 
break;
case 37:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
case 40: this.$ = [$$[$0]] 
break;
case 41:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
}
},
table: [{3:1,4:2,5:[2,3],9:3,10:[1,4],12:[1,5],14:[1,6],15:7,18:8},{1:[3]},{5:[1,9]},{4:10,5:[2,3],8:[2,3],9:3,10:[1,4],12:[1,5],14:[1,6],15:7,18:8},{11:11,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{13:[1,24],20:[2,33]},{11:25,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{5:[2,8],8:[2,8],10:[2,8],12:[2,8],14:[2,8]},{20:[1,26]},{1:[2,1]},{5:[2,4],8:[2,4]},{6:27,7:[1,40],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[1,38],38:[1,39]},{5:[2,9],7:[2,9],8:[2,9],10:[2,9],12:[2,9],14:[2,9],21:[2,9],27:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],42:[2,9]},{5:[2,10],7:[2,10],8:[2,10],10:[2,10],12:[2,10],14:[2,10],21:[2,10],27:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],42:[2,10]},{5:[2,11],7:[2,11],8:[2,11],10:[2,11],12:[2,11],14:[2,11],21:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],42:[2,11]},{5:[2,12],7:[2,12],8:[2,12],10:[2,12],12:[2,12],14:[2,12],20:[1,26],21:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12],42:[2,12]},{5:[2,13],7:[2,13],8:[2,13],10:[2,13],12:[2,13],14:[2,13],21:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13],42:[2,13]},{11:41,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{20:[1,42]},{5:[2,33],7:[2,33],8:[2,33],10:[2,33],12:[2,33],14:[2,33],20:[2,33],21:[2,33],27:[2,33],28:[2,33],29:[2,33],30:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],42:[2,33]},{5:[2,16],7:[2,16],8:[2,16],10:[2,16],12:[2,16],14:[2,16],21:[2,16],27:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],32:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16],37:[2,16],38:[2,16],42:[2,16]},{5:[2,17],7:[2,17],8:[2,17],10:[2,17],12:[2,17],14:[2,17],21:[2,17],27:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],42:[2,17]},{5:[2,18],7:[2,18],8:[2,18],10:[2,18],12:[2,18],14:[2,18],21:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18],37:[2,18],38:[2,18],42:[2,18]},{5:[2,19],7:[2,19],8:[2,19],10:[2,19],12:[2,19],14:[2,19],21:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],37:[2,19],38:[2,19],42:[2,19]},{11:43,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{5:[2,7],8:[2,7],10:[2,7],12:[2,7],14:[2,7],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[1,38],38:[1,39]},{11:46,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],21:[2,38],22:44,23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18],43:45},{5:[2,5],8:[2,5],10:[2,5],12:[2,5],14:[2,5]},{11:47,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:48,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:49,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:50,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:51,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:52,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:53,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:54,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:55,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:56,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:57,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{11:58,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18]},{4:59,8:[2,3],9:3,10:[1,4],12:[1,5],14:[1,6],15:7,18:8},{21:[1,60],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[1,38],38:[1,39]},{12:[1,63],21:[2,34],40:61,41:62},{5:[2,6],8:[2,6],10:[2,6],12:[2,6],14:[2,6],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[1,38],38:[1,39]},{21:[1,64]},{21:[2,39]},{21:[2,40],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[1,38],38:[1,39],42:[1,65]},{5:[2,20],7:[2,20],8:[2,20],10:[2,20],12:[2,20],14:[2,20],21:[2,20],27:[2,20],28:[2,20],29:[1,30],30:[1,31],31:[2,20],32:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20],37:[2,20],38:[2,20],42:[2,20]},{5:[2,21],7:[2,21],8:[2,21],10:[2,21],12:[2,21],14:[2,21],21:[2,21],27:[2,21],28:[2,21],29:[1,30],30:[1,31],31:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],42:[2,21]},{5:[2,22],7:[2,22],8:[2,22],10:[2,22],12:[2,22],14:[2,22],21:[2,22],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],42:[2,22]},{5:[2,23],7:[2,23],8:[2,23],10:[2,23],12:[2,23],14:[2,23],21:[2,23],27:[2,23],28:[2,23],29:[2,23],30:[2,23],31:[2,23],32:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23],37:[2,23],38:[2,23],42:[2,23]},{5:[2,24],7:[2,24],8:[2,24],10:[2,24],12:[2,24],14:[2,24],21:[2,24],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,24],38:[2,24],42:[2,24]},{5:[2,25],7:[2,25],8:[2,25],10:[2,25],12:[2,25],14:[2,25],21:[2,25],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,25],38:[2,25],42:[2,25]},{5:[2,26],7:[2,26],8:[2,26],10:[2,26],12:[2,26],14:[2,26],21:[2,26],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,26],38:[2,26],42:[2,26]},{5:[2,27],7:[2,27],8:[2,27],10:[2,27],12:[2,27],14:[2,27],21:[2,27],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,27],38:[2,27],42:[2,27]},{5:[2,28],7:[2,28],8:[2,28],10:[2,28],12:[2,28],14:[2,28],21:[2,28],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,28],38:[2,28],42:[2,28]},{5:[2,29],7:[2,29],8:[2,29],10:[2,29],12:[2,29],14:[2,29],21:[2,29],27:[1,28],28:[1,29],29:[1,30],30:[1,31],37:[2,29],38:[2,29],42:[2,29]},{5:[2,30],7:[2,30],8:[2,30],10:[2,30],12:[2,30],14:[2,30],21:[2,30],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[2,30],38:[2,30],42:[2,30]},{5:[2,31],7:[2,31],8:[2,31],10:[2,31],12:[2,31],14:[2,31],21:[2,31],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],34:[1,35],35:[1,36],36:[1,37],37:[2,31],38:[2,31],42:[2,31]},{8:[1,66]},{5:[2,14],7:[2,14],8:[2,14],10:[2,14],12:[2,14],14:[2,14],21:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14],42:[2,14]},{21:[1,67]},{21:[2,35]},{21:[2,36],42:[1,68]},{5:[2,15],7:[2,15],8:[2,15],10:[2,15],12:[2,15],14:[2,15],21:[2,15],27:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],37:[2,15],38:[2,15],42:[2,15]},{11:46,12:[1,19],15:13,16:12,17:14,18:15,19:16,20:[1,17],23:[1,20],24:[1,21],25:[1,22],26:[1,23],39:[1,18],43:69},{5:[2,2],7:[2,2],8:[2,2],10:[2,2],12:[2,2],14:[2,2],21:[2,2],27:[2,2],28:[2,2],29:[2,2],30:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],35:[2,2],36:[2,2],37:[2,2],38:[2,2],42:[2,2]},{6:70,7:[1,40]},{12:[1,63],41:71},{21:[2,41]},{5:[2,32],7:[2,32],8:[2,32],10:[2,32],12:[2,32],14:[2,32],21:[2,32],27:[2,32],28:[2,32],29:[2,32],30:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],42:[2,32]},{21:[2,37]}],
defaultActions: {9:[2,1],45:[2,39],62:[2,35],69:[2,41],71:[2,37]},
parseError: function parseError (str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

    function ast_action(name, data) {
        return {
            action: name,
            data: data
        };
    }

    function ast_action_conditional(condition, actions) {
        data = { condition: condition, actions: actions };
        return ast_action('conditional', data);
    }

    function ast_action_assign(id, expr) {
        data = { identifier: id, expression: expr};
        return ast_action('assign', data)
    }

    function ast_lone_expression(expression) {
        data = { expression: expression };
        return ast_action('lone_expression', data);
    }

    function ast_action_return(expr) {
        data = { expression: expr };
        return ast_action('return', data);
    }

    function ast_expr_operation(operand, term1, term2) {
        return {
            operand: operand,
            term1: term1,
            term2: term2
        };
    }

    function ast_expr_call_func(func_name, func_args) {
        return {
            function: func_name,
            arguments: func_args
        }
    }

function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
exports.main = function commonjsMain (args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}