// game is played and contains all of the user-input
var game = require('./game.js');
var inquirer = require('inquirer');

inquirer.prompt([
  {
    name: 'letter',
    type: 'text',
    message: 'Guess a Letter: ',
    validate: function(str) {
      return /[a-z]/i.test(str);
    }
  }
]).then(function(answers) {
    var letter = answers.letter.toLowerCase();
});
