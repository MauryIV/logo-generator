const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createSvg } = require('./svg-doc');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }
  userInput() {
    inquirer.prompt([
      {
        prefix: "Welcome to the Logo Creator! Please fill out the following questions in order to have something amazing created for you.",
        type: 'input',
        name: 'text',
        message: "I'm sure you have a nice name for your company, possibly an acronym? Would you please input a maximum of 3 letters to display on your logo?",
        validate: function (input) {
          if ((input.length > 3) || (input.length === 0)) {
            return 'Please enter 1-3 Characters.'
          };
          return true
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: "Please enter a color or a hexadecimal value, you can also put in a RGB value if you'd prefer. Here are some options to help inspire you: Red, Green, Blue, Black, White, Pink, Gray, Brown, Orange, Yellow, Purple, Blood Orange-#FF5519, Gold-#FFC332, Lime Green-#B9FF3C, Teal-#007D7D, Violet-#8700FA, Forest Green-rgb(0, 102, 0), Maroon-rgb(102, 0, 51), Hot Pink-rgb(255, 0, 127)"
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What background shape would you like in your logo?',
        choices: ['Triangle', 'Circle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: "Please enter a color or a hexadecimal value, you can also put in a RGB value if you'd prefer. Here are some options to help inspire you: Red, Green, Blue, Black, White, Pink, Gray, Brown, Orange, Yellow, Purple, Blood Orange-#FF5519, Gold-#FFC332, Lime Green-#B9FF3C, Teal-#007D7D, Violet-#8700FA, Forest Green-rgb(0, 102, 0), Maroon-rgb(102, 0, 51), Hot Pink-rgb(255, 0, 127)"
      },
    ])
    .then(({ text, textColor, shape, shapeColor }) => {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    })
    .then(() => {
      return writeFile(
        join(__dirname, '..', 'examples', 'logo.svg'),
        createSvg(this.text, this.textColor, this.shape, this.shapeColor)
      );
    })
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => {
      console.log('Ummm, this happened...', err);
    });
  }
}

module.exports = CLI;
