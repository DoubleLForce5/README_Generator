// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license.license}](https://img.shields.io/badge/License-${license.license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](https://opensource.org/licenses/${license.license})`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   // switch(){
//   // }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}
## ${data.instructions}
## ${data.information}
## ${data.contributors}
## ${data.test}
## ${data.license}
${renderLicenseBadge(data)}
${renderLicenseLink(data)}
## ${data.github}
## ${data.email}
`;
}

module.exports = generateMarkdown;
