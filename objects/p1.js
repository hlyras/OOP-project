var p1 = {
	color: "red",
	x:50,
	y:50,
	width: 40,
	height:40
}

var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
var mvUp = mvDown = mvLeft = mvRight = false;

function keydownMoves(){
	if(key == LEFT){ 
		mvLeft = true;
	}
	if(key == RIGHT){
		mvRight = true;
	}
	if(key == UP){
		mvUp = true;
	}
	if(key == DOWN){
		mvDown = true;
	}
}

function keyupMoves(){
	if(key == LEFT){ 
		mvLeft = false;
	}
	if(key == RIGHT){
		mvRight = false;
	}
	if(key == UP){
		mvUp = false;
	}
	if(key == DOWN){
		mvDown = false;
	}
}

//moving player
function moves(){
	if(mvLeft){
		p1.x -= 5;
	}
	if(mvRight){
		p1.x += 5;
	}
	if(mvUp){
		p1.y -= 5;
	}
	if(mvDown){
		p1.y += 5;
	}
}

function moveArea(){
	if(p1.x < 0){
		p1.x = 0;
	}
	if(p1.x + p1.width > background.width){
		p1.x = background.width - p1.width;
	}
	if(p1.y < 0){
		p1.y = 0;
	}
	if(p1.y + p1.height > background.height){
		p1.y = background.height - p1.height;
	}
}

function p1Exe(){
	moveArea();
	moves();
}