// Print all the values on the Kth level of the binary tree

let BinaryTree = require("./BinaryTree");

// Create a queue and push root element and null value to it.
// Why null because whenever we get null from queue, we will assume that all the elements from the level are printed
// Initialize counter to 1 because we are already at first level
// Loop through results untill results are empty
// While looping remove first element from queue (results) and check if it has null nodes, if not then push into queue.
// If current node is null, means we have printed all elements for level, then check if queue is empty means everything is printed
// If queue is not empty then it means we have added all the next level elements to the queue so push null again to set marker for next level ending
// Finally if queue is empty and current node is null means all nodes are printed
function levelOrderTraversal(root, level) {
  const results = [];

  if (root === null) {
    return results;
  }

  results.push(root);
  results.push(null);
  let counter = 1;

  while (results.length !== 0) {
    const currentNode = results.shift();

    if (currentNode === null) {
      if (results.length === 0) {
        break;
      } else {
        results.push(null);
        counter++;
      }
    } else {
      if (counter === level) {
        console.log(currentNode.data);
      }

      if (currentNode.left !== null) {
        results.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        results.push(currentNode.right);
      }
    }
  }
}

//   1
//  2  3
// 4 5  6

const preorderSequencedArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const tree = new BinaryTree();
const root = tree.build(preorderSequencedArray);
const level = 3;

// output: 4 5 6 of level 3
levelOrderTraversal(root, level);
