// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const licenseLinkCases = [
    'Apache 2.0',
    'MIT',
    'MPL 2.0',
    'Boost 1.0',
    'BSD 3-Clause',
    'BSD 2-Clause',
    'EPL 1.0',
    'GPL v3',
    'AGPL v3',
    'LGPL v3'
];

const questions = [
    {
        type: 'input',
        message: 'Project title:',
        name: 'title',
    },{
        type: 'input',
        message: 'Project description:',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Project useage:',
        name: 'useage',
    },
    {
        type: 'input',
        message: 'Project install:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Project credits:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Project contribute guidelines:',
        name: 'contribute',
    },
    {
        type: 'list',
        message: 'What lisnse would you like to chose',
        name: 'license',
        choices: licenseLinkCases
    },
    {
        type: 'input',
        message: 'GitHub username: ',
        name: 'githubUserName',
    },
    {
        type: 'input',
        message: 'Contact email:',
        name: 'email',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        let data = generateMarkdown(response)
        writeToFile('README.md',data)
    })


}

// Function call to initialize app
init();
