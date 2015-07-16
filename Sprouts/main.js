var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var nodes = [];
var radius = 16;

context.lineWidth = radius;
context.strokeStyle = "grey";

function Node(x, y)
{
	this.xPos = x;
	this.yPos = y;

	this.connections = 0;   // the number of lines connected to the node (must not exceed 3)

	context.beginPath();
	context.arc(this.xPos, this.yPos, radius, 0, Math.PI*2);
	context.fillStyle = "skyblue";
	context.fill();

	this.activate = function()
	{
		context.beginPath();
		context.arc(this.xPos, this.yPos, radius, 0, Math.PI*2);
		context.fillStyle = "red";
		context.fill();
	}

	this.activateDouble = function()
	{
		context.beginPath();
		context.arc(this.xPos, this.yPos, radius, 0, Math.PI*2);
		context.fillStyle = "orange";
		context.fill();
	}

	this.deactivate = function()
	{
		context.beginPath();
		context.arc(this.xPos, this.yPos, radius, 0, Math.PI*2);
		context.fillStyle = "skyblue";
		context.fill();
	}
}