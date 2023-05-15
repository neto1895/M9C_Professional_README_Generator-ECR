// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choice } = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
const licenses = [
    { name: '- MIT', value: "MIT" },
    { name: '- APACHE 2.0', value: "APACHE 2.0" },
    { name: '- GPL 3.0', value: "GPL 3.0" },
    { name: '- GNU V3.0', value: "GNU V3.0" },
    { name: '- BSD 3', value: "BSD 3" },
    { name: '- None', value: "None" },      
];

const questions = () =>{
    return inquirer.prompt([
        {   type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project: '
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: licenses,
        },
        {
            type: 'list',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            choices: [{name: "npm i", value: "npm i"}],
        },
        {
            type: 'list',
            name: 'test',
            message: 'What command should be run to run test?',
            choices: [{name: "npm test", value: "npm test"}],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?'    
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?'  
        },
]);
}

const generateREADME = ({username, email, project, description, license, installation, test, usage, contribution}) =>
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
`
// TODO: Create a function to write README file
function writeToFile(answers) {
    console.log("test: "+answers.email+" and ");
    const generateMarkdown = require("./utils/generateMarkdown");
    generateMarkdown.renderLicenseBadge(3);
    console.log(generateMarkdown.generateMarkdown(4));


    const readmeContent = generateREADME(answers)

    fs.writeFile("README.md",readmeContent,(err) =>
    err ? console.log(err): console.log("Successfully created README.md!")
    );
}

// TODO: Create a function to initialize app
function init() {
questions()

    .then((answers) => {
        writeToFile(answers);
    }
    );
}

// Function call to initialize app
init();
