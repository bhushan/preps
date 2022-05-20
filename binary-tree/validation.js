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
//      4   7     18

let BinaryTree = require("./BinaryTree");

const validPreorderSequencedArray = [
  8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, -1, 18,
];

let tree = new BinaryTree();
let validBSTRootNode = tree.build(validPreorderSequencedArray);

const invalidPreorderSequencedArray = [
  8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, -1, 13,
];

let invalidBST = new BinaryTree();
let invalidBSTRootNode = invalidBST.build(invalidPreorderSequencedArray);

function isBST(root, min, max) {
  if (root === null) {
    return true;
  }

  // console.log({ root: root.data, min, max, minC: root.data <= min, maxC: root.data >= max });

  if (root.data <= min || root.data >= max) {
    return false;
  }

  const isLeftValid = isBST(root.left, min, root.data);
  const isRightValid = isBST(root.right, root.data, max);

  return isLeftValid && isRightValid;
}

// console.log({ tree: JSON.stringify(validRootNode, null, 4) });
console.log({
  isBST: isBST(validBSTRootNode, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
});
// console.log({tree: JSON.stringify(invalidRootNode, null, 4)});
console.log({
  isBST: isBST(
    invalidBSTRootNode,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  ),
});
