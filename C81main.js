
var last_Start_mouse_X,last_Start_mouse_Y;

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

var width=screen.width;
new_width=screen.width-79;
new_height=screen.height-79;
color="red";
width_of_line=3;
if (width < 992 ) {
    document.getElementById("canvas").width=new_width;
    document.getElementById("canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",m);
function m(e) {
    color=document.getElementById("jk").value;
    width_of_line=document.getElementById("poll").value;
    last_Start_mouse_X=e.touches[0].clientX-canvas.offsetLeft;
    last_Start_mouse_Y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",glhf);
function glhf(e) {
   current_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
   current_mouse_y=e.touches[0].clientY-canvas.offsetTop;

  
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("x="+last_Start_mouse_X+"y="+last_Start_mouse_Y);
    ctx.moveTo(last_Start_mouse_X,last_Start_mouse_Y);
    console.log("x="+current_mouse_x+"y="+current_mouse_y);
    ctx.lineTo(current_mouse_x,current_mouse_y);
    ctx.stroke();
   
   last_Start_mouse_X=current_mouse_x;
   last_Start_mouse_Y=current_mouse_y;
}

function onwww() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }