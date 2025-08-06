const Graph = require("../structures/graph");

/**
 * Using Dijkstra's algorithm to find shortest route to travel by
 * and
 * BFS for checking if is possible to travel from given city to another city
 */
const graph = new Graph();

graph.addVertex("New York");
graph.addVertex("Chicago");
graph.addVertex("Los Angeles");
graph.addVertex("Houston");
graph.addVertex("Denver");

graph.addEdge("New York", "Chicago", 790); // in miles
graph.addEdge("Chicago", "Denver", 1000);
graph.addEdge("Denver", "Los Angeles", 1015);
graph.addEdge("Houston", "Denver", 880);
graph.addEdge("Houston", "Los Angeles", 1540);
graph.addEdge("New York", "Houston", 1627);

console.log("Dijkstra and BFS:");
// Shortest path from New York to Los Angeles
const shortestPath = graph.dijkstra("New York", "Los Angeles");
console.log(shortestPath); // np. ['New York', 'Chicago', 'Denver', 'Los Angeles']

// Is there are a path from Houston to Chicago (BFS)
console.log(graph.bfs("Houston", "Chicago")); // true

