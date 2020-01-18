// beancounter.js

// returns the count of a char in an input string

function beanCounter(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
}

console.log("=== beanCounter Tests ===");
console.log(`${beanCounter("mississippi", "e")} e's in mississippi`);

console.log(`${beanCounter("mississippi", "m")} m's in mississippi`);
console.log(`${beanCounter("mississippi", "i")} i's in mississippi`);
console.log(`${beanCounter("mississippi", "s")} s's in mississippi`);
console.log(`${beanCounter("mississippi", "p")} p's in mississippi`);
