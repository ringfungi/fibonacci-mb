const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
import { fibonacci } from './utils';

console.log('Welcome to the ' + chalk.blue.bold('Malware') + chalk.blue('bytes') + ' test task!');

// Creates /files directory if it doesn't exist
fs.mkdirSync('./files', { recursive: true }, (err) => {
  if (err) throw err;
});

// Version of inquirer module that repeatedly prompts user for input
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Print new Fibonacci sequence to file?',
    name: 'sequence',
    prompts: [
            {
            type: 'input',
            name: 'numbers',
            message: 'How many Fibonacci numbers should be printed?',
            validate: function (value) {
                var positiveIntegersRegex = /^\d*[1-9]\d*$/;

                if (positiveIntegersRegex.test(value)) {
                    fibonacci(value);
                    return true;
                }
                return 'Invalid number, please insert a positive integer';
            }
        }
    ]
}]).then(function(answers) {
    console.log(chalk.bgGreen('Thank you, come again! Check the code at https://github.com/ringfungi/fibonacci-mb/));
});