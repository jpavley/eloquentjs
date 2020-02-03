/**
 * Vector Class
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    get length() {

        if (this.x === 0 && this.y !== 0) {
            return Math.abs(this.y);
        } else if (this.y === 0 && this.x !== 0) {
            return Math.abs(this.x)
        } else if (this.x === 0 && this.y === 0) {
            return 0;
        } else {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        }
    }

}

let v1 = new Vector(1,3);
console.log("v1", v1);
let v2 = new Vector(3,1);
console.log("v2", v2);
let v3 = v1.plus(v2);
console.log("v3", v3);
let v4 = v1.minus(v3);
console.log("v4", v4);
console.log("v1 length", v1.length);
console.log("v2 length", v2.length);
console.log("v3 length", v3.length);
console.log("v4 length", v4.length);
let v5 = new Vector(0,4);
console.log("v5 length", v5.length);


