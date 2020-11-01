var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Repository Name"
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
      }
  ]).then(function(data) {
    console.log(data);
    
    var newFile = `${data.title.toUpperCase().split(' ').join('')}.md`; 

    fs.writeFile(newFile, JSON.stringify(data, null, "\t"), (err) => {

        if (err) {
          return console.log(err);
        }

      });
      console.log("Success!");
    // if (response.description && response.installation && response.usage && response.contribution && response.tests) {
    // }
  });
// array of questions for user
const questions = [
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// at processTicksAndRejections (internal/process/task_queues.js:97:5)
// (node:2784) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:2784) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.