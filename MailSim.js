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
        if (graph[from] == null) {
            // if the property `graph[from]` doesn't exist yet, create it!
            graph[from] = [to];
        } else {
            // if the property `graph[from]` exists, add the `to` to it!
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

class VillageState {

    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        // is there a road from here (the current `place`) to there (the `destination`)?
        if (!roadGraph[this.place].includes(destination)) {
            return this; // return original state, no change!
        } else {
            // create a list of parcels with their addresses while filtering parcels delivered
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    return p; // no parcels to deliver
                } else {
                    return {place: destination, address: p.address}; // copy over the remaining parcels
                }
            }).filter(p => p.place != p.address); // filter out the `parcels` that have been delivered to this `place`
            // create a new `VillageState` with the `destination` as the current `place`
            return new VillageState(destination, parcels);
        }
    }
}