// JavaScript File
$(document).ready(function(){
    
    $( "ul.navbar-nav ul" ).addClass( "level_2" )
    $( "ul.level_2" ).children("li").css( "background-color", "white" ).addClass("special");
    $('tbody > tr:odd').addClass('year');
   
   /* Перелінковка з dropdown-menu на Nav tabs */
   
    $('a[href^="#travel"]').click(function(){
        $("#travel").addClass("active");
        $("#right_nav li:not(#travel)").removeClass('active');
        
    });
    $('a[href^="#hobbi"]').click(function(){
        $("#hobbi").addClass("active");
        $("#right_nav li:not(#hobbi)").removeClass('active');
    });
    $('a[href^="#work"]').click(function(){
        $("#work").addClass("active");
        $("#right_nav li:not(#work)").removeClass('active');
    });
    $('a[href^="#links"]').click(function(){
        $("#links").addClass("active");
        $("#right_nav li:not(#links)").removeClass('active');
    });
    
});