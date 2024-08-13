// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'No License'){
    return ""
  } else if (data.license === "ISC License"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (data.license === 'MIT License'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license === 'Mozilla Public License 2.0'){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (data.license === 'IBM Public License 1.0'){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (data.license === 'Apache 2.0 License'){
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
if (data.license === "No License"){
  return ""
} else {
  return `This project is protected under the ${data.license}`
}
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
${renderLicenseBadge(data)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
  
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data)}


## Contribution
${data.contribution}

## Testing
${data.testing}

## Questions
For more questions contact [${data.github}](https://github.com/${data.github}) at ${data.email}
  `
  ;
}

module.exports = generateMarkdown;
