canvas = document.getElementById("draw");
var mouseEvent = "empty";
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", downmouse);
function downmouse(e) {
    color = document.getElementById("set_color").value;
    radius = document.getElementById("set_radius").value;
    linewidth = document.getElementById("set_linewidth").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", upmouse);
function upmouse(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", leavemouse);
function leavemouse(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", movemouse);
function movemouse(e) {
    var current_mouseX = e.clientX - canvas.offsetLeft;
    current_mouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("x =" + current_mouseX + "y =" + current_mouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(current_mouseX, current_mouseY, radius, 0, 2*Math.PI);
        ctx.stroke(); 
    }
}
function clear_paint() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}







