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
			// if click is within the radius of node[i]
			if ((e.clientX <= (nodes[i].xPos+8)) && (e.clientX >= (nodes[i].xPos-8)) && (e.clientY <= (nodes[i].yPos+8)) && (e.clientY >= (nodes[i].yPos-8)))
			{
				drawing = true;

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
			// if click is within the radius of node[i]
			if ((e.clientX <= (nodes[i].xPos+8)) && (e.clientX >= (nodes[i].xPos-8)) && (e.clientY <= (nodes[i].yPos+8)) && (e.clientY >= (nodes[i].yPos-8)))
			{
				curving = true;

				nodes[i].activate();
				node2 = nodes[i];

				console.log("CURVING");
			}
		}
	}

	// draw new node and line
	else if (drawing && curving)
	{
		drawing = false;
		curving = false;

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
		nodes.push(newNode);

		console.log(node1.xPos, node1.yPos, newNode.xPos, newNode.yPos, node2.xPos, node2.yPos);

		node1.deactivate();
		node2.deactivate();

		console.log("DONE");
	}
}

canvas.addEventListener("mousedown", click);