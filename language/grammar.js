/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"program":3,"actions":4,"EOF":5,"code_block":6,"o_CURLY":7,"c_CURLY":8,"action":9,"t_IF":10,"expression":11,"t_WHILE":12,"t_RETURN":13,"func_call_expr":14,"assignable":15,"=":16,"t_EACH":17,"IDENTIFIER":18,",":19,"t_IN":20,"ref":21,"operation_expr":22,"func_define_expr":23,"literal":24,"array_raw_expr":25,"o_SQUARE":26,"c_SQUARE":27,".":28,"literal_identifier":29,"o_BRACKET":30,"c_BRACKET":31,"+":32,"-":33,"*":34,"/":35,">":36,"<":37,">=":38,"<=":39,"==":40,"!=":41,"&":42,"|":43,"t_INDEXOF":44,"voidable_expr_list":45,"t_FUN":46,"voidable_id_list":47,"lit_BOOL":48,"lit_NUM":49,"lit_STR":50,"t_NULL":51,"id_list":52,"expr_list":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"o_CURLY",8:"c_CURLY",10:"t_IF",12:"t_WHILE",13:"t_RETURN",16:"=",17:"t_EACH",18:"IDENTIFIER",19:",",20:"t_IN",21:"ref",26:"o_SQUARE",27:"c_SQUARE",28:".",30:"o_BRACKET",31:"c_BRACKET",32:"+",33:"-",34:"*",35:"/",36:">",37:"<",38:">=",39:"<=",40:"==",41:"!=",42:"&",43:"|",44:"t_INDEXOF",46:"t_FUN",48:"lit_BOOL",49:"lit_NUM",50:"lit_STR",51:"t_NULL"},
productions_: [0,[3,2],[6,3],[4,0],[4,2],[9,3],[9,3],[9,2],[9,1],[9,3],[9,7],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[15,4],[15,3],[15,1],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[25,3],[23,5],[14,4],[24,1],[24,1],[24,1],[24,1],[29,1],[47,0],[47,1],[52,1],[52,3],[45,0],[45,1],[53,1],[53,3]],
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
case 7: this.$ = ast_action_return($$[$0]); 
break;
case 8: this.$ = ast_lone_expression($$[$0]); 
break;
case 9: this.$ = ast_assign_value($$[$0-2], $$[$0]); 
break;
case 10: this.$ = ast_for_each($$[$0-5], $$[$0-3], $$[$0-1], $$[$0]); 
break;
case 15: this.$ = ast_expr_read_assignable($$[$0]); 
break;
case 17: this.$ = ast_assignable($$[$0-3], $$[$0-1]); 
break;
case 18: this.$ = ast_assignable($$[$0-2], $$[$0]); 
break;
case 19: this.$ = ast_assignable(null, $$[$0]); 
break;
case 20: this.$ = $$[$0-1] 
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
case 32: this.$ = ast_expr_operation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 33: this.$ = ast_expr_array_contains($$[$0-2], $$[$0]); 
break;
case 34: this.$ = ast_expr_array_contains_key($$[$0-2], $$[$0]); 
break;
case 35: this.$ = ast_expr_raw_array($$[$0-1]); 
break;
case 36: this.$ = ast_expr_define_func($$[$0-2], $$[$0]); 
break;
case 37: this.$ = ast_expr_call_func($$[$0-3], $$[$0-1]); 
break;
case 38: this.$ = ast_expr_literal(yytext === 'true'); 
break;
case 39: this.$ = ast_expr_literal(Number(yytext)); 
break;
case 40: this.$ = ast_expr_literal( yytext.substring(1, yytext.length-1) ); 
break;
case 41: this.$ = ast_expr_literal(null); 
break;
case 42: this.$ = ast_expr_literal( $$[$0] ); 
break;
case 45: this.$ = [$$[$0]] 
break;
case 46:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
case 49: this.$ = [$$[$0]] 
break;
case 50:
            $$[$0].unshift($$[$0-2]);
            this.$ = $$[$0];
        
break;
}
},
table: [{3:1,4:2,5:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],14:7,15:8,17:[1,9],18:[1,11],29:10},{1:[3]},{5:[1,12]},{4:13,5:[2,3],8:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],14:7,15:8,17:[1,9],18:[1,11],29:10},{11:14,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:28,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:29,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{5:[2,8],8:[2,8],10:[2,8],12:[2,8],13:[2,8],17:[2,8],18:[2,8]},{16:[1,30],26:[1,32],28:[1,33],30:[1,31]},{18:[1,34]},{5:[2,19],7:[2,19],8:[2,19],10:[2,19],12:[2,19],13:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],26:[2,19],27:[2,19],28:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],37:[2,19],38:[2,19],39:[2,19],40:[2,19],41:[2,19],42:[2,19],43:[2,19],44:[2,19]},{5:[2,42],7:[2,42],8:[2,42],10:[2,42],12:[2,42],13:[2,42],16:[2,42],17:[2,42],18:[2,42],19:[2,42],20:[2,42],26:[2,42],27:[2,42],28:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42]},{1:[2,1]},{5:[2,4],8:[2,4]},{6:35,7:[1,50],20:[1,48],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{5:[2,11],7:[2,11],8:[2,11],10:[2,11],12:[2,11],13:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],27:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11],40:[2,11],41:[2,11],42:[2,11],43:[2,11],44:[2,11]},{5:[2,12],7:[2,12],8:[2,12],10:[2,12],12:[2,12],13:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],27:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12],40:[2,12],41:[2,12],42:[2,12],43:[2,12],44:[2,12]},{5:[2,13],7:[2,13],8:[2,13],10:[2,13],12:[2,13],13:[2,13],17:[2,13],18:[2,13],19:[2,13],20:[2,13],27:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13],40:[2,13],41:[2,13],42:[2,13],43:[2,13],44:[2,13]},{5:[2,14],7:[2,14],8:[2,14],10:[2,14],12:[2,14],13:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[2,14],27:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14],39:[2,14],40:[2,14],41:[2,14],42:[2,14],43:[2,14],44:[2,14]},{5:[2,15],7:[2,15],8:[2,15],10:[2,15],12:[2,15],13:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[2,15],26:[1,32],27:[2,15],28:[1,33],30:[1,31],31:[2,15],32:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],37:[2,15],38:[2,15],39:[2,15],40:[2,15],41:[2,15],42:[2,15],43:[2,15],44:[2,15]},{5:[2,16],7:[2,16],8:[2,16],10:[2,16],12:[2,16],13:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],27:[2,16],31:[2,16],32:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16],37:[2,16],38:[2,16],39:[2,16],40:[2,16],41:[2,16],42:[2,16],43:[2,16],44:[2,16]},{11:51,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{30:[1,52]},{5:[2,38],7:[2,38],8:[2,38],10:[2,38],12:[2,38],13:[2,38],17:[2,38],18:[2,38],19:[2,38],20:[2,38],27:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[2,38]},{5:[2,39],7:[2,39],8:[2,39],10:[2,39],12:[2,39],13:[2,39],17:[2,39],18:[2,39],19:[2,39],20:[2,39],27:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39]},{5:[2,40],7:[2,40],8:[2,40],10:[2,40],12:[2,40],13:[2,40],17:[2,40],18:[2,40],19:[2,40],20:[2,40],27:[2,40],31:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40]},{5:[2,41],7:[2,41],8:[2,41],10:[2,41],12:[2,41],13:[2,41],17:[2,41],18:[2,41],19:[2,41],20:[2,41],27:[2,41],31:[2,41],32:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41]},{11:55,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],27:[2,47],29:10,30:[1,21],45:53,46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26],53:54},{6:56,7:[1,50],20:[1,48],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{5:[2,7],8:[2,7],10:[2,7],12:[2,7],13:[2,7],17:[2,7],18:[2,7],20:[1,48],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{11:57,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:55,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],31:[2,47],45:58,46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26],53:54},{11:59,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{18:[1,11],29:60},{19:[1,61]},{5:[2,5],8:[2,5],10:[2,5],12:[2,5],13:[2,5],17:[2,5],18:[2,5]},{11:62,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:63,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:64,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:65,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:66,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:67,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:68,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:69,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:70,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:71,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:72,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:73,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:74,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{11:75,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26]},{4:76,8:[2,3],9:3,10:[1,4],12:[1,5],13:[1,6],14:7,15:8,17:[1,9],18:[1,11],29:10},{20:[1,48],31:[1,77],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{18:[1,80],31:[2,43],47:78,52:79},{27:[1,81]},{27:[2,48],31:[2,48]},{19:[1,82],20:[1,48],27:[2,49],31:[2,49],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{5:[2,6],8:[2,6],10:[2,6],12:[2,6],13:[2,6],17:[2,6],18:[2,6]},{5:[2,9],8:[2,9],10:[2,9],12:[2,9],13:[2,9],17:[2,9],18:[2,9],20:[1,48],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{31:[1,83]},{20:[1,48],27:[1,84],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],43:[1,47],44:[1,49]},{5:[2,18],7:[2,18],8:[2,18],10:[2,18],12:[2,18],13:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],26:[2,18],27:[2,18],28:[2,18],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18],37:[2,18],38:[2,18],39:[2,18],40:[2,18],41:[2,18],42:[2,18],43:[2,18],44:[2,18]},{18:[1,85]},{5:[2,21],7:[2,21],8:[2,21],10:[2,21],12:[2,21],13:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],27:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[1,38],35:[1,39],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],42:[2,21],43:[2,21],44:[2,21]},{5:[2,22],7:[2,22],8:[2,22],10:[2,22],12:[2,22],13:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],27:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[1,38],35:[1,39],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],42:[2,22],43:[2,22],44:[2,22]},{5:[2,23],7:[2,23],8:[2,23],10:[2,23],12:[2,23],13:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],27:[2,23],31:[2,23],32:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23],37:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23],42:[2,23],43:[2,23],44:[2,23]},{5:[2,24],7:[2,24],8:[2,24],10:[2,24],12:[2,24],13:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],27:[2,24],31:[2,24],32:[2,24],33:[2,24],34:[2,24],35:[2,24],36:[2,24],37:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],42:[2,24],43:[2,24],44:[2,24]},{5:[2,25],7:[2,25],8:[2,25],10:[2,25],12:[2,25],13:[2,25],17:[2,25],18:[2,25],19:[2,25],27:[2,25],31:[2,25],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,25],43:[2,25]},{5:[2,26],7:[2,26],8:[2,26],10:[2,26],12:[2,26],13:[2,26],17:[2,26],18:[2,26],19:[2,26],27:[2,26],31:[2,26],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,26],43:[2,26]},{5:[2,27],7:[2,27],8:[2,27],10:[2,27],12:[2,27],13:[2,27],17:[2,27],18:[2,27],19:[2,27],27:[2,27],31:[2,27],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,27],43:[2,27]},{5:[2,28],7:[2,28],8:[2,28],10:[2,28],12:[2,28],13:[2,28],17:[2,28],18:[2,28],19:[2,28],27:[2,28],31:[2,28],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,28],43:[2,28]},{5:[2,29],7:[2,29],8:[2,29],10:[2,29],12:[2,29],13:[2,29],17:[2,29],18:[2,29],19:[2,29],27:[2,29],31:[2,29],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,29],43:[2,29]},{5:[2,30],7:[2,30],8:[2,30],10:[2,30],12:[2,30],13:[2,30],17:[2,30],18:[2,30],19:[2,30],27:[2,30],31:[2,30],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,30],43:[2,30]},{5:[2,31],7:[2,31],8:[2,31],10:[2,31],12:[2,31],13:[2,31],17:[2,31],18:[2,31],19:[2,31],20:[1,48],27:[2,31],31:[2,31],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[2,31],43:[2,31],44:[1,49]},{5:[2,32],7:[2,32],8:[2,32],10:[2,32],12:[2,32],13:[2,32],17:[2,32],18:[2,32],19:[2,32],20:[1,48],27:[2,32],31:[2,32],32:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[2,32],43:[2,32],44:[1,49]},{5:[2,33],7:[2,33],8:[2,33],10:[2,33],12:[2,33],13:[2,33],17:[2,33],18:[2,33],19:[2,33],27:[2,33],31:[2,33],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,33],43:[2,33]},{5:[2,34],7:[2,34],8:[2,34],10:[2,34],12:[2,34],13:[2,34],17:[2,34],18:[2,34],19:[2,34],27:[2,34],31:[2,34],32:[1,36],33:[1,37],34:[1,38],35:[1,39],42:[2,34],43:[2,34]},{8:[1,86]},{5:[2,20],7:[2,20],8:[2,20],10:[2,20],12:[2,20],13:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],27:[2,20],31:[2,20],32:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20],37:[2,20],38:[2,20],39:[2,20],40:[2,20],41:[2,20],42:[2,20],43:[2,20],44:[2,20]},{31:[1,87]},{31:[2,44]},{19:[1,88],31:[2,45]},{5:[2,35],7:[2,35],8:[2,35],10:[2,35],12:[2,35],13:[2,35],17:[2,35],18:[2,35],19:[2,35],20:[2,35],27:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35]},{11:55,14:20,15:19,18:[1,11],22:15,23:16,24:17,25:18,26:[1,27],29:10,30:[1,21],46:[1,22],48:[1,23],49:[1,24],50:[1,25],51:[1,26],53:89},{5:[2,37],7:[2,37],8:[2,37],10:[2,37],12:[2,37],13:[2,37],17:[2,37],18:[2,37],19:[2,37],20:[2,37],27:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37]},{5:[2,17],7:[2,17],8:[2,17],10:[2,17],12:[2,17],13:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],26:[2,17],27:[2,17],28:[2,17],30:[2,17],31:[2,17],32:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],39:[2,17],40:[2,17],41:[2,17],42:[2,17],43:[2,17],44:[2,17]},{20:[1,90]},{5:[2,2],7:[2,2],8:[2,2],10:[2,2],12:[2,2],13:[2,2],17:[2,2],18:[2,2],19:[2,2],20:[2,2],27:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],35:[2,2],36:[2,2],37:[2,2],38:[2,2],39:[2,2],40:[2,2],41:[2,2],42:[2,2],43:[2,2],44:[2,2]},{6:91,7:[1,50]},{18:[1,80],52:92},{27:[2,50],31:[2,50]},{21:[1,93]},{5:[2,36],7:[2,36],8:[2,36],10:[2,36],12:[2,36],13:[2,36],17:[2,36],18:[2,36],19:[2,36],20:[2,36],27:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[2,36]},{31:[2,46]},{6:94,7:[1,50]},{5:[2,10],8:[2,10],10:[2,10],12:[2,10],13:[2,10],17:[2,10],18:[2,10]}],
defaultActions: {12:[2,1],79:[2,44],92:[2,46]},
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

    function ast_assign_value(assignable, value) {
        const data = {
            assignable: assignable,
            value: value
        };

        return ast_action('ast_assign_value', data);
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

    function ast_expression(type, data) {
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
            args: func_args
        };

        return ast_expression('call_func', data);
    }

    function ast_expr_define_func(func_args, func_body) {
        const data = {
            args: func_args,
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

    function ast_expr_literal(value) {
        return ast_expression('literal', value);
    }

    function ast_expr_read_assignable(assignable) {
        const data = { assignable: assignable };
        return ast_expression('read_assignable', data);
    }

    function ast_assignable(container, identifier) {
        return {
            container: container,
            identifier: identifier
        }
    }

function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();

export default grammar;
