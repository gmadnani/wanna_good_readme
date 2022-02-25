const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = require('./utils/getdata');

const readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the Project Title';
            }
        }
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Enter the repository name of your project',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the repository name';
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the Project Title';
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter the instructions for installation',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the instructions for installation';
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the usage information';
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the contribution guidelines';
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter the test instructions';
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['unlicense', 'afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'MIT', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'zlib'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter your GitHub username';
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: (value) => {
            if (value){
                return true;
            }
            else {
                return 'Please enter your email address';
            }
        }
    }
]

function init(){
    inquirer.prompt(readmeQuestions).then (function (data){
        console.log(data);
        fs.writeFile("utils/README.md", generateReadMe(data), function(err){
            if(err) console.log('error', err);
        });
    });
}

init();