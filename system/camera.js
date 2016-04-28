var cam = {
	x:0, 
	y:0,
	width: cnv.width,
	height: cnv.height,
	rightEdge: function(){
		return this.x + (this.width * 0.75);
	},
	leftEdge: function(){
		return this.x + (this.width * 0.25);
	},
	topEdge: function(){
		return this.y + (this.height * 0.25);
	},
	bottomEdge: function(){
		return this.y + (this.height * 0.75);
	}
}

function camPosition(){
	if(p1.x < cam.leftEdge()){
		cam.x = p1.x - (cam.width * 0.25);
	}
	if(p1.x + p1.width > cam.rightEdge()){
		cam.x = p1.x + p1.width - (cam.width * 0.75);
	}
	if(p1.y < cam.topEdge()){
		cam.y = p1.y - (cam.height * 0.25);
	}
	if(p1.y + p1.height > cam.bottomEdge()){
		cam.y = p1.y + p1.height - (cam.height * 0.75);
	}
}

function camLimit(){
	//limite da câmera
	if(cam.x < 0){
		cam.x = 0;
	}
	if(cam.x + cam.width > background.width){
		cam.x = background.width - cam.width;
	}
	if(cam.y < 0){
		cam.y = 0;
	}
	if(cam.y + cam.height > background.height){
		cam.y = background.height - cam.height;
	}
}

function camExe(){
	camPosition();
	camLimit();
}