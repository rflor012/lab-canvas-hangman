function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

}


// function HangmanCanvas(secretWord) {
//   var canvas = document.getElementById('hangman');
//
//
// }
//
// HangmanCanvas.prototype.createBoard = function () {



  /* beginPath()    //Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
closePath()    //Closes the path so that future drawing commands are once again directed to the context.
stroke()      //Draws the shape by stroking its outline.
fill()        //Draws a solid shape by filling the path's content area.*/
//
// };

// HangmanCanvas.prototype.drawLines = function () {
//
// };
//
// HangmanCanvas.prototype.writeCorrectLetter = function (index) {
//
// };
//
// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
//
// };
//
// HangmanCanvas.prototype.drawHangman = function (shape) {
//
// };
//
// HangmanCanvas.prototype.gameOver = function () {
//
// };
//
// HangmanCanvas.prototype.winner = function () {
//
// };
