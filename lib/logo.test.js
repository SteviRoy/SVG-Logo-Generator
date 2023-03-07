const Logo = require("./logo");
const { Triangle, Circle, Square } = require("./shapes");

describe("Logo", () => {
  test("generates an SVG string for a logo with a triangle shape and text", () => {
    const shape = new Triangle("triangle", 100, 100);
    const logo = new Logo("ABC", "red", shape, "blue");
    const svg = logo.generate();
    expect(svg).toContain("<polygon");
    expect(svg).toContain("<text");
  });

  test("generates an SVG string for a logo with a circle shape and text", () => {
    const shape = new Circle("circle", 100, 100);
    const logo = new Logo("XYZ", "green", shape, "yellow");
    const svg = logo.generate();
    expect(svg).toContain("<circle");
    expect(svg).toContain("<text");
  });

  test("generates an SVG string for a logo with a square shape and text", () => {
    const shape = new Square("square", 100, 100);
    const logo = new Logo("123", "purple", shape, "orange");
    const svg = logo.generate();
    expect(svg).toContain("<rect");
    expect(svg).toContain("<text");
  });
});