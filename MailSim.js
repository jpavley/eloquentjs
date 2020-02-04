/**
 * MailSim.js
 */

// Array of edges that describe roads leading from one building
// to another building in the same town. Building names are
// separated by hyphens.
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

// Test edges
const points = [
    "1-", "1-5", "1-7", "1-9",
    "0-2", "0-4", "0-6", "0-8",
    "2-9", "4-7", "6-5"
];

function buildGraph(edges) {

    //let graph = Object.create(null);
    let graph = {};

    /**
     * Adds edges (String params) to the `graph` property.
     * If the `from` param is null, sets it to the value of the 
     * `to` param.
     * @param String from 
     * @param String to 
     */
    function addEdge(from, to) {
        // ????: How does this condition ever happen?
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    // Split each string in the edges array by the hyphen into a
    // from (left) part and a to (right) part. 
    // Create an edge for each from part to each to part and 
    // for each to part to each from part (bi-directional graph).
    for (let [from, to] of edges.map( r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

const testGraph = buildGraph(points);
console.log(testGraph);