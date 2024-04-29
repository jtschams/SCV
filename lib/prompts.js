const inquirer = require('inquirer');
const validateColor = require('validate-color');

//Validation functions

const textCheck = function(answer) {
    if (answer.length > 3) {
        return 'Text can not be more than 3 characters.'
    } else {
        return true;
    }
}

const colorCheck = function(answer) {
    const goodColor = validateColor(answer);
    if (!goodColor) {
        return "Invalid color."
    } else {
        return true;
    }
}

// Questions
const questions = [
    {
        name: "shape",
        type: "list",
        message: "Please select a shape for your logo",
        choices: ['circle', 'square', 'triangle'],
        default: 0
    },
    {
        name: "color",
        message: "Please select a color for your logo.",
        validate: colorCheck
    },
    {
        name: "text",
        message: "Please enter up to 3 characters for your logo, or leave blank if desired.",
        validate: textCheck
    },
    {
        name: "textColor",
        message: "Please select a color for your text.",
        validate: colorCheck,
        when: answers.text
    }
]

const prompts = function() {
    inquirer
        .prompt(questions)
        .then((answers) => answers)
}

module.exports = prompts