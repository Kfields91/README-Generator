var inquirer = require("inquirer");
var fs = require("fs");
const path = require("path");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
    const questions = [
    ];
    
// function to write README file
function writeToFile(fileName, data) {
  // var newFile = `${data.title.toUpperCase().split(' ').join('')}.md`; 
  
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },
    {
      type: "input",
      name: "email",
      message: "Enter Your Email Address"
    },
    {
      type: "input",
      name: "title",
      message: "What's Your Projects Name?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a descrition"
      },
      {
        type: "input",
        name: "installation",
        message: "Enter Installation Instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      },
      {
          type: "input",
          name: "contribution",
          message: "Enter Contribution Guidelines"
      },
      {
          type: "input",
          name: "tests",
          message: "Test Instructions"
      },
      {
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
        
    ]).then(function(data) {
      writeToFile("README.md", generateMarkdown({...data}));
      console.log(data.license);
  
});
}

// function call to initialize program
init()