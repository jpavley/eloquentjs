/**
 * NumberFormat.js
 */

 // Special case Negative 1 in 2's Compliment

let d = "-1".padStart(2,"0");
let h = "FF".padStart(2,"0");
let b = "11111111".padStart(8,"0");

console.log(`dec ${d} hex 0x${h} bin 0b${b}`);

// from -1 to 31

for (let i = 0; i < 32; i += 1) {

  let d = i.toString().padStart(2,"0").toUpperCase();
  let h = i.toString(16).padStart(2,"0").toUpperCase();
  let b = i.toString(2).padStart(8,"0").toUpperCase();

  console.log(`dec ${d} hex 0x${h} bin 0b${b}`);
}

// characters A thru Z

console.log("| char | dec | hex | bin |");
console.log("|-----:|----:|----:|----:|");

for (let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c += 1) {

  let l = String.fromCharCode(c);
  let d = c.toString().padStart(2,"0").toUpperCase();
  let h = c.toString(16).padStart(2,"0").toUpperCase();
  let b = c.toString(2).padStart(8,"0").toUpperCase();

  console.log(`| ${l} | ${d} | 0x${h} | 0b${b} |`);

}