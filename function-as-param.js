// function-as-param

function greaterThan(n) {
    // the param n is "captured" buy the closure such that when invoked (apply?)
    // a function is returned with n "hard coded" to the value passed in when the
    // parent function was invoked.
    return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(100));
console.log(greaterThan10(5));

