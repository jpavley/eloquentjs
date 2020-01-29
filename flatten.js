/**
 * flatten.js
 */

function flatten(o) {

    let result = [];

    o.forEach(e => {
        if (Array.isArray(e)) {
            result.push(...flatten(e));
        } else {
            result.push(e);
        }
    });

    return result;
}

console.log(flatten([[1,2,3],4,5,[6,7,8]]));
console.log(flatten([[1,2,3],[4],5,[6,[7,8]]]));
console.log(flatten([[1,[2,3]],[4],5,[6,[[7],8]]]));