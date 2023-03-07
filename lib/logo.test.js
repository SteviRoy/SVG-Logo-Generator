// Import the Logo class from the "./logo" file
const Logo = require("./logo");

// Import the shape classes from the "./shapes" file
const { Triangle, Circle, Square } = require("./shapes");

// Define a test suite for the Logo class
describe("Logo", () => {

  // Define a test case for generating an SVG string with a triangle shape and text
  test("generates an SVG string for a logo with a triangle shape and text", () => {

    // Create a new triangle shape instance
    const shape = new Triangle("triangle", 100, 100);

    // Create a new Logo instance with the triangle shape and other parameters
    const logo = new Logo("ABC", "red", shape, "blue");

    // Generate the SVG string for the Logo instance
    const svg = logo.generate();

    // Assert that the SVG string contains a polygon element (representing the triangle shape) and a text element
    expect(svg).toContain("<polygon");
    expect(svg).toContain("<text");
  });

  // Define a test case for generating an SVG string with a circle shape and text
  test("generates an SVG string for a logo with a circle shape and text", () => {

    // Create a new circle shape instance
    const shape = new Circle("circle", 100, 100);

    // Create a new Logo instance with the circle shape and other parameters
    const logo = new Logo("XYZ", "green", shape, "yellow");

    // Generate the SVG string for the Logo instance
    const svg = logo.generate();

    // Assert that the SVG string contains a circle element (representing the circle shape) and a text element
    expect(svg).toContain("<circle");
    expect(svg).toContain("<text");
  });

  // Define a test case for generating an SVG string with a square shape and text
  test("generates an SVG string for a logo with a square shape and text", () => {

    // Create a new square shape instance
    const shape = new Square("square", 100, 100);

    // Create a new Logo instance with the square shape and other parameters
    const logo = new Logo("123", "purple", shape, "orange");

    // Generate the SVG string for the Logo instance
    const svg = logo.generate();

    // Assert that the SVG string contains a rect element (representing the square shape) and a text element
    expect(svg).toContain("<rect");
    expect(svg).toContain("<text");
  });
});
