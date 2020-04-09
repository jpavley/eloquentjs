/**
 * Copyright (c) Epic Loot
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const assert = require('assert').strict;

/**
 * Returns a list of Fibonacci numbers length of n
 * @param {Number} count 
 */
function fibMaker(count) {

  // step 1: initialize

  let list = [];
  let result = -1;
  let left = 0;
  let right = 1;

  list.push(left);
  list.push(right);
  
  for (let i = 0; i < count - 2; i++) { // step 2: stop at limit
    // step 3: calculate the next fibonacci number
    result = left + right;
    list.push(result);

    // step 4: setup left and right
    left = right;
    right = result;
  }
  return list;
}

// ----------------
// Test 2: First 12
// ----------------
console.log("== first 12 Fibonacci numbers");

let fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.log("fibSequence", fibSequence);

let fibTest = fibMaker(12);
console.log("figText", fibTest);

assert.deepEqual(fibSequence, fibTest, "fibMaker failed on first 12");

