// Traverse a Binary tree using Postorder sequence

let BinaryTree = require("./BinaryTree");

// Postorder Traversal means:
// Start from left
// Then traverse to the right
// Then traverse to the root
// Repeat same for all nodes
// Print nothings when node is null
const postorderTraversal = (root) => {
  if (root === null) {
    return;
  }

  postorderTraversal(root.left);
  postorderTraversal(root.right);
  console.log({ data: root.data });
};

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();
let root = tree.build(preorderSequencedArray);

//   1
//  2  3
// 4 5  6

// output: 4 5 2 6 3 1 
postorderTraversal(root);
