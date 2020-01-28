let langInfo = require('./unicode-scripts.js');

// code: a character code
// returns: the name of the language of which this char code is 
// a member or null if no lang is found
function characterLanguage(code) {
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
console.log(characterLanguage(121).name);

// should return Han
console.log(characterLanguage(11904).name);

let freezingMindBlown = "🥶🤯";
console.log(freezingMindBlown);

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
        let name = groupName(item);
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

