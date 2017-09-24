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
}
