// function-as-param

function greaterThan(n) {
    return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(100));
console.log(greaterThan10(5));

