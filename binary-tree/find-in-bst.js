// find a node inside binary search tree
let BinaryTree = require("./BinaryTree");

const validPreorderSequencedArray = [
  8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, -1, 18,
];

let tree = new BinaryTree();

let root = tree.build(validPreorderSequencedArray);

const isNodePresent = (root, target) => {
  if (root === null) {
    return false;
  }

  if (root.data === target) {
    return true;
  }

  if (root.data < target) {
    return isNodePresent(root.right, target);
  }

  return isNodePresent(root.left, target);
};

console.log({ result: isNodePresent(root, 4), expected: true });
console.log({ result: isNodePresent(root, 100), expected: false });
