//packages
const inquirer = require('inquirer');
const generateHtmlMarkdown = require('./generateHtmlMarkdown');
const fs = require('fs');

// questions

const questions =[
    {
        type:'input',
        message:'What is your name?',
        name:'name'
    },
    {
        type:'input',
        message:'Include an image. type the  relative path of the image or add a url:',
        name:'image'
    },
    {
        type:'input',
        message: 'Where do you live?',
        name:'location'
    },
    {
        type:'input',
        message: 'Say something about your bio.',
        name:'bio'
    },
    {
        type:'input',
        message: 'What is your linkdin url?',
        name:'linkdin'
    },{
        type:'input',
        message: 'What is your GitHub url?',
        name:'github'
    }
];

//creates a file
let fileName = 'generatedIndex.html'
function writeToFile(fileName, data){
    fs.appendFile(fileName,data, (err) =>{
        err ? console.error(err) : console.log('Created')
    });
}

//initialize the app
function init(){
    inquirer
        .prompt(questions)
        .then(response => writeToFile(fileName, generateHtmlMarkdown(response)));
}

init();