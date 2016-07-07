// control whether or not a letter appears as a "_" or as itself on-screen
var game = require('./game.js');

var displayWord = function() {
  var targetWord = game.wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
  var chosenWord = [];
    for (var i = 0; i < targetWord.length; i++) {
      chosenWord[i] = "_ ";
    }
};

displayWord();
