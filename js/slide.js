$("#nav_bar").click(function() {
    $("#nav_bar_list").addClass("slider_left");
    $("#unclick_left").addClass("expand_left");
    $("#body_wrap").css({'overflow':"hidden"});
});

$("#news_list").click(function() {
    $("#news_articles").addClass("slider_right");
    $("#unclick_right").addClass("expand_right");
   $("#body_wrap").css({'overflow':"hidden"});
});
$("#unclick_left").click(function() {
    $("#nav_bar_list").removeClass("slider_left");
    $("#unclick_left").removeClass("expand_left");
    $("#body_wrap").css({'overflow':""});
});
$("#unclick_right").click(function() {
    $("#news_articles").removeClass("slider_right");
    $("#unclick_right").removeClass("expand_right");
    $("#body_wrap").css({'overflow':""});
});
