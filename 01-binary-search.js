const util = require('util')

class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    // Left
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.left.add(value);
      }
      return;
    }

    // Right
    if (value > this.value) {
      if (this.right === null) {
        this.right = new Node(value)
      } else {
        this.right.add(value);
      }
      return;
    }

    // @TODO: value === this.value
  }
}

class Tree {
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


const tree = new Tree();

tree.add(10);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(2);
tree.add(12);
tree.add(0);
tree.add(-1);

console.dir(tree, { depth: null });
