// creating variable and using require function to bring in Inquirer
const inquirer = require("inquirer");
// creating variable and using require function to bring in fs
const fs = require("fs");
// creating variable and using require to use npm's path//doesn't need install//part of npm
const path = require("path");
// creating variable and requiring generateMarkdown.js 
var generateMarkdown = require("./utils/generateMarkdown");

// remove me
// array of questions for user
    // const questions = [
    // ];
    
// function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
  // var newFile = `${data.title.toUpperCase().split(' ').join('')}.md`; 
  
  // writing file and syncing it using path to join the current working directory using the fileName and user data.
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  // inquirer prompted questions for user//VIA command-line prompts
  inquirer.prompt([
    {
      // Takes user text input
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },
    {
      // Takes user text input
      type: "input",
      name: "email",
      message: "Enter Your Email Address"
    },
    {
      // Takes user text input
      type: "input",
      name: "title",
      message: "What's Your Projects Name?"
      },
      {
        // Takes user text input
        type: "input",
        name: "description",
        message: "Enter a descrition"
      },
      {
        // Takes user text input
        type: "input",
        name: "installation",
        message: "Enter Installation Instructions"
      },
      {
        // Takes user text input
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      },
      {
        // Takes user text input
          type: "input",
          name: "contribution",
          message: "Enter Contribution Guidelines"
      },
      {
        // Takes user text input
          type: "input",
          name: "tests",
          message: "Test Instructions"
      },
      { 
        // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "none",
              "Apache2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "GNU Lesser General Public v2.1",
              "Mozilla Public 2.0",
              "the Unilicense"
            ]
        }
        // Where the user input is stored (data)
    ]).then(function(data) {
      // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
      writeToFile("README.md", generateMarkdown({...data}));
      // remove me
      console.log(data.license);
  
});
}

// function call to initialize program
init()