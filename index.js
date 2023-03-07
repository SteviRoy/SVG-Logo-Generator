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
    {
      type: "input",
      name: "textColor",
      message:
        "Enter the text color as a CSS color keyword or hexadecimal color value:",
      default: "black",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo:",
      choices: shapes.map((shape) => shape.name),
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter the shape color as a CSS color keyword or hexadecimal color value:",
      default: "white",
    },
  ]);