// recursion

function power(base, exponent) {
    if (exponent == 0) {
        console.log("exponent == 0");
        return 1;
    } else {
        console.log("base:", base, "exponent - 1", exponent - 1);
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,3));
console.log(power(2,4));

