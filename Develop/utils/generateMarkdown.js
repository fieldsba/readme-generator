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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
