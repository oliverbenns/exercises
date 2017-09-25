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

  remove(value) {
    // Left
    if (this.left && value < this.value) {
      if (this.left.value === value) {
        this.left = null;
      } else {
        this.left.remove(value);
      }
      return;
    }

    // Right
    if (this.right && value > this.value) {
      if (this.right.value === value) {
        this.right = null;
      } else {
        this.right.remove(value);
      }
      return;
    }
  }

  map(fn) {
    if (this.left) {
      this.left.map(fn);
    }

    fn(this);

    if (this.right) {
      this.right.map(fn);
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
