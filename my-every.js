/**
 * my-every.js
 */

function every1(array, test) {
    let passed = true;

    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            passed = false;
            break;
        }
    }

    return passed;
}

console.log("every1");
console.log(every1([1,2,3,4], n => n < 5));
console.log(every1([1,2,3,4], n => n < 3));
console.log(every1([1,2,3,4], n => n < 4));

function every2(array, test) {
    return array.some(test);
}

console.log("every2");
console.log(every2([1,2,3,4], n => n < 5));
console.log(every2([1,2,3,4], n => n < 3));
console.log(every2([1,2,3,4], n => n < 4));

