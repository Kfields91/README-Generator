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
              "Apache License 2.0",
              "GNU Public License v3.0",
              "MIT License",
              "BSD 2-Clause `Simplified` License",
              "BSD 3-Clause `New or `Revised` License",
              "Boost Software License 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public License 2.0",
              "GNU Affero General Public License v3.0",
              "GNU General Public License v2.0",
              "GNU Lesser General Public License v2.1",
              "Mozilla Public License 2.0",
              "the Unilicense"
            ]
        },
        {
          type: "checkbox",
          message: "What's The Best Way To Reach You",
          name: "ContactInfo",
          choices: [
            "email",
            "github",
          ]
        }
        
    ]).then(function(data) {
      console.log(data.username);
      console.log(data.email); 
      console.log(data.title); 
      console.log(data.description); 
      console.log(data.installation); 
      console.log(data.usage); 
      
      writeToFile("README.md", generateMarkdown({...data}));
      let username = data.username;
      let email = data.email;
      let title = data.title;

  
});
}

// function call to initialize program
init()