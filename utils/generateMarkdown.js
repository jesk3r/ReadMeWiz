// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch(license){
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
   
    case 'MPL 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  
    case 'Boost 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    
    case 'EPL 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'AGPL v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';

    case 'LGPL v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    
    default:
      return ''

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  {
    switch (license) {
      case 'Apache 2.0':
        return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      
      case 'MIT':
        return '[The MIT License](https://opensource.org/licenses/MIT)';
     
      case 'MPL 2.0':
        return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
    
      case 'Boost 1.0':
        return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
      
      case 'BSD 3-Clause':
        return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      
      case 'BSD 2-Clause':
        return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
      
      case 'EPL 1.0':
        return '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)';
  
      case 'GPL v3':
        return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  
      case 'AGPL v3':
        return '[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
  
      case 'LGPL v3':
        return '[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
      
      default:
        return '';
    }
  };
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if(license === 'none'){
    return 'n/a'
  }

  let licenseLink = renderLicenseLink(license)

  let licenseSection  =
  `
   All assets and code is under the: [${license}](${licenseLink})
  `
  
  return licenseSection;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = 
  `# ${data.title.toUpperCase()}
  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.desc}
  
  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Questions](#questions)

  ## Usage 

  ${data.useage}

  ## Installation

  ${data.install}

  
  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## How to Contribute

  ${data.contribute}

  ## Questions

  - Github: [Github Acount](https://github.com/${data.githubUserName}) 
  - Contact info: <${data.email}>
  


  `

  return markdown

;
}

module.exports = generateMarkdown;
