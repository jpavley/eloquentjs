/**
 * A Matrix of two dimensions
 */
class Matrix {

    constructor(width, height, element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y += 1) {
            for (let x = 0; x < width; x += 1) {
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {

    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {

        // return done if we've at the bottom
        if (this.y == this.matrix.height) {
            return {done: true};
        }

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++;

        // increment the row if were at the last column
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `pokemon ${x},${y}`);

console.log(matrix);

for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

class SymmetricMatrix extends Matrix {

    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) {
                return element(y, x);
            } else {
                return element(x, y);
            }
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let sm = new SymmetricMatrix(5, (x, y) => `sm ${x},${y}`);
console.log(sm.get(2,3));

console.log(sm instanceof Matrix);
console.log(matrix instanceof SymmetricMatrix);