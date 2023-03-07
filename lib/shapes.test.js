const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("generates an SVG string for a triangle", () => {
    const triangle = new Triangle("triangle", 100, 100);
    const svg = triangle.generate();
    expect(svg).toContain("<polygon");
    expect(svg).toContain("points=\"0,100 50,0 100,100\"");
  });
});

describe("Circle", () => {
  test("generates an SVG string for a circle", () => {
    const circle = new Circle("circle", 100, 100);
    const svg = circle.generate();
    expect(svg).toContain("<circle");
    expect(svg).toContain("cx=\"50\" cy=\"50\" r=\"50\"");
  });
});