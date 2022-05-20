// Check if given Tree is valid BST or not?

// Binary Tree means each root node will have only two childs
// Binary Search Tree means,
// Left Node of the root should be lesser than root node
// Right Node of the root should be greater than root node
// Left Subtree should be lesser than root
// Right Subtree should be greater than root

// Valid BST
//         8
//        / \
//       3  10
//      / \   \
//     1   6    14
//       /  \    \
//      4   7     13

let BinaryTree = require("./BinaryTree");

const preorderSequencedArray = [
  8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, -1, 13,
];

let tree = new BinaryTree();
let root = tree.build(preorderSequencedArray);

// console.log({tree: JSON.stringify(root, null, 4)});
