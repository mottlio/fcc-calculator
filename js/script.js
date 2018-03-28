$(document).ready(function() {
    
var calculation = [];
var statement = "";
var expr = "";
var oper = 0;


    
    $(".num").click(function(){
        var val = $(this).html();

        if (val == "+/-"){
            var last = statement.substr(statement.length-1);
            if ((statement.length == 0) || (["+", "-", "*"].indexOf(last) > -1)) {
                expr = "-";
                statement += "(-1)*";
            } else if (last == "/") {
                expr = "-";
                statement = statement.substring(0, statement.length - 1);
                statement += "*(-1)/";
                console.log(statement);
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
            statement += val;
            oper += 1;
            console.log(statement);
            $(".screen").html(expr);
            expr = "";
        } else {
            var last = statement.substr(statement.length-1);
            
            if (["+", "-", "/", "*"].indexOf(last) > -1) {
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
                var val = $(this).html();
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
        $(".screen").html(result);
        if (result.toString().length > 9) {
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }

    });
    
});