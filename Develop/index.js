// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');

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
      message: 'If you have them, please provide test examples for your project and how others can run them.'
    },
    {
      type: 'list ',
      name: 'project licensing options',
      message: 'Please select a license for your project:',
      choices: [
        'MIT License',
        'Apache License 2.0',
        'Mozilla Public License 2.0'
      ]
    },
    {
      type: 'input',
      name: 'github username',
      message: 'Github username?'
    },
    {
      type: 'input',
      name: 'email address',
      message: 'Email Address?'
    }
  ]);
}; 

// TODO: Create a function to write README file

fs.writeFile(`README.md`, generateMarkdown, (err) =>{
  if(err) throw err;
  console.log(`file saved`)
});

// TODO: Create a function to initialize app
function init() {
  questions ()
    .then ((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then (() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
