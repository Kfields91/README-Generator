// creating variable and using require function to bring in Inquirer
const inquirer = require("inquirer");
// creating variable and using require function to bring in fs to write file later
const fs = require("fs");
// creating variable and using require to use npm's path//doesn't need install//part of npm
const path = require("path");
// creating variable and requiring generateMarkdown.js 
var generateMarkdown = require("./utils/generateMarkdown");
    
// function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
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
        message: "Enter A Descrition For Your Project"
      },
      {
        // Takes user text input
        type: "input",
        name: "installation",
        message: "Enter Your Projects Installation Instructions"
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
          message: "Enter Your Project Contribution Guidelines"
      },
      {
        // Takes user text input
          type: "input",
          name: "tests",
          message: "Enter Test Instructions"
      },
      { 
        // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "None",
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
      // message for the user
      console.log("Generating Markdown...");
      // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
      writeToFile("README.md", generateMarkdown({...data}));  
});
}
// function call to initialize program
init()