// Packages needed for this application
const inquirer = require('inquirer'); // Package for prompting user input
const fs = require('fs'); // File system module
const { default: Choice } = require('inquirer/lib/objects/choice');
const licenses = [
    { name: '- MIT',        value: "MIT" },
    { name: '- APACHE 2.0', value: "APACHE%202.0" },
    { name: '- GPL 3.0',    value: "GPL%203.0" },
    { name: '- GNU V3.0',   value: "GNU%20V3.0" },
    { name: '- BSD 3',      value: "BSD%203" },
    { name: '- None',       value: "None" },      
];
const questions = () =>{ // Array of questions for user input
    return inquirer.prompt([
        { type: 'input',name: 'username',    message: 'What is your GitHub username?',},
        { type: 'input',name: 'email',       message: 'What is your email address?',},
        { type: 'input',name: 'project',     message: "What is your project's name?",},
        { type: 'input',name: 'description', message: 'Write a short description of your project: '},
        { type: "list", name: "license",     message: "What kind of license should your project have?",        choices: licenses,},
        { type: 'list', name: 'installation',message: 'What command should be run to install dependencies?',   choices: [{name: "npm i", value: "npm i"}],},
        { type: 'list', name: 'test',        message: 'What command should be run to run test?',               choices: [{name: "npm test", value: "npm test"}],},
        { type: 'input',name: 'usage',       message: 'What does the user need to know about using the repo?'},
        { type: 'input',name: 'contribution',message: 'What does the user need to know about contributing to the repo?'},
])}
// Function to write README file
function writeToFile(readmeContent) {
    fs.writeFile("README.md",readmeContent,(err) =>
    err ? console.log(err): console.log("Successfully created README.md!")  
)}
function init() { // Function to initialize app
    const generateMarkdown = require("./utils/generateMarkdown"); // Calls module of functions to write content of README file
    questions()
    .then((answers) => {
        const licenseElements = 
        [   generateMarkdown.renderLicenseBadge(answers),
            generateMarkdown.renderLicenseLink(answers),
            generateMarkdown.renderLicenseSection(answers)]     
        const readmeContent = generateMarkdown.generateMarkdown(answers,licenseElements)
        writeToFile(readmeContent)
})}
init(); // Function call to initialize app