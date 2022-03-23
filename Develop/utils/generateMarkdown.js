const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if the license is anything other than unlicensed, returns that license
  if (!(license === 'unlicensed'))
  {
    return `${license}`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  }
  else if (license === 'GNU GPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || license === 'GNU GPLv3') {
    return `${license}`
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  Description(#description)
  Installation(#installation)
  Usage(#usage)
  License(#license)
  Contributing(#contributing)
  Tests(#tests)
  Questions(#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.testing}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  For any further questions, please contact me at ${data.email}
  Feel free to view my other projects at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
