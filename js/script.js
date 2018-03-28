$(document).ready(function() {
    
var statement = "";
var expr = "";
var oper = 0;
var result = 0;


    
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
            expr = expr*1/100;
            statement += "/100";
        }
        else {
            //////
            if (result && statement == "" && expr == ""){
                result = 0;
            }
                statement += val;
                expr += val;
                console.log(statement);
            
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
        
        if ($(".screen").html() == 0){
            statement = "";
            expr = "";
        } else {

            $(".button").css("border", "1px solid black");
            $(this).css("border", "3px solid white");

                if (result){
                    expr = result.toString();
                    console.log(statement);
                }


                if (oper == 0) {        
                    var val = $(this).html();
                    statement = expr + val;
                    oper += 1;
                    console.log(statement);
                
                    if (expr.toString().length > 9) {
                        $(".screen").css("font-size", "2rem");
                    } else {
                        $(".screen").css("font-size", "4rem");
                    }
                
                    $(".screen").html(expr);
                    expr = "";
                } else {
                    var last = statement.substr(statement.length-1);

                    if (["+", "-", "/", "*"].indexOf(last) > -1) {
                        var substat = statement.substring(0, statement.length - 1);
                        //statement = statement.substring(0, statement.length - 1);
                        statement = math.eval(substat).toString();
                        //expr = math.eval(statement).toString();

                        if (statement.length > 9) {
                            $(".screen").css("font-size", "2rem");
                        } else {
                            $(".screen").css("font-size", "4rem");
                        }

                        $(".screen").html(statement);
                        var val = $(this).html();
                        statement += val;
                        console.log(statement);
                        expr = "";
                        oper = 1;
                    
                    
                    } else {
                        expr = math.eval(statement).toString();
                    
                        if (expr.toString().length > 9) {
                            $(".screen").css("font-size", "2rem");
                        } else {
                            $(".screen").css("font-size", "4rem");
                        }
                    
                        $(".screen").html(expr);
                        var val = $(this).html();
                        statement = expr + val;
                        expr = "";
                        oper = 1;
                    }

                }
            }
        
    });

    $(".button--ac").click(function(){
        oper = 0;
        expr = "";
        statement = "";
        result = "";
        $(".screen").css("font-size", "4rem");
        console.log("0");
        $(".screen").html("0");
    });


    $(".button--eq").click(function(){
        $(".button").css("border", "1px solid black");
        var last = statement.substr(statement.length-1);
            
            if (["+", "-", "/", "*"].indexOf(last) > -1) {
                var substat = statement.substring(0, statement.length - 1);
                //statement = statement.substring(0, statement.length - 1);
                statement = math.eval(substat).toString();
                //expr = math.eval(statement).toString();
            }
        
        oper = 0;
        result = math.eval(statement);
        //statement = result.toString();
        //expr = statement;
        expr = "";
        statement = "";
        console.log(result);
        console.log(statement);
        $(".screen").html(result);
        if (result.toString().length > 9) {
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }

    });
    
});