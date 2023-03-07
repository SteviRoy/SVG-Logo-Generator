const inquirer = require("inquirer");
const Logo = require("./lib/logo");
const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");

const shapes = [Triangle, Circle, Square];

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (input) =>
        input.length <= 3 ? true : "Please enter up to three characters",
    },
  ]);