/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"program":3,"actions":4,"EOF":5,"code_block":6,"o_CURLY":7,"c_CURLY":8,"action":9,"t_IF":10,"expression":11,"t_WHILE":12,"IDENTIFIER":13,"=":14,"t_RETURN":15,"func_call_expr":16,"operation_expr":17,"func_define_expr":18,"ref":19,"literal":20,"o_BRACKET":21,"c_BRACKET":22,"+":23,"-":24,"*":25,"/":26,">":27,"<":28,">=":29,"<=":30,"==":31,"!=":32,"&":33,"|":34,"t_FUN":35,"func_args":36,"call_args":37,"lit_BOOL":38,"lit_NUM":39,"lit_STR":40,"t_NULL":41,"id_list":42,",":43,"expr_list":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"o_CURLY",8:"c_CURLY",10:"t_IF",12:"t_WHILE",13:"IDENTIFIER",14:"=",15:"t_RETURN",21:"o_BRACKET",22:"c_BRACKET",23:"+",24:"-",25:"*",26:"/",27:">",28:"<",29:">=",30:"<=",31:"==",32:"!=",33:"&",34:"|",35:"t_FUN",38:"lit_BOOL",39:"lit_NUM",40:"lit_STR",41:"t_NULL",43:","},
productions_: [0,[3,2],[6,3],[4,0],[4,2],[9,3],[9,3],[9,3],[9,2],[9,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[18,5],[16,4],[19,1],[20,1],[20,1],[20,1],[20,1],[36,0],[36,1],[42,1],[42,3],[37,0],[37,1],[44,1],[44,3]],
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
case 6: this.$ = ast_action_while($$[$0-1], $$[$0]); 
break;
case 7: this.$ = ast_action_assign($$[$0-2], $$[$0]); 
break;
case 8: this.$ = ast_action_return($$[$0]); 
break;
case 9: this.$ = ast_lone_expression($$[$0]); 
break;
case 15: this.$ = $$[$0-1] 
break;
case 16: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 17: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 18: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 19: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
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
case 28: this.$ = ast_expr_define_func($$[$0-2], $$[$0]); 
break;
case 29: this.$ = ast_expr_call_func($$[$0-3], $$[$0-1]); 
break;
case 30: this.$ = ast_expr_ref($$[$0]); 
break;
case 31: this.$ = ast_expr_literal(yytext === 'true'); 
break;
case 32: this.$ = ast_expr_literal(Number(yytext)); 
break;
case 33: this.$ = ast_expr_literal( yytext.substring(1, yytext.length-1) ); 
break;
case 34: this.$ = ast_expr_literal(null); 
break;
case 37: this.$ = [$$[$0]] 
break;
case 38:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
case 41: this.$ = [$$[$0]] 
break;
case 42:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
}
},
table: [{3:1,4:2,5:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],15:[1,7],16:8,19:9},{1:[3]},{5:[1,10]},{4:11,5:[2,3],8:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],15:[1,7],16:8,19:9},{11:12,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:25,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{14:[1,26],21:[2,30]},{11:27,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{5:[2,9],8:[2,9],10:[2,9],12:[2,9],13:[2,9],15:[2,9]},{21:[1,28]},{1:[2,1]},{5:[2,4],8:[2,4]},{6:29,7:[1,42],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41]},{5:[2,10],7:[2,10],8:[2,10],10:[2,10],12:[2,10],13:[2,10],15:[2,10],22:[2,10],23:[2,10],24:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],43:[2,10]},{5:[2,11],7:[2,11],8:[2,11],10:[2,11],12:[2,11],13:[2,11],15:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],43:[2,11]},{5:[2,12],7:[2,12],8:[2,12],10:[2,12],12:[2,12],13:[2,12],15:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],43:[2,12]},{5:[2,13],7:[2,13],8:[2,13],10:[2,13],12:[2,13],13:[2,13],15:[2,13],21:[1,28],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],43:[2,13]},{5:[2,14],7:[2,14],8:[2,14],10:[2,14],12:[2,14],13:[2,14],15:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],43:[2,14]},{11:43,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{21:[1,44]},{5:[2,30],7:[2,30],8:[2,30],10:[2,30],12:[2,30],13:[2,30],15:[2,30],21:[2,30],22:[2,30],23:[2,30],24:[2,30],25:[2,30],26:[2,30],27:[2,30],28:[2,30],29:[2,30],30:[2,30],31:[2,30],32:[2,30],33:[2,30],34:[2,30],43:[2,30]},{5:[2,31],7:[2,31],8:[2,31],10:[2,31],12:[2,31],13:[2,31],15:[2,31],22:[2,31],23:[2,31],24:[2,31],25:[2,31],26:[2,31],27:[2,31],28:[2,31],29:[2,31],30:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],43:[2,31]},{5:[2,32],7:[2,32],8:[2,32],10:[2,32],12:[2,32],13:[2,32],15:[2,32],22:[2,32],23:[2,32],24:[2,32],25:[2,32],26:[2,32],27:[2,32],28:[2,32],29:[2,32],30:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],43:[2,32]},{5:[2,33],7:[2,33],8:[2,33],10:[2,33],12:[2,33],13:[2,33],15:[2,33],22:[2,33],23:[2,33],24:[2,33],25:[2,33],26:[2,33],27:[2,33],28:[2,33],29:[2,33],30:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],43:[2,33]},{5:[2,34],7:[2,34],8:[2,34],10:[2,34],12:[2,34],13:[2,34],15:[2,34],22:[2,34],23:[2,34],24:[2,34],25:[2,34],26:[2,34],27:[2,34],28:[2,34],29:[2,34],30:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],43:[2,34]},{6:45,7:[1,42],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41]},{11:46,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{5:[2,8],8:[2,8],10:[2,8],12:[2,8],13:[2,8],15:[2,8],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41]},{11:49,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],22:[2,39],35:[1,19],37:47,38:[1,21],39:[1,22],40:[1,23],41:[1,24],44:48},{5:[2,5],8:[2,5],10:[2,5],12:[2,5],13:[2,5],15:[2,5]},{11:50,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:51,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:52,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:53,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:54,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:55,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:56,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:57,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:58,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:59,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:60,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{11:61,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24]},{4:62,8:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],15:[1,7],16:8,19:9},{22:[1,63],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41]},{13:[1,66],22:[2,35],36:64,42:65},{5:[2,6],8:[2,6],10:[2,6],12:[2,6],13:[2,6],15:[2,6]},{5:[2,7],8:[2,7],10:[2,7],12:[2,7],13:[2,7],15:[2,7],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41]},{22:[1,67]},{22:[2,40]},{22:[2,41],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[1,40],34:[1,41],43:[1,68]},{5:[2,16],7:[2,16],8:[2,16],10:[2,16],12:[2,16],13:[2,16],15:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[1,32],26:[1,33],27:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],32:[2,16],33:[2,16],34:[2,16],43:[2,16]},{5:[2,17],7:[2,17],8:[2,17],10:[2,17],12:[2,17],13:[2,17],15:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[1,32],26:[1,33],27:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17],33:[2,17],34:[2,17],43:[2,17]},{5:[2,18],7:[2,18],8:[2,18],10:[2,18],12:[2,18],13:[2,18],15:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18],26:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],43:[2,18]},{5:[2,19],7:[2,19],8:[2,19],10:[2,19],12:[2,19],13:[2,19],15:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],43:[2,19]},{5:[2,20],7:[2,20],8:[2,20],10:[2,20],12:[2,20],13:[2,20],15:[2,20],22:[2,20],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,20],34:[2,20],43:[2,20]},{5:[2,21],7:[2,21],8:[2,21],10:[2,21],12:[2,21],13:[2,21],15:[2,21],22:[2,21],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,21],34:[2,21],43:[2,21]},{5:[2,22],7:[2,22],8:[2,22],10:[2,22],12:[2,22],13:[2,22],15:[2,22],22:[2,22],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,22],34:[2,22],43:[2,22]},{5:[2,23],7:[2,23],8:[2,23],10:[2,23],12:[2,23],13:[2,23],15:[2,23],22:[2,23],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,23],34:[2,23],43:[2,23]},{5:[2,24],7:[2,24],8:[2,24],10:[2,24],12:[2,24],13:[2,24],15:[2,24],22:[2,24],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,24],34:[2,24],43:[2,24]},{5:[2,25],7:[2,25],8:[2,25],10:[2,25],12:[2,25],13:[2,25],15:[2,25],22:[2,25],23:[1,30],24:[1,31],25:[1,32],26:[1,33],33:[2,25],34:[2,25],43:[2,25]},{5:[2,26],7:[2,26],8:[2,26],10:[2,26],12:[2,26],13:[2,26],15:[2,26],22:[2,26],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[2,26],34:[2,26],43:[2,26]},{5:[2,27],7:[2,27],8:[2,27],10:[2,27],12:[2,27],13:[2,27],15:[2,27],22:[2,27],23:[1,30],24:[1,31],25:[1,32],26:[1,33],27:[1,34],28:[1,35],29:[1,36],30:[1,37],31:[1,38],32:[1,39],33:[2,27],34:[2,27],43:[2,27]},{8:[1,69]},{5:[2,15],7:[2,15],8:[2,15],10:[2,15],12:[2,15],13:[2,15],15:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],43:[2,15]},{22:[1,70]},{22:[2,36]},{22:[2,37],43:[1,71]},{5:[2,29],7:[2,29],8:[2,29],10:[2,29],12:[2,29],13:[2,29],15:[2,29],22:[2,29],23:[2,29],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],30:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],43:[2,29]},{11:49,13:[1,20],16:14,17:13,18:15,19:16,20:17,21:[1,18],35:[1,19],38:[1,21],39:[1,22],40:[1,23],41:[1,24],44:72},{5:[2,2],7:[2,2],8:[2,2],10:[2,2],12:[2,2],13:[2,2],15:[2,2],22:[2,2],23:[2,2],24:[2,2],25:[2,2],26:[2,2],27:[2,2],28:[2,2],29:[2,2],30:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],43:[2,2]},{6:73,7:[1,42]},{13:[1,66],42:74},{22:[2,42]},{5:[2,28],7:[2,28],8:[2,28],10:[2,28],12:[2,28],13:[2,28],15:[2,28],22:[2,28],23:[2,28],24:[2,28],25:[2,28],26:[2,28],27:[2,28],28:[2,28],29:[2,28],30:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[2,28],43:[2,28]},{22:[2,38]}],
defaultActions: {10:[2,1],48:[2,40],65:[2,36],72:[2,42],74:[2,38]},
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
        return { action_type: name, data: data };
    }

    function ast_action_conditional(condition, actions) {
        data = { condition: condition, actions: actions };
        return ast_action('conditional', data);
    }

    function ast_action_while(condition, actions) {
        data = { condition: condition, actions: actions };
        return ast_action('while', data);
    }

    function ast_action_assign(id, expr) {
        data = { identifier: id, expression: expr};
        return ast_action('assign', data);
    }

    function ast_lone_expression(expression) {
        data = { expression: expression };
        return ast_action('lone_expression', data);
    }

    function ast_action_return(expr) {
        data = { expression: expr };
        return ast_action('return', data);
    }

    function ast_expression(type, data) {
        return { expression_type: type, data: data };
    }

    function ast_expr_operation(operand, term1, term2) {
        data = {
            operand: operand,
            term1: term1,
            term2: term2
        };

        return ast_expression('operation', data);
    }

    function ast_expr_call_func(func_name, func_args) {
        data = {
            function: func_name,
            arguments: func_args
        };

        return ast_expression('call_func', data);
    }

    function ast_expr_define_func(func_args, func_body) {
        data = {
            arguments: func_args,
            body: func_body
        };

        return ast_expression('define_func', data);
    }

    function ast_expr_ref(id) {
        data = { reference: id };
        return ast_expression('ref', data);
    }

    function ast_expr_literal(value) {
        return ast_expression('literal', value);
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