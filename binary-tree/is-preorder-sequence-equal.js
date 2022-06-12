// Check if preorder sequence of given two binary trees are equal

let BinaryTree = require("./BinaryTree");
const preorderSequencedArray = [1, 2, 4, -1, -1, 3];
const firstTree = new BinaryTree();
const firstRoot = firstTree.build(preorderSequencedArray);
const preorderSequencedSecondArray = [1, 3, 2, 4];
const secondTree = new BinaryTree();
const secondRoot = secondTree.build(preorderSequencedSecondArray);

const preorderSequencedFailingArray = [1, 2, 4, -1, -1, 3];
const firstFailingTree = new BinaryTree();
const firstFailingRoot = firstFailingTree.build(preorderSequencedFailingArray);
const preorderSequencedSecondFailingArray = [1, 3, 4, 5];
const secondFailingTree = new BinaryTree();
const secondFailingRoot = secondFailingTree.build(
  preorderSequencedSecondFailingArray
);

// Inorder Traversal means:
// First we print all the left node
// Then we print root node
// Then we print right node
// Print nothings when node is null
const inorderTraversal = (root, result) => {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left, result);

  result.push(root.data);

  inorderTraversal(root.right, result);
};

// first tree
//   1
//  2
// 4 3

// second tree
//    1
//   3
//  2
// 4
const isPreorderSequenceEqual = (firstRoot, secondRoot) => {
  const firstPreorderSequence = [];
  inorderTraversal(firstRoot, firstPreorderSequence);
  const secondPreorderSequence = [];
  inorderTraversal(secondRoot, secondPreorderSequence);
  let answer = true;
  firstPreorderSequence.forEach((value, index) => {
    if (secondPreorderSequence[index] !== value) {
      answer = false;
    }
  });

  return answer;
};

console.log({
  result: isPreorderSequenceEqual(firstRoot, secondRoot),
  expected: true,
});

console.log({
  result: isPreorderSequenceEqual(firstFailingRoot, secondFailingRoot),
  expected: false,
});
