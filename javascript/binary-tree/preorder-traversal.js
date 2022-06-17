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

  console.log({ data: root.data });

  preorderTraversal(root.left);
  preorderTraversal(root.right);
};

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();
let root = tree.build(preorderSequencedArray);

//   1
//  2  3
// 4 5  6

// output: 1 2 4 5 3 6
preorderTraversal(root);
