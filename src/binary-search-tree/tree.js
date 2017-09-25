const Node = require('./node');

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      this.root.add(value);
    }
  }

  remove(value) {
    if (this.root.value === value) {
      this.root = null;
      return this.root.value;
    }

    return this.root.remove(value);
  }

  // @TODO: This isn't really map()
  map(fn) {
    if (this.root === null) {
      return null;
    }

    return this.root.map(fn);
  }

  flatten() {
    const array = [];

    this.map(node => array.push(node.value));

    return array;
  }

  size() {
    let size = 0;
    this.map(n => size++);

    return size;
  }

  search(value) {
    if (this.root === null) {
      return null;
    }

    return this.root.search(value);
  }

}
