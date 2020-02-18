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

print("\\d+", /\d+/.test("123"));
print("\\d+", /\d+/.test(""));
print("\\d*", /\d*/.test("123"));
print("\\d*", /\d*/.test(""));

let rel4 = /neighbou?r/;
print("neighbour", rel4.test("neighbour"));
print("neighbor", rel4.test("neighbor"));

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
print(dateTime2.test("1-30-2003 8:45"));
print(dateTime2.test("01-30-2003 08:45"));
print(dateTime2.test("01-1-2003 08:45"));
print(dateTime2.test("01-1-03 08:45"));

let cartoonCrying = /boo+(hoo+)+/i;
print("booooooHoooooHOOOOOhoo", cartoonCrying.test("booooooHoooooHOOOOOhoo"));





