function initialize()
{
	var initialSprouts = 2;

	// draw initial sprouts
	for (var i = 0; i < initialSprouts; i++)
	{
		var sprout = new Sprout(window.innerWidth/2, 250*(i+1));
		sprouts.push(sprout);
	}
}

var gameTree = [
{
	name: "A", rank: 0, children: [
	{
		name: "B", rank: 0, children: [
		{
			name: "D", rank: 0, children: [
			{
				name: "J", rank: 0, children: [
				{
					name: "S", rank: 0, children: [
					{
						name: "j", rank: 1
					}]
				},
				{
					name: "T", rank: 0, children: [
					{
						name: "k", rank: 1
					}]
				}]
			},
			{
				name: "K", rank: 0, children: [
				{
					name: "T", rank: 0, children: [
					{
						name: "k", rank: 1
					}]
				},
				{
					name: "U", rank: 0, children: [
					{
						name: "l", rank: 1
					}]
				},
				{
					name: "V", rank: -1
				}]
			}]
		},
		{
			name: "E", children: [
			{
				name: "K", rank: 0, children: [
				{
					name: "T", rank: 0, children: [
					{
						name: "k", rank: 1
					}]
				},
				{
					name: "U", rank: 0, children: [
					{
						name: "l", rank: 1
					}]
				},
				{
					name: "V", rank: -1
				}]
			},
			{
				name: "L", rank: 0, children: [
				{
					name: "V", rank: -1
				},
				{
					name: "W", rank: -1
				}]
			},
			{
				name: "M", rank: 0, children: [
				{
					name: "X", rank: 0, children: [
					{
						name: "m", rank: 1
					}]
				},
				{
					name: "Y", rank: 0, children: [
					{
						name: "n", rank: 1
					}]
				}]
			}]
		},
		{
			name: "F", rank: 0, children: [
			{
				name: "L", rank: 0, children: [
				{
					name: "V", rank: -1
				},
				{
					name: "W", rank: -1
				}]
			}]
		},
		{
			name: "G", rank: 0, children: [
			{
				name: "M", rank: 0, children: [
				{
					name: "X", rank: 0, children: [
					{
						name: "m", rank: 1
					}]
				},
				{
					name: "Y", rank: 0, children: [
					{
						name: "n", rank: 1
					}]
				}]
			},
			{
				name: "N", rank: 0, children: [
				{
					name: "Y", rank: 0, children: [
					{
						name: "n", rank: 1
					}]
				},
				{
					name: "Z", rank: 0, children: [
					{
						name: "o", rank: 1
					}]
				}]
			},
			{
				name: "O", rank: 0, children: [
				{
					name: "a", rank: 0, children: [
					{
						name: "p", rank: 1
					}]
				},
				{
					name: "b", rank: 0, children: [
					{
						name: "q", rank: 1
					}]
				}]
			},
			{
				name: "P", rank: 0, children: [
				{
					name: "b", rank: 0, children: [
					{
						name: "q", rank: 1
					}]
				},
				{
					name: "c", rank: 0, children: [
					{
						name: "r", rank: 1
					}]
				},
				{
					name: "d", rank: -1
				}]
			}]
		}]
	},
	{
		name: "C", rank: 0, children: [
		{
			name: "G", rank: 0, children: [
			{
				name: "M", rank: 0, children: [
				{
					name: "X", rank: 0, children: [
					{
						name: "m", rank: 1
					}]
				},
				{
					name: "Y", rank: 0, children: [
					{
						name: "n", rank: 1
					}]
				}]
			},
			{
				name: "N", rank: 0, children: [
				{
					name: "Y", rank: 0, children: [
					{
						name: "n", rank: 1
					}]
				},
				{
					name: "Z", rank: 0, children: [
					{
						name: "o", rank: 1
					}]
				}]
			},
			{
				name: "O", rank: 0, children: [
				{
					name: "a", rank: 0, children: [
					{
						name: "p", rank: 1
					}]
				},
				{
					name: "b", rank: 0, children: [
					{
						name: "q", rank: 1
					}]
				}]
			},
			{
				name: "P", rank: 0, children: [
				{
					name: "b", rank: 0, children: [
					{
						name: "q", rank: 1
					}]
				},
				{
					name: "c", rank: 0, children: [
					{
						name: "r", rank: 1
					}]
				},
				{
					name: "d", rank: -1
				}]
			}]
		},
		{
			name: "H", rank: 0, children: [
			{
				name: "P", rank: 0, children: [
				{
					name: "b", rank: 0, children: [
					{
						name: "q", rank: 1
					}]
				},
				{
					name: "c", rank: 0, children: [
					{
						name: "r", rank: 1
					}]
				},
				{
					name: "d", rank: -1
				}]
			},
			{
				name: "Q", rank: 0, children: [
				{
					name: "e", rank: 0, children: [
					{
						name: "s", rank: 1
					}]
				},
				{
					name: "f", rank: 0, children: [
					{
						name: "t", rank: 1
					}]
				},
				{
					name: "g", rank: -1
				}]
			}]
		},
		{
			name: "I", rank: 0, children: [
			{
				name: "Q", rank: 0, children: [
				{
					name: "e", rank: 0, children: [
					{
						name: "s", rank: 1
					}]
				},
				{
					name: "f", rank: 0, children: [
					{
						name: "t", rank: 1
					}]
				},
				{
					name: "g", rank: -1
				}]
			},
			{
				name: "R", rank: 0, children: [
				{
					name: "h", rank: -1
				},
				{
					name: "i", rank: -1
				}]
			}]
		}]
	}]
}];

var element = gameTree[0];

function searchTree(element, nodeName)
{
	if (element.name == nodeName)
		return element;
	else if (element.children != null)
	{
		var result = null;
		for (var i = 0; result == null && i < element.children.length; i++)
		{
			result = searchTree(element.children[i], nodeName);
		}
		return result;
	}
	return null;
}