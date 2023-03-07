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
});