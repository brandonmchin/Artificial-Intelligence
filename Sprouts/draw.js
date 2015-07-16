var drawing = false;
var curving = false;

var node1, node2;

function click(e)
{
	console.log("CLICK");

	// select first node
	if (!drawing && !curving)
	{
		// check to see if player clicked on a node
		for (var i = 0; i < nodes.length; i++)
		{
			// if click is within the radius of nodes[i] and if nodes[i] doesn't have more than 3 connections
			if ((e.clientX <= (nodes[i].xPos+(radius/2))) && 
				(e.clientX >= (nodes[i].xPos-(radius/2))) && 
				(e.clientY <= (nodes[i].yPos+(radius/2))) && 
				(e.clientY >= (nodes[i].yPos-(radius/2))) &&
				(nodes[i].connections < 3))
			{
				drawing = true;

				nodes[i].connections += 1;
				nodes[i].activate();
				node1 = nodes[i];

				console.log("DRAWING");
			}
		}
	}

	// select second node
	else if (drawing && !curving)
	{
		// check to see if player clicked on a node
		for (var i = 0; i < nodes.length; i++)
		{
			// if click is within the radius of nodes[i] and if nodes[i] doesn't have more than 3 connections
			if ((e.clientX <= (nodes[i].xPos+(radius/2))) && 
				(e.clientX >= (nodes[i].xPos-(radius/2))) && 
				(e.clientY <= (nodes[i].yPos+(radius/2))) && 
				(e.clientY >= (nodes[i].yPos-(radius/2))) &&
				(nodes[i].connections < 3))
			{
				curving = true;

				nodes[i].connections += 1;

				if (nodes[i] === node1)
				{
					nodes[i].activateDouble();
				}

				else
				{
					nodes[i].activate();
				}

				node2 = nodes[i];

				console.log("CURVING");
			}
		}
	}

	// draw line and new node
	else if (drawing && curving)
	{
		drawing = false;
		curving = false;

		if (node1 === node2)
		{
			// create new line
			var xCenter = (node1.xPos + e.clientX)/2;
			var yCenter = (node1.yPos + e.clientY)/2;
			var arcRadius = Math.sqrt(Math.pow(node1.xPos-e.clientX, 2)+Math.pow(node1.yPos-e.clientY, 2))/2;
			var angle = Math.atan(node1.yPos/node1.xPos);

			console.log(xCenter, yCenter, "radius", arcRadius, "angle", angle);

			context.beginPath();
			context.arc(xCenter, yCenter, arcRadius, angle, angle+(Math.PI*2));
			context.stroke();

			// create new node
			var newNode = new Node(e.clientX, e.clientY);
		}

		else
		{
			// create new line
			context.beginPath();
			context.moveTo(node1.xPos, node1.yPos);		
			context.quadraticCurveTo(e.clientX, e.clientY, node2.xPos, node2.yPos);
			context.stroke();

			// create new node
			var m = 0.5;																	// midpoint value
			var xPoint = (1-m)*(1-m)*node1.xPos + 2*(1-m)*m*e.clientX + m*m*node2.xPos;		// midpoint of curve
			var yPoint = (1-m)*(1-m)*node1.yPos + 2*(1-m)*m*e.clientY + m*m*node2.yPos;		// midpoint of curve
			var newNode = new Node(xPoint, yPoint);
		}

		newNode.connections = 2;
		nodes.push(newNode);

		//console.log(node1.xPos, node1.yPos, newNode.xPos, newNode.yPos, node2.xPos, node2.yPos);

		node1.deactivate();
		node2.deactivate();

		console.log("DONE");
	}
}

canvas.addEventListener("mousedown", click);