document.getElementById("id_logic").innerHTML = "2019.12.02.0";

window.addEventListener("touchstart", touch_start_uab, { passive: false }); 
window.addEventListener("touchmove", touch_move_uab, { passive: false }); 
window.addEventListener("touchend", touch_end_uab, { passive: false }); 


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

function touch_start_uab(p)
{
	var t = p.changedTouches;
	for (var i=0; i<t.length; i++){
		context.beginPath();
	context.arc(t[i].pageX, t[i].pageY. 10, 0, 2*Math.PI;
	}
}