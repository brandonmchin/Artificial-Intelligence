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
var gameState = "A";				// initial game state

initialize();

console.log("BEGIN!");
console.log(currentPlayer);

canvas.addEventListener("mousedown", click);