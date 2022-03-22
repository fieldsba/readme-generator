// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
const { writeFile, copyFile } = require('./utils/generate-site');

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
        }

])
}

// TODO: Create a function to write README file
const writeReadmeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log('An error occurred. Try again.');
        }
        else {
            console.log("README created successfully.");
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    promptQuestions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeReadmeFile(data);
    })
    .catch(err => {
        console.log('An error occurred. Please try again.');
    })
}

// Function call to initialize app
init();
