// Create binaray tree from array given in preorder sequence

let BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();

//   1
//  2  3
// 4 5  6

console.log({ root: JSON.stringify(tree.build(preorderSequencedArray), null, 4) });
