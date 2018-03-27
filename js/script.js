$(document).ready(function() {
    
var calculation = [];
var statement = "";
var expr = "";
var oper = 0;


    
    $(".num").click(function(){
        var val = $(this).html();
        console.log(val);

        if (val == "+/-"){
            var last = statement.substr(statement.length-1);
            if ((statement.length == 0) || (["+", "-", "/", "*"].indexOf(last) > -1)) {
                expr = "-";
                statement += "(-1)*";
            } else {
                expr = expr*-1;
                statement += "*(-1)";
            }
            
        } else if(val == "%"){
            expr = expr/100;
            statement += "/100";
        }
        else {
            statement += val;
            expr += val;
        }
        if (expr.length > 9){
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }
        console.log(statement);
        $(".screen").html(expr);
    });

    $(".oper").click(function(){

        if (oper == 0) {        
            var val = $(this).html();
         //   $(".oper").css("box-shadow", "none");
          //  $(this).css("box-shadow", "6px 6px 5px white");
            console.log(val);
            console.log(oper);
            statement += val;
            oper += 1;
            console.log(statement);
            console.log(statement.substr(statement.length-1));
            $(".screen").html(expr);
            expr = "";
        } else {
            var last = statement.substr(statement.length-1);
            console.log(last);
            
            if (["+", "-", "/", "*"].indexOf(last) > -1) {
                console.log("ALERT!");
                statement = statement.substring(0, statement.length - 1);
                expr = math.eval(statement).toString();
                $(".screen").html(expr);
                var val = $(this).html();
                statement = expr + val;
                console.log(statement);
                expr = "";
                oper = 1;


            } else {
                expr = math.eval(statement).toString();
                $(".screen").html(expr);
               // $(".oper").css("box-shadow", "none");
               // $(this).css("box-shadow", "6px 6px 5px white");
                var val = $(this).html();
                console.log(val);
                console.log(oper);
                console.log(statement.substr(statement.length-1));
                statement = expr + val;
                expr = "";
                oper = 1;
            }
            
            
            
        }
        
        
        
        
    });

    $(".button--ac").click(function(){
        oper = 0;
        expr = "";
        statement = "";
        $(".screen").css("font-size", "4rem");
        console.log("0");
        $(".screen").html("0");
    });


    $(".button--eq").click(function(){
        oper = 0;
        var result = math.eval(statement);
        statement = result.toString();
        expr = statement;
        console.log(result);
        console.log(result.toString().length);
        $(".screen").html(result);
        if (result.toString().length > 9) {
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }

    });
    
    // all custom jQuery will go here
});