const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileWebpage = util.promisify(fs.writeFile);

const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "employee1",
      message: "What is the name of your first employee?",
    },
    {
      type: "input",
      name: "email1",
      message: "What is the email of your first employee?",
    },
    {
      type: "input",
      name: "github1",
      message: "What is the github profile for your first employee?",
    },
    {
      type: "input",
      name: "employee2",
      message: "What is the name of your second employee?",
    },
    {
      type: "input",
      name: "email2",
      message: "What is the email of your second employee?",
    },
    {
      type: "input",
      name: "github2",
      message: "What is the github profile of your second employee?",
    },
    {
      type: "input",
      name: "employee3",
      message: "What is the name of your third employee?",
    },
    {
      type: "input",
      name: "email3",
      message: "What is the email of your third employee?",
    },
    {
      type: "input",
      name: "github3",
      message: "What is the github profile of your third",
    },
    {
      type: "input",
      name: "employee4",
      message: "What is the name of your fourth employee?",
    },
    {
      type: "input",
      name: "email4",
      message: "What is the email of your fourth employee?",
    },
    {
      type: "input",
      name: "github4",
      message: "What is the github profile of your fourth employee?",
    },
  ]);

questions()
  .then((data) => writeFileWebpage("index.html", generateMD(data)))
  .then(() => console.log("completed"))
  .catch((err) => console.error(err));

function generateMD(data) {
  return `# ${data.employee1}
## email1
${data.email1}
## Table of Contents

1. [github1ation Guidelines](#github1ation-guidelines)
2. [Usage](#usage)
3. [email2](#email2)
4. [github2 to READMEGenerator](#contribute)
5. [Github Flow for Pull Requests](#contribute1)
6. [Resolving Bugs](#contribute2)
7. [Testing](#github4)
8. [Questions](#questions)




### github1ation Guidelines <a id="github1ation-guidelines"></a>
${data.github1}


### email1
${data.email1}
### Usage <a id="usage"></a>
${data.employee2}
### email2 <a id="email2"></a>
${data.email2}
[![email2: ISC](https://img.shields.io/badge/email2-ISC-blue.svg)](https://opensource.org/email2s/ISC)
### github2 to READMEGenerator <a id="contribute"></a>
${data.github2}
### Github Flow for Pull Requests <a id="contribute1"></a>
${data.employee3}
### Resolving Bugs <a id="contribute2"></a>
${data.email3}
### Testing <a id="github4"></a>
${data.github4}
### Questions <a id="questions"></a>
Github employee2rname: ${data.github}
Email: ${data.email4}
`;
}
module.exports = generateMD;
