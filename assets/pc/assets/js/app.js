// Proper Channel JS Functions

// Menu Activation

$(document).ready(function(){
    $(".button-mobile-nav a").click(function(){
        $(".nav-menu").fadeToggle(200);
    });
});

$('.nav-menu').on('click', function(){
    $(".nav-menu").fadeToggle(200);
    $(".button-mobile-nav a");
    open = false;
});