// Import the inquirer module for creating interactive prompts
const inquirer = require("inquirer");

// Import the Logo class from the "./lib/logo" file
const Logo = require("./lib/logo");

// Import the shape classes from the "./lib/shapes" file
const { Triangle, Circle, Square } = require("./lib/shapes");

// Import the fs module for interacting with the file system
const fs = require("fs");

// Define an array of shape classes
const shapes = [Triangle, Circle, Square];

// Display a series of prompts to the user using inquirer
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",

      // Validate that the user enters up to three characters
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

      // Use the shape classes to populate the list of choices
      choices: shapes.map((shape) => shape.name),
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter the shape color as a CSS color keyword or hexadecimal color value:",
      default: "white",
    },
  ])

  // After the user submits their responses, create a new Logo instance
  .then(({ text, textColor, shape, shapeColor }) => {

    // Find the chosen shape class from the shapes array
    const Shape = shapes.find((s) => s.name === shape);

    // Create a new shape instance with the chosen shape and fixed width and height
    const shapeInstance = new Shape(shape, 300, 200);

    // Create a new Logo instance with the user's chosen text, text color, shape instance, and shape color
    const logo = new Logo(text, textColor, shapeInstance, shapeColor);

    // Generate an SVG string representing the logo
    const svg = logo.generate();

    // Write the SVG string to a file named "logo.svg" in the "examples" directory
    fs.writeFileSync("examples/logo.svg", svg);

    // Output a success message to the console
    console.log("Generated logo.svg");
  })

  // If there is an error, output it to the console
  .catch((err) => {
    console.error(err);
  });
