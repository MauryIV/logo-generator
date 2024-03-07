class Shapes {
  constructor(shape) {
    this.shape = shape;
  }
}

class Triangle extends Shapes {
  constructor(shape) {
    super(shape);
  }
  render() {
    return 'polygon points="150,10 290,190 10,190"';
  }
}

class Circle extends Shapes {
  constructor(shape) {
    super(shape);
  }
  render() {
    return 'circle cx="150" cy="100" r="90"';
  }
}

class Square extends Shapes {
  constructor(shape) {
    super(shape);
  }
  render() {
    return 'rect x="57.5" y="7.5" width="185" height="185"';
  }
}

module.exports = { Triangle, Square, Circle };
