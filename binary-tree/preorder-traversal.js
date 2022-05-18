// Traverse a Binary tree using Preorder sequence

let BinaryTree = require("./BinaryTree");

// Preorder Traversal means:
// Start from root node
// Then traverse to the left
// Then traverse to the right
// Repeat same for all nodes
// Print nothings when node is null
const preorderTraversal = (root) => {
  if (root === null) {
    return;
  }

  console.log({ root });

  preorderTraversal(root.left);
  preorderTraversal(root.right);
};

const execute = (nodes) => {
  let tree = new BinaryTree();

  let root = tree.build(nodes);

  preorderTraversal(root);
};

const preorderSequencedArray = [2, 2, 5, -1, -1, 3, -1, 6, -1, 1];

console.log({ root: execute(preorderSequencedArray) });
