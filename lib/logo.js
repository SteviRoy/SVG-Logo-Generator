// Import the shape classes and the Shape interface from the "./shapes" file
const { Shape, Triangle, Circle, Square } = require("./shapes");

// Define a Logo class
class Logo {

  // Initialize the Logo instance with text, text color, shape instance, and shape color
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  // Generate an SVG string representing the logo
  generate() {

    // Generate the SVG for the shape instance
    const shapeSvg = this.shape.generate();

    // Generate the SVG for the text
    const textSvg = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="New york times" font-weight="bold" font-size="50" dy="0.1em">${this.text}</text>`;

    // Combine the shape and text SVG into a complete logo SVG
    const svg = `<svg style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" width="${this.shape.width}" height="${this.shape.height}" xmlns="http://www.w3.org/2000/svg">
      <g fill="${this.shapeColor}">
        ${shapeSvg}
      </g>
      <g fill="${this.textColor}">
        ${textSvg}
      </g>
    </svg>`;

    // Return the complete logo SVG string
    return svg;
  }
}

// Export the Logo class
module.exports = Logo;
