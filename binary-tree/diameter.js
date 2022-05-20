// Print diameter of the given binary tree from array given in preorder sequence

const BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const tree = new BinaryTree();
const root = tree.build(preorderSequencedArray);

const leftTree = (root) => {
  if (root === null) {
    return;
  }

  leftTree(root.left);
  console.log({ root: root.data });
};

const rightTree = (root) => {
  if (root === null) {
    return;
  }

  console.log({ root: root.data });
  rightTree(root.right);
};

//   1
//  2  3
// 4 5  6
// output: 4 2 1 3 6
leftTree(root);
rightTree(root.right);
