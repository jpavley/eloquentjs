// unicode.js

let langInfo = require('./unicode-scripts.js');
console.log(langInfo[0], langInfo.length);

function filter(array, test) {
    let result = [];
    for (let element of array) {
        if (test(element)) {
            result.push(element);
        }
    }
    return result;
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
    s => s.direction !== 'rtl' && s.direction !== 'ltr')
);








