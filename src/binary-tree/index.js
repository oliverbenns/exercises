const Tree = require('./tree');

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

const node = tree.search(200);
console.log('node', node);
