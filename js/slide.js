document.getElementById("nav_bar").addEventListener("click", slideRight, false);
function slideRight(){
	 document.getElementById("nav_bar_list").className = "slider_left";
	 document.getElementById("body_wrap").style.overflow="hidden";
}
document.getElementById("news_list").addEventListener("click", slideLeft, false);
function slideLeft(){
	 document.getElementById("news_articles").className = "slider_right";
	 document.getElementById("body_wrap").style.overflow="hidden";
}
document.getElementById("content_wrapper").addEventListener("click", remove, false);
function remove(){
	document.getElementById("nav_bar_list").className = "slide_left";
	document.getElementById("news_articles").className = "slide_right";
	document.getElementById("body_wrap").style.overflowY="auto";

}
