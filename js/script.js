$(document).ready(function() {
    
    $(".button").click(function(){
        var val = $(this).html(); 
        console.log(val);
        $(".screen").html(val);
    });
    
    // all custom jQuery will go here
});