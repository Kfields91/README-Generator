// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
----

[${data.license}](badge content)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#testinstructions)
- [Contact Information](#contactinformation)

### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### Contribution
${data.contribution}

### Test Instructions
${data.tests}

### Contact Information
[Github Profile](https://github.com/${data.username})
${data.email}

`;
}

module.exports = generateMarkdown;
