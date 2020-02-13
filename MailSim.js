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
//console.log(roadGraph);

/**
 * A VillageState has a `place` (where the robot currently is) and
 * a list of `parcels` that need to be delivered.
 */
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
            //console.log("parcels remaining", parcels, "count", parcels.length);
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

//console.log(`first ${first.place} ${first.parcels.length}`);
//console.log(`next ${next.place} ${next.parcels.length}`);
//console.log(`first ${first.place} ${first.parcels.length}`);

/**
 * Moves a robot until all parcels are delivered and updates state and 
 * memory params with a new `state` and `memory`.
 * @param VillageState state 
 * @param function robot 
 * @param Array memory
 */
function runRobot(state, robot, memory) {
    let turnCount = 0;
    for (let turn = 0; ; turn += 1) {
        if (state.parcels.length == 0) {
            //console.log(`Done in ${turn} turns`);
            turnCount = turn;
            break;
        } else {
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
            //console.log(`Moved to ${action.direction}`);
        }
    }
    return turnCount;
}

/**
 * @returns a random element of the `array`
 * @param Array array
 */
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

/**
 * A robot is a function that takes a VillageState and
 * returns the name of the place it wants to go to.
 * @param VillageState state
 * @returns updated robot (with no memory)
 */
function randomRobot(state) {
    let robot = {direction: randomPick(roadGraph[state.place])};
    return robot;
}

console.log(`possible places: ${roadGraph[first.place]}`);
console.log(`randomRobot(first): ${randomRobot(first).direction}`);
console.log(`possible places: ${roadGraph[next.place]}`);
console.log(`randomRobot(next): ${randomRobot(next).direction}`);

/**
 * Random method (added directly to constructor).
 * Randomly locates parcels around the `roadGraph`.
 * 
 * @returns A new `VillageState` with randomly assigned
 * `place` and `parcels`.
 */
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i += 1) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address); // parcels addressed to the place where they are located
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

console.log(VillageState.random());

//runRobot(VillageState.random(), randomRobot);

const mailRoute = [    
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
]; 

/**
 * If we find a route that passes all places in the village, the robot 
 * could run that route twice, at which point it is guaranteed 
 * to be done. The robot keeps the rest of its route in its memory and 
 * drops the first element every turn.
 * @returns updated robot with memory (updated route list)
 * @param VillageState state 
 * @param Array memory (a route list)
 */
function routeRobot(state, memory) {   
    if (memory.length == 0) {     
        memory = mailRoute;   
    }   
    return {direction: memory[0], memory: memory.slice(1)}; 
}

//runRobot(VillageState.random(), routeRobot, mailRoute);

/**
 * Look for the shortest route by growing routes from the 
 * starting point and finding every reachable place that has
 * not been visited yet.
 * @param {Object} graph 
 * @param {String} from 
 * @param {String} to
 * @returns {Array} route
 */
function findRoute(graph, from, to) {
    // work list: place to explore next
    // starts with start position and empty route
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i += 1) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) {
                // place is destination add it to the route 
                // and return
                return route.concat(place);
            }
            if (!work.some(w => w.at == place)) {
                // place is not destination so add it to the 
                // work list
                work.push({at: place, route: route.concat(place)});
            }

        }
    }
}

/**
 * 
 * @param VillageState state 
 * @param Array memory (a route list) 
 */
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        // take first undelivered parcel
        let parcel = parcels[0];
        if (parcel.place != place) {
            // if not picked up yet, plot route to pick it up
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            // if has been picked up, plot route to deliver it
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

//runRobot(VillageState.random(), goalOrientedRobot, mailRoute);

function compareRobots(nameA, robotA, nameB,robotB) {

    let robotAResults = 0;
    let robotBResults = 0;

    for (let i = 0; i < 100; i += 1) {
        // give the robots the same starting state and memory
        let state = VillageState.random();
        let stateA = state;
        let stateB = state;
        let memoryA = mailRoute;
        let memoryB = mailRoute;

        robotAResults += runRobot(stateA, robotA, memoryA);
        robotBResults += runRobot(stateB, robotB, memoryB);
    }

    console.log(`${nameA} ${robotAResults/100}`);
    console.log(`${nameB} ${robotBResults/100}`);
}

compareRobots("routeRobot", routeRobot, "randomRobot", randomRobot);
compareRobots("routeRobot", routeRobot, "goalOrientedRobot", goalOrientedRobot);
