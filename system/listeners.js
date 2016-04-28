// listeners para teclas
window.addEventListener('keydown', keydownHandler);
window.addEventListener('keyup', keyupHandler);

var key;

function keydownHandler(e){
	key = e.keyCode;
	keydownMoves();
}

function keyupHandler(e){
	key = e.keyCode
	keyupMoves();
}


