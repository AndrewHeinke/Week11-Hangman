// game is played and contains all of the user-input
var game = require('./game.js');
var inquirer = require('inquirer');

inquirer.prompt([
  {
    name: 'letter',
    type: 'text',
    message: 'Guess a Letter: ',
    validate: function(str) {
      var regEx = new RegExp("[a-zA-Z]");
      return regEx.test(str);
    }
  }
]).then(function(answers) {
    var letter = answers.letter.toLowerCase();
});
