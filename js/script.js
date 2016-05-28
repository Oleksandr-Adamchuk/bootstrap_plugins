// JavaScript File
$(document).ready(function(){
    
    $( "ul.navbar-nav ul" ).addClass( "level_2" )
    $( "ul.level_2" ).children("li").css( "background-color", "white" ).addClass("special");
    $('tbody > tr:odd').addClass('year');
    
});