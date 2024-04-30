const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts.js');
const { drawLogo } = require('./lib/shapes.js');

// Creates logo.svg file
const writeToFile = function(name, logo) {
    fs.writeFile(`${name}_logo.svg`, logo, (err) => err ? console.error('Unable to create file') : console.log(`Generated ${name}_logo.svg`))
}

// Initialization function
const init = () => {
    inquirer
        .prompt(prompts)
        .then((answers) => {
            const logo = drawLogo(answers);
            writeToFile(answers.text, logo);
        })
}

init();