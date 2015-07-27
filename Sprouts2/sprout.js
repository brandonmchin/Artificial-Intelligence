function Sprout(x, y)
{
	this.xPos = x;
	this.yPos = y;

	this.connections = 0;   // the number of lines connected to the sprout (must not exceed 3)

	this.drawSprout = function(color)
	{
		context.beginPath();
		context.arc(this.xPos, this.yPos, radius, 0, Math.PI*2);
		context.fillStyle = color;
		context.fill();
	}

	this.drawSprout("skyblue");				// constructor

	this.activate = function()				// player clicked on sprout once
	{
		this.drawSprout("red");
	}

	this.activateDouble = function()		// player clicked on sprout twice
	{
		this.drawSprout("orange");
	}

	this.deactivate = function()			// connection has been made and sprout returns to idle state
	{
		this.drawSprout("skyblue");
	}

	this.die = function()					// sprout has three connections and cannot form anymore connections
	{
		this.drawSprout("black");
	}
}