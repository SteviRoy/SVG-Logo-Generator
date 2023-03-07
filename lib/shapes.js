// Define a Shape class with a constructor and a generate() method
class Shape {
  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  generate() {
    // Throw an error if generate() is called on the Shape class directly (it should only be called on a subclass)
    throw new Error("Not implemented");
  }
}

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {

  // Override the generate() method to generate an SVG polygon with three points
  generate() {
    const h = this.width * (Math.sqrt(3) / 2);
    const bottomLeft = `0,${h}`;
    const top = `${this.width / 2},0`;
    const bottomRight = `${this.width},${h}`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${h}">
      <polygon points="${bottomLeft} ${bottomRight} ${top}"/>
    </svg>`;
  }
}

// Define a Circle class that extends the Shape class
class Circle extends Shape {

  // Override the generate() method to generate an SVG circle
  generate() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
      <circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.width / 3}"/>
    </svg>`;
  }
}

// Define a Square class that extends the Shape class
class Square extends Shape {

  // Override the generate() method to generate an SVG rectangle
  generate() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
      <rect x="50" y="50" width="${this.width - 100}" height="${this.height - 100}"/>
    </svg>`;
  }
}

// Export the Shape, Triangle, Circle, and Square classes as an object
module.exports = { Shape, Triangle, Circle, Square };
