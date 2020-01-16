// closure

function multiplier(factor) {
    return n => n * factor;
}

let twice = multiplier(2);
let thrice = multiplier(3);

console.log(twice(10));
console.log(thrice(10));
