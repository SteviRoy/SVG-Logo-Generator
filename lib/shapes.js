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

class Triangle extends Shape {
  generate() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
      <polygon points="0,${this.height} ${this.width / 2},0 ${this.width},${this.height}"/>
    </svg>`;
  }
}