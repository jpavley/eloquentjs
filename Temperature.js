/**
 * Temperature Class
 */

class Temperature {

    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    get pie() {
        return this.celsius * Math.PI;
    }

    set pie(value) {
        this.celsius = (value / Math.PI);
    }


    get kelvin() {
        return this.celsius + 217.15;
    }

    set kelvin(value) {
        this.celsius = value - 217.15;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(`${temp.celsius}°c, ${temp.fahrenheit}°f, ${temp.kelvin}°k, ${temp.pie}°π`);

temp.fahrenheit = 86;
console.log(`${temp.celsius}°c, ${temp.fahrenheit}°f, ${temp.kelvin}°k, ${temp.pie}°π`);

let temp2 = Temperature.fromFahrenheit(32);
console.log(`${temp2.celsius}°c, ${temp2.fahrenheit}°f, ${temp2.kelvin}°k, ${temp2.pie}°π`);

console.log(temp2);

