/**
 * objects-classes.js
 * Chapter 6, Eloquent JavaScript
 */

let rabbit = {};
rabbit.speak = function(words) {
    console.log(`Rabbit says ${words}`);
}

rabbit.speak("me object!");

function speak(words) {
    console.log(`The ${this.type} rabbit says "${words}"`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("hello");
hungryRabbit.speak("goodbye");

speak.call(hungryRabbit, "well, well");

let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf(empty) == Object.prototype);

let protoRabbit = {
    speak(words) {
        console.log(`The ${this.type} rabbit says "${words}"`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("I am misunderstood");

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(words) {
        console.log(`The ${this.type} rabbit says "${words}"`);
    }

    toString() {
        return `I am a rabbit of type: ${this.type}`;
    }
}

let blueRabbit = new Rabbit("blue");
let botRabbit = new Rabbit("bot");
console.log(String(botRabbit));

blueRabbit.speak("I am blue!");
botRabbit.speak("Compute not I");

let ages = {
    Ziggy: 11,
    Punky: 14,
    Angel: 10,
    Mazie: 8
};

console.log(ages);
console.log(ages.Ziggy);
console.log(ages.toString); // This is VERY bad!
console.log(Object.keys(ages));

let ages2 = new Map();
ages2.set("Ziggy", 11);
ages2.set("Punky", 14);

console.log(ages2);
console.log(ages2.get("Punky"));
console.log(ages2.has("Punky"));

let symbol1 = Symbol("name");
Rabbit.prototype[symbol1] = "Larry";
console.log(botRabbit[symbol1]);

const armCount = Symbol["arm count"];
let robot = {
    [armCount]() {
        return 4;
    }
};

console.log("arm count",robot[armCount]());

let catIterator = "cat"[Symbol.iterator]();
console.log(catIterator.next());
console.log(catIterator.next());
console.log(catIterator.next());
console.log(catIterator.next());
