// unicode.js

let langInfo = require('./unicode-scripts.js');
console.log(`languages: ${langInfo.length}`);

function filter(array, test) {
    let filtered = [];
    for (let element of array) {
        if (test(element)) {
            filtered.push(element);
        }
    }
    return filtered;
}

console.log("living:", filter(langInfo, lang => lang.living).length);
console.log("dead:", filter(langInfo, lang => !lang.living).length);

console.log("right to left:", langInfo.filter(
    s => s.direction === 'rtl').length
);

console.log("left to right:", langInfo.filter(
    s => s.direction === 'ltr').length
);

console.log("other direction:", langInfo.filter(
    s => s.direction !== 'rtl' && s.direction !== 'ltr').length
);

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped
}

console.log("lang names:", map(langInfo, lang => lang.name).length);

console.log("Right to Left Lang Names:", langInfo.filter(
    lang => lang.direction === 'rtl'
).map(
    lang => lang.name
).length);

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
        console.log("current", current, "element", element);
    }
    return current;
}

console.log("reduce total",reduce([1,20,3,40], (a,b) => a + b, 0));








