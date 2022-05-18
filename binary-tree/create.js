// Create binaray tree from array given in preorder sequence

let BinaryTree = require("./BinaryTree");

const execute = (nodes) => {
  let tree = new BinaryTree();

  return tree.build(nodes);
};

const preorderSequencedArray = [2, 2, 5, -1, -1, 3, -1, 6, -1, 1];

console.log({ root: execute(preorderSequencedArray) });
