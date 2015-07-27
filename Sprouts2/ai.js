function aiMove(drawn)
{
	if(!winCheck(gameState))
	{
		console.log(currentPlayer);
		var sprout1 = drawn[0];
		var sprout2 = drawn[1];

		var node = searchTree(gameTree[0], gameState);
		//console.log(node);

		var depth = 4;
		var bestChoice = " ";
		var bestValue = 1;

		for (var i = 0; i < node.children.length; i++)
		{
			var child = node.children[i];
			var value = minimax(child, depth, currentPlayer);
			if (value < bestValue)
			{
				bestValue = value;
				bestChoice = searchTree(gameTree[0], child.name).name;
			}
		}

		console.log("Best Choice is: " + bestChoice);
		setTimeout(function(){aiDraw(sprout1, sprout2, bestChoice);}, 2000);	// wait 2 seconds before ai executes turn

		currentPlayer = player1;
	}
	else
		console.log("GAME OVER");
}

function minimax(node, depth, currentPlayer)
{
	if (depth == 0 || node.rank != 0)
		return node.rank;
	
	if (currentPlayer == player1)
	{
		var bestValue = -1;
		for (var i = 0; i < node.children.length; i++)
		{
			var child = node.children[i];
			var value = minimax(child, depth-1, player2);
			if (value > bestValue)
				bestValue = value;
		}
		return bestValue;
	}
	else
	{
		var bestValue = 1;
		for (var i = 0; i < node.children.length; i++)
		{
			var child = node.children[i];
			var value = minimax(child, depth-1, player1);
			if (value < bestValue)
				bestValue = value;
		}
		return bestValue;
	}
}

function winCheck(gameState)
{
	if (gameState == "j" ||
		gameState == "k" ||
		gameState == "l" ||
		gameState == "m" ||
		gameState == "n" ||
		gameState == "o" ||
		gameState == "p" ||
		gameState == "q" ||
		gameState == "r" ||
		gameState == "s" ||
		gameState == "t")
	{
		console.log("YOU WIN!");
		alert("YOU WIN!");
		return true;
	}
	else if (gameState == "V" ||
			 gameState == "W" ||
			 gameState == "d" ||
			 gameState == "g" ||
			 gameState == "h" ||
			 gameState == "i")
	{
		console.log("YOU LOSE!");
		alert("YOU LOSE!");
		return true;
	}
	return false;
}

function aiDraw(sprout1, sprout2, bestChoice)
{
	// LINE STRAIGHT THROUGH MIDDLE OF LOOP
	if (bestChoice == "F")
	{
		sprout1.connections += 1;
		sprout2.connections += 1;

		// create new line
		context.beginPath();
		context.moveTo(sprout2.xPos, sprout2.yPos);		
		context.lineTo(sprout1.xPos, sprout1.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout2.xPos, sprout2.yPos+80);

		newSprout.connections += 2;
		sprouts.push(newSprout);

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

		gameState = "F";
	}

	// LINE AROUND LOOP
	if (bestChoice == "V")
	{
		sprout1.connections += 1;
		sprout2.connections += 1;

		// create new line
		context.beginPath();
		context.moveTo(sprout2.xPos, sprout2.yPos);		
		context.quadraticCurveTo(sprout2.xPos+480, sprout2.yPos+80, sprout1.xPos, sprout1.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout2.xPos+240, sprout2.yPos+80);

		newSprout.connections += 2;
		sprouts.push(newSprout);

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

		gameState = "V";
		winCheck(gameState);
	}

	// LINE AROUND TOP TO BOTTOM
	if (bestChoice == "I")
	{
		sprout1.connections += 1;
		sprout2.connections += 1;

		// create new line
		context.beginPath();
		context.moveTo(sprout1.xPos, sprout1.yPos);		
		context.quadraticCurveTo(sprout2.xPos+560, sprout1.yPos+125, sprout2.xPos, sprout2.yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprout1.xPos+280, sprout1.yPos+125);

		newSprout.connections += 2;
		sprouts.push(newSprout);

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

		gameState = "I";
	}

	// LINE AROUND TOP TO BOTTOM
	if (bestChoice == "g")
	{
		if (sprout1 == sprouts[0] && sprout2 == sprouts[2])
		{
			sprouts[1].connections += 1;
			sprouts[3].connections += 1;

			// create new line
			context.beginPath();
			context.moveTo(sprouts[1].xPos, sprouts[1].yPos);		
			context.quadraticCurveTo(sprouts[1].xPos+100, sprouts[1].yPos-100, sprouts[3].xPos, sprouts[3].yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprouts[1].xPos+140, sprouts[1].yPos-90);
		}

		else if (sprout1 == sprouts[0] && sprout2 == sprouts[3])
		{
			sprouts[1].connections += 1;
			sprouts[2].connections += 1;

			// create new line
			context.beginPath();
			context.moveTo(sprouts[1].xPos, sprouts[1].yPos);		
			context.quadraticCurveTo(sprouts[1].xPos+200, sprouts[1].yPos-120, sprouts[2].xPos, sprouts[2].yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprouts[1].xPos+100, sprouts[1].yPos-100);
		}

		else if (sprout1 == sprouts[1] && sprout2 == sprouts[2])
		{
			sprouts[0].connections += 1;
			sprouts[3].connections += 1;

			// create new line
			context.beginPath();
			context.moveTo(sprouts[0].xPos, sprouts[0].yPos);		
			context.quadraticCurveTo(sprouts[0].xPos+100, sprouts[0].yPos+100, sprouts[3].xPos, sprouts[3].yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprouts[0].xPos+140, sprouts[0].yPos+90);
		}

		else if (sprout1 == sprouts[1] && sprout2 == sprouts[3])
		{
			sprouts[0].connections += 1;
			sprouts[2].connections += 1;

			// create new line
			context.beginPath();
			context.moveTo(sprouts[0].xPos, sprouts[0].yPos);		
			context.quadraticCurveTo(sprouts[0].xPos+200, sprouts[0].yPos+120, sprouts[2].xPos, sprouts[2].yPos);
			context.stroke();

			// create new sprout
			var newSprout = new Sprout(sprouts[0].xPos+100, sprouts[0].yPos+100);
		}

		newSprout.connections += 2;
		sprouts.push(newSprout);

		if (sprouts[1].connections >= 3)
		{	
			sprouts[1].die();
		}
		else sprouts[1].deactivate();

		if (sprouts[2].connections >= 3)
		{
			sprouts[2].die();
		}
		else sprouts[2].deactivate();

		if (sprouts[3].connections >= 3)
		{	
			sprouts[3].die();
		}
		else sprouts[3].deactivate();

		if (sprouts[0].connections >= 3)
		{	
			sprouts[0].die();
		}
		else sprouts[0].deactivate();

		gameState = "g";
		winCheck(gameState);
	}

	// INSIDE LINE 
	if (bestChoice == "h")
	{
		sprouts[1].connections += 1;
		sprouts[4].connections += 1;

		// create new line
		context.beginPath();
		context.moveTo(sprouts[1].xPos, sprouts[1].yPos);		
		context.lineTo(sprouts[4].xPos, sprouts[4].yPos);
		context.stroke();

		// create new sprout
		var newSprout = new Sprout(sprouts[1].xPos+80, sprouts[1].yPos-70);

		newSprout.connections += 2;
		sprouts.push(newSprout);

		if (sprouts[1].connections >= 3)
		{	
			sprouts[1].die();
		}

		else sprouts[1].deactivate();

		if (sprouts[4].connections >= 3)
		{
			sprouts[4].die();
		}

		else sprouts[4].deactivate();

		gameState = "h";
		winCheck(gameState);
	}
}