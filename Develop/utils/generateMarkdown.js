// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("test_console: "+ license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
  const generateMarkdown = ({username, email, project, description, license, installation, test, usage, contribution}) =>
  `
  ![Web Developer](https://img.shields.io/badge/bootcamp-Web%20Developer-red)
  # ${project}
  
  ![Web Developer](https://img.shields.io/badge/license-${license}-blue)
  ## Description
  
  ${description}
  
  ## Table of Contents
  - [ Instalation ](#instalation)
  - [ Usage ](#usage)
  - [ License](#license)
  - [ Contributing](#Contributing)
  - [ Test ](#test)
  - [ Questions ](#questions)
  
  <a name="instalation"></a>
  
  ## Instalation
  
  To install necessary dependencies, run the following command:
  
  > ${installation}
  
  <a name="usage"></a>
  
  ## Usage
  
  ${usage}
  
  <a name="license"></a>
  
  ## License
  
  This project is licensed under the -license- license.
  
  
  
  <a name="Contributing"></a>
  
  ## Contributing
  
  ${contribution}
  
  <a name="test"></a>
  
  ## Test
  
  To run test, run the following command:
  
  > ${test}
  
  <a name="questions"></a>
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${username}](https://github.com/${username})
  
  ![Web Developer](https://img.shields.io/badge/bootcamp-Web%20Developer-red)
  `;

module.exports = {
  renderLicenseBadge,
  generateMarkdown
}