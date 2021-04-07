// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'project name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'project description',
      message: 'Project description?'
    },
    {
      type: 'input',
      name: 'project installation instructions',
      message: 'Any installation instructions?'
    },
    {
      type: 'input',
      name: 'project usage information',
      message: 'Usage information?'
    },
    {
      type: 'input',
      name: 'project contributors',
      message: 'List any known project contributors and how others can contribute going forward.'
    },
    {
      type: 'input',
      name: 'project test instructions',
      message: 'If you have them, please provide test examples for your project and how others can run them. '
    },
    {
      type: 'list ',
      name: 'project test instructions',
      message: 'If you have them, please provide test examples for your project and how others can run them. '
    }
  ]);
}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
