// Count nodes of binary tree

const BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const tree = new BinaryTree();

const root = tree.build(preorderSequencedArray);

const count = (root) => {
  if (root === null) {
    return 0;
  }

  const countOfLeftNodes = count(root.left);
  const countOfRightNodes = count(root.right);

  return countOfLeftNodes + countOfRightNodes + 1;
};
//   1
//  2  3
// 4 5  6
// output: 6
console.log({ count: count(root) });
