// Arrow Function

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2,10));

const square = base => base * base;

console.log(square(101));

