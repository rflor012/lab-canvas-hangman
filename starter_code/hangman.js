var hangman;

function Hangman() {
  this.words = ['cheese', 'monkey', 'ham', 'sandwich', 'oregano', 'basil', 'orange', 'beach'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord.toLowerCase();
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return (keyCode.length === 1 && typeof(keyCode) === 'string');
};

Hangman.prototype.checkClickedLetters = function(key) {
  var result = false;
  this.letters.forEach(function(letterInArray) {
    if (letterInArray == key) {
      result = true;
    }
  });
  return result;
};

Hangman.prototype.addCorrectLetter = function(i) {
  var that = this;
  this.secretWord.split('').forEach(function(letterInSecret) {
    if (letterInSecret == i) {
      that.guessedLetters += i;
    }
  });
  return this.guessedLetters;
};

Hangman.prototype.addWrongLetter = function(letter) {
  var that = this;
  var result;
  this.secretWord.split('').forEach(function(letterInSecret) {
    if (letterInSecret == letter) {
      result = true;
    }
  });
  if (!result) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function() {
  return (this.errorsLeft <= 0);
};

Hangman.prototype.checkWinner = function() {
  return (this.guessedLetters.length >= this.secretWord.length);
};

document.getElementById('start-game-button').onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};

var game = new Hangman();
