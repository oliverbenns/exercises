module.exports = class Node {
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
  }

  search(value) {
    if (this.value === value) {
      return this;
    }

    if (this.left && value < this.value) {
      return this.left.search(value);
    }

    if (this.right && value > this.value) {
      return this.right.search(value);
    }

    return null;
  }
}
