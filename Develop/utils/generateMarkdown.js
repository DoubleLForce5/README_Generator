// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license.license){
    case 'MIT': return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case 'Apache': return "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    case 'Mozilla': return "![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
    case 'None': return ""
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.license){
    case 'MIT': return "[License](https://opensource.org/licenses/MIT)"
    case 'Apache': return "[License](https://opensource.org/licenses/Apache-2.0)"
    case 'Mozilla': return "![License](https://opensource.org/licenses/MPL-2.0)"
    case 'None': return ""
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license.license){
    case 'MIT': return ""

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
  ## Description: 
  ${data.description}
  ## Instruction: 
  ${data.instructions}
  ## Information: 
  ${data.information}
  ## Contribution(s):
  ${data.contributors}
  ## Test:
  ${data.test}
  ## License:
  ${data.license}
  ${renderLicenseLink(data)}
  ## GitHub: 
  ${data.github}
  ## Email: 
  ${data.email}
  `
};

module.exports = generateMarkdown;
