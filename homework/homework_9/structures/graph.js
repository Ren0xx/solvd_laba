class Graph {
	constructor() {
		// Map storing adjacency list: vertex -> array of { node, weight }
		this.adjacencyList = new Map();
	}

	addVertex(vertex) {
		// Add a new vertex with neighbors array
		if (this.adjacencyList.has(vertex))
			throw new Error("Vertex already exists");
		this.adjacencyList.set(vertex, []);
	}

	addEdge(from, to, weight = 1) {
		// Add edge in both directions (undirected graph)
		const fromList = this.adjacencyList.get(from);
		const toList = this.adjacencyList.get(to);
		if (!fromList || !toList) throw new Error("Vertex does not exist");

		fromList.push({ node: to, weight });
		toList.push({ node: from, weight });
	}

	bfs(start, end) {
		// Breadth-first search: returns true if end is reachable from start
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end))
			throw new Error("`From` or `End` vertex does not exist");

		const queue = [start];
		const visited = new Set();

		while (queue.length > 0) {
			const current = queue.shift();
			if (current === end) return true;
			if (!visited.has(current)) {
				visited.add(current);
				const neighbors = this.adjacencyList.get(current) ?? [];
				for (const n of neighbors) {
					if (!visited.has(n.node)) queue.push(n.node);
				}
			}
		}
		return false;
	}

	dfs(start, end) {
		// Depth-first search: returns true if end is reachable from start
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end))
			throw new Error("`From` or `End` vertex does not exist");

		const stack = [start];
		const visited = new Set();

		while (stack.length > 0) {
			const current = stack.pop();
			if (current === end) return true;
			if (!visited.has(current)) {
				visited.add(current);
				const neighbors = this.adjacencyList.get(current) ?? [];
				for (const n of neighbors) {
					if (!visited.has(n.node)) stack.push(n.node);
				}
			}
		}
		return false;
	}

	dijkstra(start, end) {
		// Dijkstra's algorithm to find shortest path between start and end vertices
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end))
			throw new Error("`From` or `End` vertex does not exist");

		const vertices = this.adjacencyList.keys();
		const distances = new Map();
		const previous = new Map();
		const queue = [];

		// Initialize distances and previous maps
		for (const vertex of vertices) {
			distances.set(vertex, vertex === start ? 0 : Infinity);
			previous.set(vertex, null);
			queue.push(vertex);
		}

		while (queue.length > 0) {
			// Sort queue by smallest distance to start
			queue.sort((a, b) => distances.get(a) - distances.get(b));
			const current = queue.shift();

			// If reached the end vertex, stop
			if (current === end) break;

			const neighbors = this.adjacencyList.get(current) ?? [];
			for (const n of neighbors) {
				const newDistance = distances.get(current) + n.weight;
				if (newDistance < distances.get(n.node)) {
					distances.set(n.node, newDistance);
					previous.set(n.node, current);
				}
			}
		}

		// Recreate shortest path from end to start using previous map
		const path = [];
		let current = end;
		while (current) {
			path.unshift(current);
			current = previous.get(current);
		}
		return path;
	}
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 1);
graph.addEdge("B", "C", 2);
graph.addEdge("A", "C", 4);

console.log(graph.bfs("A", "C")); // true
console.log(graph.dfs("A", "C")); // true

module.exports = Graph;

