// Import the shape classes from the "./shapes" file
const { Triangle, Circle, Square } = require("./shapes");

// Define a test suite for the Triangle class
describe("Triangle", () => {

  // Define a test case for generating an SVG string for a triangle
  test("generates an SVG string for a triangle", () => {

    // Create a new Triangle instance with width and height of 100
    const triangle = new Triangle("triangle", 100, 100);

    // Generate the SVG string for the Triangle instance
    const svg = triangle.generate();

    // Assert that the SVG string contains a polygon element and the expected points attribute
    expect(svg).toContain("<polygon");
    expect(svg).toContain("points=\"0,100 50,0 100,100\"");
  });
});

// Define a test suite for the Circle class
describe("Circle", () => {

  // Define a test case for generating an SVG string for a circle
  test("generates an SVG string for a circle", () => {

    // Create a new Circle instance with width and height of 100
    const circle = new Circle("circle", 100, 100);

    // Generate the SVG string for the Circle instance
    const svg = circle.generate();

    // Assert that the SVG string contains a circle element and the expected cx, cy, and r attributes
    expect(svg).toContain("<circle");
    expect(svg).toContain("cx=\"50\" cy=\"50\" r=\"50\"");
  });
});

// Define a test suite for the Square class
describe("Square", () => {

  // Define a test case for generating an SVG string for a square
  test("generates an SVG string for a square", () => {

    // Create a new Square instance with width and height of 100
    const square = new Square("square", 100, 100);

    // Generate the SVG string for the Square instance
    const svg = square.generate();

    // Assert that the SVG string contains a rect element and the expected x, y, width, and height attributes
    expect(svg).toContain("<rect");
    expect(svg).toContain("x=\"0\" y=\"0\" width=\"100\" height=\"100\"");
  });
});
