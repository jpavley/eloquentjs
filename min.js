// min.js
// returns the lesser of two numbers

function min(x,y) {
    return x > y ? y:x;
}

function max(x,y) {
    return x > y ? x:y;
}

let x = 456;
let y = 654;

for (let i = 0; i < 10; i++) {
    for (let j = 10; j > 0; j--) {
        console.log(`${min(i,j)} is less than ${max(i,j)}`);
    }
}
