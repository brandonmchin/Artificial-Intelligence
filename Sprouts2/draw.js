function drawLoop(sprout)
{
	// TOP LOOP
	if (sprout == sprouts[0])
	{
		// create loop
		context.beginPath();
		context.arc(sprout.xPos, sprout.yPos-80, 80, 0, Math.PI*2);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout.xPos, sprout.yPos-160);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		if (gameState == "F")
			gameState = "L";
		else gameState = "B";
		return [sprouts[0], newSprout];
	}

	// BOTTOM LOOP
	else if (sprout == sprouts[1])
	{
		// create loop
		context.beginPath();
		context.arc(sprout.xPos, sprout.yPos+80, 80, 0, Math.PI*2);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout.xPos, sprout.yPos+160);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		if (gameState == "F")
			gameState = "L";
		else gameState = "B";
		return [newSprout, sprouts[1]];	
	}
}

function drawLine(sprout1, sprout2, x)
{
	// LINE STRAIGHT DOWN MIDDLE
	if ((sprout1 == sprouts[0] && sprout2 == sprouts[1]) || (sprout1 == sprouts[1] && sprout2 == sprouts[0]))
	{
		if (gameState == "A")
		{
			// create new line
			context.beginPath();
			context.moveTo(sprout1.xPos, sprout1.yPos);		
			context.lineTo(sprout2.xPos, sprout2.yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprouts[0].xPos, sprouts[0].yPos+125);

			newSprout.connections += 2;
			sprouts.push(newSprout);

			gameState = "C";
			return [sprouts[0], sprouts[1]];
		}
		else if (gameState == "I")
		{
			// create new line
			context.beginPath();
			context.moveTo(sprout1.xPos, sprout1.yPos);
			context.quadraticCurveTo(sprout1.xPos-560, sprouts[3].yPos, sprout2.xPos, sprout2.yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprout1.xPos-280, sprouts[3].yPos);

			newSprout.connections += 2;
			sprouts.push(newSprout);

			gameState = "R";
			return [sprouts[0], sprouts[1]];
		}
	}

	// LINE AROUND TOP RIGHT CORNER
	else if ((sprout1 == sprouts[0] && sprout2 == sprouts[3]) || (sprout1 == sprouts[3] && sprout2 == sprouts[0]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);
		context.quadraticCurveTo(sprouts[0].xPos+360, sprouts[0].yPos-360, sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[0].xPos+250, sprouts[0].yPos-150);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		gameState = "Q";
		return [sprouts[0], sprouts[3]];
	}

	// LINE AROUND BOTTOM RIGHT CORNER
	else if ((sprout1 == sprouts[1] && sprout2 == sprouts[3]) || (sprout1 == sprouts[3] && sprout2 == sprouts[1]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);
		context.quadraticCurveTo(sprouts[1].xPos+360, sprouts[1].yPos+360, sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[1].xPos+250, sprouts[1].yPos+150);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		gameState = "Q";
		return [sprouts[1], sprouts[3]];
	}

	// LINE AROUND BOTTOM LEFT CORNER
	else if ((sprout1 == sprouts[1] && sprout2 == sprouts[2]) || (sprout1 == sprouts[2] && sprout2 == sprouts[1]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);
		context.quadraticCurveTo(sprouts[1].xPos-360, sprouts[1].yPos-60, sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[1].xPos-180, sprouts[1].yPos-60);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		gameState = "Q";
		return [sprouts[1], sprouts[2]];
	}

	// LINE AROUND TOP LEFT CORNER
	else if ((sprout1 == sprouts[0] && sprout2 == sprouts[2]) || (sprout1 == sprouts[2] && sprout2 == sprouts[0]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);
		context.quadraticCurveTo(sprouts[0].xPos-360, sprouts[0].yPos+60, sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[0].xPos-180, sprouts[0].yPos+60);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		gameState = "Q";
		return [sprouts[0], sprouts[2]];
	}

	// // LINE THROUGH CENTER HORIZONTALLY
	else if ((sprout1 == sprouts[2] && sprout2 == sprouts[3]) || (sprout1 == sprouts[3] && sprout2 == sprouts[2]))
	{
		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);
		context.lineTo(sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[2].xPos+140, sprout1.yPos);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		gameState = "R";
		return [sprouts[2], sprouts[3]];
	}
}