const inquirer = require('inquirer');

const readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    }
]

function init(){
    inquirer.prompt(readmeQuestions).then (function (data){
        console.log(data);
    })
}

init();