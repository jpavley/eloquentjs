// isEven.js

function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n-2);
    }
}

// tests

console.log("=== isEven()Tests ===");
for (let i = 0; i < 10; i++) {
    console.log(`${i} is ${isEven(i) ? "even":"odd"}`);
}
