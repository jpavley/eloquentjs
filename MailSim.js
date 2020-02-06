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
        this.place = place; // used a key in roadGraph
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

let first = new VillageState(
    "Post Office", // place
    [{place: "Post Office", address: "Alice's House"}] // parcels
);

let next = first.move( "Alice's House");

console.log(`first ${first.place} ${first.parcels.length}`);
console.log(`next ${next.place} ${next.parcels.length}`);
console.log(`first ${first.place} ${first.parcels.length}`);

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn += 1) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        } else {
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
            console.log(`Moved to ${action.direction}`);
        }
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// A robot is a function that takes a VillageState and
// returns the name of the place it wants to go to.

/**
 * 
 * @param VillageState state
 * @returns place String
 */
function randomRobot(state) {
    let robot = {direction: randomPick(roadGraph[state.place])};
    return robot;
}

console.log(`possible places: ${roadGraph[first.place]}`);
console.log(`randomRobot(first): ${randomRobot(first).direction}`);
console.log(`possible places: ${roadGraph[next.place]}`);
console.log(`randomRobot(next): ${randomRobot(next).direction}`);
