// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
      {
        name: 'Test',
        message: 'How are you?',
        type: 'input'
      }
    ])
    .then((response) =>
      console.log(response)
    );
// TODO: Create an array of questions for user input
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
   ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

