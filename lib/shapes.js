class Shape {
  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  generate() {
    throw new Error("Not implemented");
  }
}

