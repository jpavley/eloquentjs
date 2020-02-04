/**
 * Group Class
 */
class Group {
    constructor() {
        this.store = [];
    }

    add(n) {
        let found = this.store.indexOf(n);
        if (found === -1) {
            this.store.push(n);
            return true;
        } else {
            return false;
        }
    }

    delete(n) {
        let found = this.store.indexOf(n);
        if (found !== -1) {
            this.store = this.store.filter(e => e !== n);
            return true;
        } else {
            return false;
        }
    }

    has(n) {
        let found = this.store.indexOf(n);
        if (found === -1) {
            return false;
        } else {
            return true;
        }
    }

    static from(source) {
        let clone = new Group();
        for (let value of source) {
            clone.add(value);
        }
        return clone;
    }
}

let g1 = new Group();
console.log(g1);
let added = g1.add(123);
console.log(added, g1);
added = g1.add(123);
console.log(added, g1);
let deleted = g1.delete(123);
console.log(deleted, g1);
let g2 = new Group();
g2.add(1);
g2.add(2);
g2.add(3);
g2.delete(2);
g2.delete(4);
console.log("g2", g2);
console.log("g2 has 1", g2.has(1));
console.log("g2 has 2", g2.has(2));
console.log("g2 has 3", g2.has(3));
console.log("g2 has 4", g2.has(4));

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {

        if (this.index === this.group.store.length) {
            return { done: true };
        } else {
            let value = this.group.store[this.index];
            this.index += 1;
            return {value, done: false};
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let g3 = new Group();
g3.add("cat");
g3.add("dog")
g3.add("cow")
g3.add("pig");
console.log(g3);

for (let value of g3) {
    console.log(value);
}

let deepCopy = Group.from(g2);
console.log(deepCopy === g2);
console.log("deepCopy", deepCopy);

