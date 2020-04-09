/**
 * Simple Module
 */
const weekDay = function() {

    // private
    const names = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    return {
        // public
        name(number) { 
            return names[number]; 
        },
        number(name) { 
            return names.indexOf(name); 
        }
    };
}();

console.log(weekDay);
console.log(weekDay.name(3));
console.log(weekDay.number("Wednesday"));

// Function Constructor

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(100));