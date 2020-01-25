// repeat.js

function repeat(times, action) {
    for (i = 0; i < times; i += 1) {
        action(i);
    }
}

// test repeat()

repeat(10, console.log);
repeat(5, console.dir);;
