// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Your name?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'year',
      message: 'Current year?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Any installation instructions?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please list any contributor guidelines.'
    },
    {
      type: 'input',
      name: 'test',
      message: 'If you have them, please provide test examples for your project and how others can run them.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project:',
      choices: [
        'MIT',
        'ISC',
        'None'
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address?'
    }
  ]);
}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
    console.log('file saved')
  });
};

// TODO: Create a function to initialize app
function init() {
  questions ()
    .then ((data) => writeToFile('README.md', generateMarkdown(data)))
    .then (() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();