//  Height of binary tree

const BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const tree = new BinaryTree();

const root = tree.build(preorderSequencedArray);

const height = (root) => {
  if (root === null) {
    return 0;
  }

  const heightOfLeftNodes = height(root.left);
  const heightOfRightNodes = height(root.right);

  return Math.max(heightOfLeftNodes, heightOfRightNodes) + 1;
};

//   1
//  2  3
// 4 5  6
// output: 3
console.log({ height: height(root) });
