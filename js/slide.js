document.getElementById("nav_bar").addEventListener("click", slideRight, false);

function slideRight() {
    document.getElementById("nav_bar_list").className = "slider_left";
    document.getElementById("unclick_left").className = "expand_left";
    document.getElementById("body_wrap").style.overflow = "hidden";
}
document.getElementById("news_list").addEventListener("click", slideLeft, false);

function slideLeft() {
    document.getElementById("news_articles").className = "slider_right";
    document.getElementById("unclick_right").className = "expand_right";
    document.getElementById("body_wrap").style.overflow = "hidden";
}
document.getElementById("unclick_left").addEventListener("click", remove, false);
document.getElementById("unclick_right").addEventListener("click", remove, false);

function remove() {
    document.getElementById("nav_bar_list").className = "slide_left";
    document.getElementById("news_articles").className = "slide_right";
    document.getElementById("unclick_left").className = "hide_left";
     document.getElementById("unclick_right").className = "hide_right";
    document.getElementById("body_wrap").style = "";

}
