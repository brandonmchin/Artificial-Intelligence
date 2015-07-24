var sprout1, sprout2;

function aiMove()
{
	// search1();
	// search2();

	// context.beginPath();
	// context.moveTo(sprout1.xPos, sprout1.yPos);		
	// context.lineTo(sprout2.xPos, sprout2.yPos);
	// context.stroke();

	// var xPoint = (sprout1.xPos + sprout2.xPos)/2;
	// var yPoint = (sprout1.yPos + sprout2.yPos)/2;
	// var newSprout = new Sprout(xPoint, yPoint);
	// newSprout.connections += 2;
	// sprouts.push(newSprout);

	// if (sprout1.connections >= 3)
	// {	
	// 	sprout1.die();
	// }
	// else sprout1.deactivate();

	// if (sprout2.connections >= 3)
	// {
	// 	sprout2.die();
	// }
	// else sprout2.deactivate();


	currentPlayer = player1;
	console.log(currentPlayer);
}

function search1()
{
	for (var i = 0; i < sprouts.length; i++)
	{
		if (sprouts[i].connections < 3)
		{
			sprouts[i].connections += 1;
			sprout1 = sprouts[i];
		}
	}
}

function search2()
{
	for (var i = 0; i < sprouts.length; i++)
	{
		if (sprouts[i].connections < 3)
		{
			sprouts[i].connections += 1;
			sprout2 = sprouts[i];
		}
	}
}