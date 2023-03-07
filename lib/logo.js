const { Shape, Triangle, Circle, Square } = require("./shapes");

class Logo {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  
  generate() {
    const shapeSvg = this.shape.generate();
    const textSvg = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="New york times" font-weight="bold" font-size="72">${this.text}</text>`;
    const svg = `<svg style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" width="${this.shape.width}" height="${this.shape.height}" xmlns="http://www.w3.org/2000/svg">
      <g fill="${this.shapeColor}">
        ${shapeSvg}
      </g>
      <g fill="${this.textColor}">
        ${textSvg}
      </g>
    </svg>`;
    return svg;
  }
}

module.exports = Logo;