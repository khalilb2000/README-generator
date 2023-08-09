// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Make sure to have generateMarkdown.js in the same directory
console.log("This is my README generator")
console.log("Answer the following questions to whip up your own README!")
// TODO: Create an array of questions for user input
const questions = [
    //name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter title to continue!');
                return false;
            }
        }

    },
    //description
   {
    type: 'input',
    name:'description',
    message:'Describe your project',
    validate: your_Description => {
        if (your_Description) {
            return true;
        } else {
            console.log('Enter a project description!')
        }
    }
   },
   {
    type: 'input',
    name: 'installation',
    message:'How do you install this project?',
    validate: your_Installation => {
        if (your_Installation) {
            return true;
        } else {
            console.log('Please provide installation');
            return false;
        }
    }
   },
   //usage
   {
    type:'input',
    name: 'usage',
    message: 'How do you use this project?',
    validate: your_usage => {
        if (your_usage){
            return true;
        } else {
            console.log('Enter information on how to use this project');
            return false;
        }
    }
},
// license
{
    type:'checkbox',
    name:'license',
    message:'Choose a license that will best suit your project.',
    choices:['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
    validate: your_license => {
        if (your_license) {
            return true;
        } else {
            console.log('Please select a license!');
            return false;
        }
    }
},
//contribution
{
    type: 'input',
    name: 'contribution',
    message: 'How can you contribute to this project?',
    validate: your_contribution => {
        if (your_contribution ) {
            return true;
        } else {
            console.log('Please enter how to contribute!');
            return false;
        }
    }
},
//test
{
    type: 'input',
    name:'test',
    message: 'How do you test this project?',
    validate: your_test => {
        if (your_test) {
            return true;
        } else {
            console.log('Please enter how we test project')
        } return false; 
    }
}, 
//github
{
    type: 'input',
    name:'github',
    message:'Enter GitHub Username (required)',
    validate: github_input => {
        if (github_input) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},

{
    type:'input',
    name: 'e_mail',
    message:'Enter your preffered E-mail',
    validate: email_input => {
        if (email_input) {
            return true;
        } else {
            console.log('Please enter your E-mail!')
        }
    }
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! You can now preview your README file")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
