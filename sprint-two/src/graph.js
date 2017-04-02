// Instantiate a new graph
var Graph = function() {
	this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var item in this.list) {
		if (parseInt(item) === node) return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var item in this.list) {
		console.log('iteit',item);
		var currentNode = this.list[item];
		if (currentNode !== undefined && currentNode.indexOf(node) !== -1) {
			currentNode.splice(currentNode.indexOf(node), 1);
		}
	}
	delete this.list[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var list = this.list[fromNode];
	if (list && list.length === 0) return false;
	else {
		for (var item of list) {
			if (item === toNode) return true;
		}
		return false;
	}
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.list[fromNode].push(toNode);
	this.list[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.list[fromNode].splice(this.list[fromNode].indexOf(toNode), 1);
	this.list[toNode].splice(this.list[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var item in this.list) { cb(item);}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */