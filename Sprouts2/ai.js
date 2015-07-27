function aiMove()
{
	if(!winCheck(gameState))
	{
		console.log(currentPlayer);

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

		currentPlayer = player1;
	}
	else
		console.log("GAME OVER");

	winCheck(gameState);
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