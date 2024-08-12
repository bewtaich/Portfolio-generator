// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input

const questions = [

    //TITLE
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  //Description
  {
    type: "input",
    name: 'description',
    message: 'Provide a description of your project.'
  },

  //Installation Instruction
  {
    type: "input",
    name: 'installation',
    message: 'Provide the steps required to install the project.'
  },

  //Usage Information
  {
    type: "input",
    name: 'usage',
    message: 'Provide instructions to use the project.'
  },

  //Contribution Guidelines
  {
    type: "input",
    name: 'contribution',
    message: 'Describe how someone can contribute to this project.'
  },

  //Test Instructions
  {
    type: "input",
    name: 'testInstructions',
    message: 'Describe how someone can test this project.'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then
}

// Function call to initialize app
init();
