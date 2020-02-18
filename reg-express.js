/**
 * Regular Expressions
 */

"use strict";
const print = console.log;

let rel1 = new RegExp("abc");
let rel2 = /abc/;
let rel3 = /eighteen\+/;

print(/abc/.test("abcde"));
print(/abc/.test("abxde"));
print(/abc/.test("a"));
print(/abc/.test("xxabcxx"));

print("[0123456789]", /[0123456789]/.test("the year is 2020"));
print("[0-9]", /[0-9]/.test("the year is 2020"));
print("\\d", /\d/.test("the year is 2020"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
print(dateTime);

print("01-30-2003 15:20", dateTime.test("01-30-2003 15:20"));
print("01-jan-2003 15:20", dateTime.test("01-jan-2003 15:20"));

let phoneNumber = /\(\d\d\d\) \d\d\d-\d\d\d\d/;
print(phoneNumber);
print("(808) 123-5679", phoneNumber.test("(808) 123-5679"));
print("(808) 123-579", phoneNumber.test("(808) 123-579"));

let notBinary = /[^01]/;
print("11001100101010101",notBinary.test("11001100101010101"));
print("11001100121010101",notBinary.test("11001100121010101"));
