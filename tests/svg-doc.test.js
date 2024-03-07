const { createSvg } = require('../lib/svg-doc');

describe('createSvg', () => {
  test('should equal triangles test varient if shape equals triangle', () => {
    const text = 'MIV';
    const textColor = "Red";
    const shape = 'Triangle';
    const shapeColor = 'Black';
    const testSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,10 290,190 10,190" style="fill: Black"/>
  <text x="150" y="150" font-size="60" text-anchor="middle" style="fill: Red">MIV</text>
</svg>`;
    const svg = createSvg(text, textColor, shape, shapeColor);
    expect(testSvg).toEqual(svg);
  })
})

describe('createSvg', () => {
  test('should equal other test varient if shape !== triangle', () => {
    const text = 'MIV';
    const textColor = "Red";
    const shape = 'Circle';
    const shapeColor = 'Black';
    const testSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="90" style="fill: Black"/>
  <text x="150" y="125" font-size="75" text-anchor="middle" style="fill: Red">MIV</text>
</svg>`;
    const svg = createSvg(text, textColor, shape, shapeColor);
    expect(testSvg).toEqual(svg);
  })
})

describe('createSvg', () => {
  test('should equal other test varient if shape !== triangle', () => {
    const text = 'MIV';
    const textColor = "Red";
    const shape = 'Square';
    const shapeColor = 'Black';
    const testSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="57.5" y="7.5" width="185" height="185" style="fill: Black"/>
  <text x="150" y="125" font-size="75" text-anchor="middle" style="fill: Red">MIV</text>
</svg>`;
    const svg = createSvg(text, textColor, shape, shapeColor);
    expect(testSvg).toEqual(svg);
  })
})