// Traverse a Binary tree using Inorder sequence

let BinaryTree = require("./BinaryTree");

// Inorder Traversal means:
// First we print all the left node
// Then we print root node
// Then we print right node
// Print nothings when node is null
const inorderTraversal = (root) => {
  if (root === null) {
    return;
  }


  inorderTraversal(root.left);

  console.log({ data: root.data });

  inorderTraversal(root.right);
};

const execute = (nodes) => {
  let tree = new BinaryTree();

  let root = tree.build(nodes);

  inorderTraversal(root);
};

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

//   1
//  2  3
// 4 5  6

// output: 4 2 5 1 3 6
console.log({ root: execute(preorderSequencedArray) });
