var sprites = [];

var background = {
	color: "blue",
	x:0,
	y:0,
	width: 3000,
	height: 2000
}

sprites.push(background);
sprites.push(p1);

function drawSpr(sprite){
	for(var i in sprite){
		var spr = sprite[i];
		ctx.fillStyle = spr.color;
		ctx.fillRect(spr.x,spr.y,spr.width,spr.height);
	}
}