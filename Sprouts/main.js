var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sprouts = [];
var radius = 16;

context.lineWidth = radius;
context.strokeStyle = "grey";

var player1 = "player 1"; 
var player2 = "player 2";
var currentPlayer = player1;		// player 1 goes first

function initialize()
{
	var initialSprouts = 2;

	// draw initial sprouts
	for (var i = 0; i < initialSprouts; i++)
	{
		var sprout = new Sprout(window.innerWidth/2, 250*(i+1));
		sprouts.push(sprout);
	}
}