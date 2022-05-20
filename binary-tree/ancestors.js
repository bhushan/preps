// Find number of ancestors for given node in binary tree from array given in preorder sequence

const BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const tree = new BinaryTree();
const root = tree.build(preorderSequencedArray);

const target = 5;
const ancestors = [];

const numberOfAncestors = (root) => {
  if (root === null) {
    return false;
  }

  console.log({ root: root.data });

  if (root.data === target) {
    return true;
  }

  if (numberOfAncestors(root.left) || numberOfAncestors(root.right)) {
    ancestors.push(root.data);
    return true;
  }

  return false;
};

numberOfAncestors(root);

//   1
//  2  3
// 4 5  6
// output: 2
console.log({ numberOfAncestors: ancestors.length, ancestors });
