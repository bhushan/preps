/**
 * https://leetcode.com/problems/binary-tree-right-side-view
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let BinaryTree = require("./BinaryTree");

const rightView = (head, result, depth) => {
  if (head == null) return;

  if (depth == result.length) {
    result.push(head.data);
  }

  rightView(head.right, result, depth + 1);
  rightView(head.left, result, depth + 1);
};

const rightSideView = (root) => {
  const result = [];
  rightView(root, result, 0);
  return result;
};

const preorderSequencedArray = [1, 2, -1, 5, -1, -1, 3, -1, 4];

let tree = new BinaryTree();

console.log({
  expected: [1, 3, 4],
  result: rightSideView(tree.build(preorderSequencedArray)),
});
