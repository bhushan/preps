// Create binaray tree from array given in preorder sequence

let BinaryTree = require("./BinaryTree");

const execute = (nodes) => {
  let tree = new BinaryTree();

  return tree.build(nodes);
};

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

//   1
//  2  3
// 4 5  6

console.log({ root: JSON.stringify(execute(preorderSequencedArray), null, 4) });
