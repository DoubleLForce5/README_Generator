// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// https://img.shields.io/endpoint?url=<URL>&style<STYLE>


function renderLicenseBadge(license) {
    // switch(){

  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // switch(){

  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // switch(){

  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}
## ${data.instructions}
##${data.information}
##${data.contributors}
##${data.test}
##${data.licensing}
##${data.github}
##${data.email}
`;
}

module.exports = generateMarkdown;
