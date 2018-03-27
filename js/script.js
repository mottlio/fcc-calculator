$(document).ready(function() {
    
var calculation = [];
var statement = "";
var expr = "";


    
    $(".num").click(function(){
        var val = $(this).html();
        console.log(val);
        statement += val;
        expr += val;
        if (expr.length > 9){
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }
        console.log(statement);
        $(".screen").html(expr);
    });

    $(".oper").click(function(){
        var val = $(this).html();
        console.log(val);
        expr = "";
        statement += val;
        console.log(statement);
        $(".screen").html(val);
    });

    $(".button--ac").click(function(){
        expr = "";
        statement = "";
        $(".screen").css("font-size", "4rem");
        console.log("0");
        $(".screen").html("0");
    });

    



    $(".button--eq").click(function(){
        var result = math.eval(statement);
        console.log(result);
        console.log(result.length);
        $(".screen").html(result);
        if (result > 999999999){
            $(".screen").css("font-size", "2rem");
        } else {
            $(".screen").css("font-size", "4rem");
        }

    });
    
    // all custom jQuery will go here
});