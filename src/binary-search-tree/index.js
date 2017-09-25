const Tree = require('./tree');

const tree = new Tree();

tree.add(5);

tree.add(2);
tree.add(3);
tree.add(4);

tree.remove(3);

// tree.remove(3);
// tree.add(4);
// tree.add(5);
// tree.add(6);
// tree.add(7);
// tree.add(8);
// tree.add(2);
// tree.add(12);
// tree.add(0);
// tree.add(-1);


// tree.remove(2);

// console.log('tree', tree);

// const array = tree.flatten();
// console.log('array', array);

// const test = tree.map(v => {
//   console.log('v', v);
//   return v;
// })

// console.log('test', test);

// const node = tree.search(11);
// console.log('node', node);

console.dir(tree, { depth: null });

