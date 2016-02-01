var toggle = 0;
window.onload = function() {
    toggle = 0;
    document.getElementById("slide_right").style.position = "absolute";
    document.getElementById("slide_right").style.left = "-200px";
};

function show() {
    if (parseInt(document.getElementById("slide_right").style.left) <= -5) {
        document.getElementById("slide_right").style.left = parseInt(document.getElementById("slide_right").style.left) + 5 + "px";
        setTimeout(show, 5);
    }
}

function hide() {
    if (parseInt(document.getElementById("slide_right").style.left) >= -195) {
        document.getElementById("slide_right").style.left = parseInt(document.getElementById("slide_right").style.left) - 5 + "px";
        setTimeout(hide, 5);
    }
}

function menuToggleRight() {
    if (toggle == 0) {
        show();
        toggle = 1;
    } else if (toggle == 1) {
        hide();
        toggle = 0;
    }
}