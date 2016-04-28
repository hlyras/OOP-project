function loop(){
	requestAnimationFrame(loop, cnv);
	update();
	render();
}

function update(){
	p1Exe();
	camExe();
}

function render(){
	ctx.save();
	ctx.translate(-cam.x,-cam.y);
	drawSpr(sprites);
	ctx.restore();
}
loop();