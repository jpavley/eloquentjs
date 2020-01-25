// repeat.js

function repeat(times, action) {
    for (i = 0; i < times; i += 1) {
        action(i);
    }
}

// test repeat()

repeat(10, console.log);
repeat(5, console.dir);

let labels = [];
repeat(5, (i) => {
    // the variable i is a parameter passed in the anonymous function each
    // time it is invoked by the repeat loop. It is automatically initialized to 0
    console.log(`i: ${i}`);
    labels.push(`Unit ${i+1}`);
});

console.log(labels);
