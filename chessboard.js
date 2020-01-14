// Eloquent JS
// Chessboard

let black = "##";
let white = "  ";
let rowString = "";

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        if (col % 2 == 0) {
            rowString += black;
        } else {
            rowString += white;
        }
    }
    console.log(rowString);
    rowString = "";
    if (row % 2 == 0) {
        black = "  ";
        white = "##";
    } else {
        black = "##";
        white = "  ";
    }
}
