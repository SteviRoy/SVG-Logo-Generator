const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("generates an SVG string for a triangle", () => {
    const triangle = new Triangle("triangle", 100, 100);
    const svg = triangle.generate();
    expect(svg).toContain("<polygon");
    expect(svg).toContain("points=\"0,100 50,0 100,100\"");
  });
});
 