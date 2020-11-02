// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   
## usage

# ${data.email}
`;
}

module.exports = generateMarkdown;
