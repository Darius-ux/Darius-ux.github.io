document.getElementById("id_logic").innerHTML = "2019.12.02.4";

window.addEventListener("touchstart", touch_start_uab, { passive: false }); 
window.addEventListener("touchmove", touch_move_uab, { passive: false }); 
window.addEventListener("touchend", touch_end_uab, { passive: false }); 


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var canvas_rect=canvas.getBoundingClientRect();

var last_position=[];

function get_random_color()
{
	var caractere="0123456789ABCDEF";
	var culoare="#";
	for (var i=0; i,6; i++)
		culoare += caractere[Math.floor(Math.random()*16 )];
	return culoare;
}

function touch_start_uab(p)
{
	var t = p.changedTouches;
	for (var i=0; i<t.length; i++){
		context.beginPath();
	context.arc(t[i].pageX, t[i].pageY, 10, 0, 2*Math.PI;
	context.stroke();
	
	var touch_info = {};
	touch_info.x=t[i].pageX;
	touch_info.y=t[i].pageY;
	touch_info.id= t[i].identifier;
	touch_info.color=get_random_color();
	
	context.beginPath();
	context.arc(t[i].pageX-canvas_rect.left, t[i].pageY-canvas_rect.top, 10, 0, 2* Math.PI);
	context.strokestyle = touch_info.color;
	context.fillstyle=touch_info.color;
	context.fill();
	context.stroke();
	
	last_position.push(touch_info);
	}
}

function touch_move_uab(p)
{
	p.preventDefault();
	var t = p.changedTouches;
	for (var i=0; i<t.length; i++){
		
		for (var j=0; j<last_position.length; j++) 
			if (last_position[j].id == t[i].identifier) 
			{
				index_t = j;
				break;
		}
		context.beginPath();
		context.moveTo(last_position[index_t].x-canvas_rect.left,last_position[index_t].y-canvas_rect.top);
		context.lineTo(t[i].pageX-canvas_rect.left, t[i].pageY-canvas_rect.top);
		context.strokestyle = last_position[index_t].color;
	context.fillstyle=last_position[index_t].color;
	context.lineWidth=20;
	context.fill();
	context.stroke();
	
	last_position[index_t].x=t[i].pageX;
	last_position[index_t].y=t[i].pageY;
	
	}
}

function touch_end_uab(p)
{
	var t=p.changedTouches;
	for (var i=0; i<t.length; i++)
	{
		var index_t=-1;
		for (var j=0; j<last_position.length; j++)
			if (last_position[j].id == t[i].identifier)
			{
				index_t=j;
				break;
			}
	}
}
