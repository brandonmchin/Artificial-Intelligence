var drawing = false;
var curving = false;

var sprout1, sprout2;

function click(e)
{
	console.log("CLICK");

	// SELECT FIRST SPROUT 
	if (!drawing && !curving)
	{
		// check to see if player clicked on a sprout
		for (var i = 0; i < sprouts.length; i++)
		{
			// if click is within the radius of sprouts[i] and if sprouts[i] doesn't have more than 3 connections
			if ((e.clientX <= (sprouts[i].xPos+(radius/2))) && 
				(e.clientX >= (sprouts[i].xPos-(radius/2))) && 
				(e.clientY <= (sprouts[i].yPos+(radius/2))) && 
				(e.clientY >= (sprouts[i].yPos-(radius/2))) &&
				(sprouts[i].connections < 3))
			{
				drawing = true;

				sprouts[i].connections += 1;
				sprouts[i].activate();
				sprout1 = sprouts[i];

				console.log("DRAWING");
			}
		}
	}

	// SELECT SECOND SPROUT
	else if (drawing && !curving)
	{
		// check to see if player clicked on a sprout
		for (var i = 0; i < sprouts.length; i++)
		{
			// if click is within the radius of sprouts[i] and if sprouts[i] doesn't have more than 3 connections
			if ((e.clientX <= (sprouts[i].xPos+(radius/2))) && 
				(e.clientX >= (sprouts[i].xPos-(radius/2))) && 
				(e.clientY <= (sprouts[i].yPos+(radius/2))) && 
				(e.clientY >= (sprouts[i].yPos-(radius/2))) &&
				(sprouts[i].connections < 3))
			{
				curving = true;

				sprouts[i].connections += 1;

				if (sprouts[i] === sprout1)
				{
					sprouts[i].activateDouble();
				}

				else
				{
					sprouts[i].activate();
				}

				sprout2 = sprouts[i];

				console.log("CURVING");
			}
		}
	}

	// DRAW LINE AND NEW SPROUT
	else if (drawing && curving)
	{
		drawing = false;
		curving = false;

		// DRAW A LOOP
		if (sprout1 === sprout2)
		{
			// create new line
			var xCenter = (sprout1.xPos + e.clientX)/2;
			var yCenter = (sprout1.yPos + e.clientY)/2;
			var arcRadius = Math.sqrt(Math.pow(sprout1.xPos-e.clientX, 2)+Math.pow(sprout1.yPos-e.clientY, 2))/2;
			var angle = Math.atan(sprout1.yPos/sprout1.xPos);

			//console.log(xCenter, yCenter, "radius", arcRadius, "angle", angle);

			context.beginPath();
			context.arc(xCenter, yCenter, arcRadius, angle, angle+(Math.PI*2));
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(e.clientX, e.clientY);
		}

		// DRAW A LINE
		else
		{
			// create new line
			context.beginPath();
			context.moveTo(sprout1.xPos, sprout1.yPos);		
			context.quadraticCurveTo(e.clientX, e.clientY, sprout2.xPos, sprout2.yPos);
			context.stroke();

			// create new sprout
			var m = 0.5;																	// midpoint value
			var xPoint = (1-m)*(1-m)*sprout1.xPos + 2*(1-m)*m*e.clientX + m*m*sprout2.xPos;		// midpoint of curve
			var yPoint = (1-m)*(1-m)*sprout1.yPos + 2*(1-m)*m*e.clientY + m*m*sprout2.yPos;		// midpoint of curve
			var newSprout = new Sprout(xPoint, yPoint);
		}

		newSprout.connections = 2;
		sprouts.push(newSprout);

		//console.log(sprout1.xPos, sprout1.yPos, newSprout.xPos, newSprout.yPos, sprout2.xPos, sprout2.yPos);

		if (sprout1.connections >= 3)
		{	
			sprout1.die();
		}

		else sprout1.deactivate();

		if (sprout2.connections >= 3)
		{
			sprout2.die();
		}

		else sprout2.deactivate();

		currentPlayer = player2;

		console.log("DONE");
		console.log(currentPlayer);

		aiMove();
	}
}

canvas.addEventListener("mousedown", click);