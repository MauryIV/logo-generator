const { Triangle, Square, Circle } = require('../lib/shapes')

describe('Circle', () => {
  it('should create the shape "circle".', () => {
    const shape = new Circle();
    expect(shape.render()).toEqual('circle cx="150" cy="100" r="90"');
  })
})

describe('Triangle', () => {
  it('should create the shape "triangle".', () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual('polygon points="150,10 290,190 10,190"');
  })
})

describe('Square', () => {
  it('should create the shape "square".', () => {
    const shape = new Square();
    expect(shape.render()).toEqual('rect x="57.5" y="7.5" width="185" height="185"');
  })
})
