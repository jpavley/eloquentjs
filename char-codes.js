let langInfo = require('./unicode-scripts.js');

// code: a character code
// returns: the name of the language of which this char code is 
// a member or null if no lang is found
function characterScript(code) {
    for (let lang of langInfo) {
        if (lang.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            // this looks like and else but it's not!
            return lang;
        }
    }
    return null;
}

// should return Latin
console.log(characterScript(121).name);

// should return Han
console.log(characterScript(11904).name);

let freezingMindBlown = "🥶🤯";
for (let char of freezingMindBlown) {
    console.log(char);
}

// items: a collection (for/of)
// groupName: function that computes group name for an element
// returns: an array of objects, each object includes a group
// name and the number of elements found in that group
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item); // is item in group?
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));
console.log(countBy(["a", "b", "c"], c => c != "a" ? "not a" : "a"));
console.log(countBy([0,1,2,3,4,5,6,7,8,9], n => n % 2 === 0 ? "even" : "odd"));
console.log(countBy([1,2,1,2,1,2], n => n * n));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    // compute total number of chars that belong to a script
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

let ViacomCBS = ["CBS", "Nickelodeon", "Showtime", "Comedy Central", "MTV"];
let ViacomCBSTech = ViacomCBS.map(brand => `${brand} tech`);
console.log(ViacomCBSTech);