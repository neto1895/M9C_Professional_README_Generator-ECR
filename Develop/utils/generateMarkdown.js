// Returns a license badge based on which license is passed in 
const renderLicenseBadge = ({license}) =>{ // If there is no license, return an empty string
  (license == "None") ? "" : `![](https://img.shields.io/badge/license-${license}-blue)`
  }
//Function that returns the license link
const renderLicenseLink = ({license}) =>{ // If there is no license, return an empty string
  (license == "None") ? "" : `[ License](#license)`
  }
//Function that returns the license section of README
const renderLicenseSection = ({license}) =>{ // If there is no license, return an empty string
  (license == "None") ? "" : `
<a name="license"></a>
  
## License
    
This project is licensed under the following license:

![license](https://img.shields.io/badge/-${license}-inactive)
`
}
// Function to generate markdown for README
  const generateMarkdown = ({username, email, project, description, license, installation, test, usage, contribution},licenseElements) =>
  `
  ![Web Developer](https://img.shields.io/badge/bootcamp-Web%20Developer-red)
  # ${project}

  ${licenseElements[0]}
  

  ## Description
  
  ${description}
  
  ## Table of Contents
  - [ Instalation ](#instalation)
  - [ Usage ](#usage)
  - ${licenseElements[1]}
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
  
${licenseElements[2]}

  
  
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
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}