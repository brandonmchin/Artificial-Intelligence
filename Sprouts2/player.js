var drawing = false;
var curving = false;

var sprout1, sprout2;

function click(e)
{
	console.log("CLICK");

	// select first sprout
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

	// select second sprout
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

	// draw line and new sprout
	else if (drawing && curving)
	{
		drawing = false;
		curving = false;

		// drawing a loop
		if (sprout1 === sprout2)
		{
			drawLoop(sprout1);
			sprout1.deactivate();
			sprout2.deactivate();
		}

		// drawing a line
		else
		{
			drawLine(sprout1, sprout2, e);
			sprout1.deactivate();
			sprout2.deactivate();
		}

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

		console.log("DONE");

		currentPlayer = player2;

		aiMove();
	}
}