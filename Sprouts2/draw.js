function drawLoop(sprout)
{
	if (sprout == sprouts[0])
	{
		// create loop
		context.beginPath();
		context.arc(sprout.xPos, sprout.yPos-80, 80, 0, Math.PI*2);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout.xPos, sprout.yPos-160);
	}

	else if (sprout == sprouts[1])
	{
		// create loop
		context.beginPath();
		context.arc(sprout.xPos, sprout.yPos+80, 80, 0, Math.PI*2);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout.xPos, sprout.yPos+160);
	}

	newSprout.connections += 2;
	sprouts.push(newSprout);
}

function drawLine(sprout1, sprout2, e)
{
	// TURN 1
	if ((sprout1 == sprouts[0] && sprout2 == sprouts[1]) || (sprout1 == sprouts[1] && sprout2 == sprouts[0]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);		
		context.lineTo(sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[0].xPos, sprouts[0].yPos+125);
	}

	// TURN 2
	else if ((sprout1 == sprouts[2] && sprout2 == sprouts[0] && e.clientX > sprout1.xPos+80) || 
		(sprout1 == sprouts[0] && sprout2 == sprouts[2] && e.clientX > sprout1.xPos+80))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprouts[2].xPos, sprouts[2].yPos);		
		context.quadraticCurveTo(sprouts[2].xPos+480, sprouts[2].yPos+80, sprouts[0].xPos, sprouts[0].yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[2].xPos+240, sprouts[2].yPos+80);
	}

	else if ((sprout1 == sprouts[2] && sprout2 == sprouts[0] && e.clientX < sprout1.xPos+80) || 
		(sprout1 == sprouts[0] && sprout2 == sprouts[2] && e.clientX < sprout1.xPos+80))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprouts[2].xPos, sprouts[2].yPos);		
		context.lineTo(sprouts[0].xPos, sprouts[0].yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[2].xPos, sprouts[2].yPos+80);
	}

	newSprout.connections += 2;
	sprouts.push(newSprout);
}