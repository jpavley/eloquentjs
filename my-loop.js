/**
 * my-loop.js
 * 
 * high order function loop
 */

/**
 * Looper
 * @param Number value 
 * @param Function test 
 * @param Function update 
 * @param Function body 
 */
function looper(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

looper(1, value => {
    // test function
    return value < 10;
}, value => {
    // update function
    return value += 1;
}, value => {
    // body function
    console.log(value);
});

looper("a", value => {
    return value.length < 10;
}, value => {
    return value += "a";
}, value => {
    console.log(value);
});