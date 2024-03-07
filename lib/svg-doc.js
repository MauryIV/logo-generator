const { Triangle, Square, Circle } = require('./shapes')

function createSvg(text, textColor, shape, shapeColor) {
  let logoShape = ''
  let textVariant = ''
  if (shape === 'Triangle') {
    textVariant = `<text x="150" y="150" font-size="60" text-anchor="middle" style="fill: ${textColor}">${text}</text>`
    logoShape = new Triangle(shape).render()
  } else if (shape === 'Circle') {
    textVariant = `<text x="150" y="125" font-size="75" text-anchor="middle" style="fill: ${textColor}">${text}</text>`
    logoShape = new Circle(shape).render()
  } else if (shape === 'Square') {
    textVariant = `<text x="150" y="125" font-size="75" text-anchor="middle" style="fill: ${textColor}">${text}</text>`
    logoShape = new Square(shape).render()
  }
    return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${logoShape} style="fill: ${shapeColor}"/>
  ${textVariant}
</svg>`
}

module.exports = { createSvg }
