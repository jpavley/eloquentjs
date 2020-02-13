/**
 * A Group class with no side-effects.
 */
class PGroup {
    constructor() {
        this.store = [];
    }

    add(n) {
        let g = PGroup.from(this);
        let found = g.store.indexOf(n);
        if (found === -1) {
            g.store.push(n);
            return g;
        } else {
            return null;
        }
    }

    delete(n) {
        let g = PGroup.from(this);
        let found = g.store.indexOf(n);
        if (found !== -1) {
            g.store = g.store.filter(e => e !== n);
            return g;
        } else {
            return null;
        }
    }


    static from(source) {
        let clone = new PGroup();
        for (let i = 0; i < source.store.length; i += 1) {
            clone.store.push(source.store[i]);
        }
        return clone;
    }

}

let pg1 = new PGroup();
console.log("pg1", pg1);
console.log("---");

let pg2 = pg1.add("cat");
console.log("pg1", pg1);
console.log("pg2", pg2);
console.log("---");


let pg3 = pg2.add("dog");
console.log("pg1", pg1);
console.log("pg2", pg2);
console.log("pg3", pg3);
console.log("---");

let pg4 = pg3.delete("cat");
console.log("pg1", pg1);
console.log("pg2", pg2);
console.log("pg3", pg3);
console.log("pg4", pg4);
console.log("---");




