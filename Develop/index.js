// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) 
                {return true;}
                else 
                {console.log('You must enter a title for your project.');
                return false;}
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a brief description of your project.',
            validate: descriptionInput => {
                if (descriptionInput)
                {return true;}
                else
                {console.log('You must enter a description for your project.');
                return false;}
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please add installation instructions for your project.',
            validate: installInput => {
                if (installInput)
                {return true;}
                else
                {console.log('You must enter installation instructions for your project.');
                return false;}
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information for your project.',
            validate: usageInput => {
                if (usageInput)
                {return true;}
                else
                {console.log('You must enter usage information for your project.');
                return false;}
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list contributors of your project. (Optional)',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please add the command used to test the data. (Note: default is npm test)',
            default: 'npm test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which type of license your project falls under.',
            choices: ['MIT', 'GNU GPLv3', 'unlicensed'],
            default: 'unlicensed'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput)
                {return true;}
                else
                {console.log('You must enter installation instructions for your project.');
                return false;}
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.',
            validate: githubInput => {
                if (githubInput)
                {return true;}
                else
                {console.log('You must enter your github username');
                    return false;
                }
            }
        }

])
}

// TODO: Create a function to write README file
function writeReadme(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
                console.log("Error occurred while writing file.");
                return;
            }
            resolve({
                ok: true,
                message: 'File successfully created!',
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptQuestions()
    .then((data) => {
        const newReadme = generateMarkdown(data);
    writeReadme('./utils/README.md', newReadme);
    });
}

// Function call to initialize app
init();
