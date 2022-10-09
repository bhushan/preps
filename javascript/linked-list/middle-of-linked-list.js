// https://leetcode.com/problems/middle-of-the-linked-list/
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// 1 -> 2 -> 3 -> 4 -> Null
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL
// if we have even nodes then choose the second middle (4/2 + 4%2 + 1)
// 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// if we have odd nodes count then choose the exact middle 5/2 + 5%2

const SinglyLinkedList = require("./SinglyLinkedList");

const dataNodes = [1, 2, 3, 4, 5];

const list = new SinglyLinkedList();

// T: O(n + n/2) S: O(1)
const getMiddleNodeBruteForce = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let length = 0;

  let currentHead = head;
  while (currentHead !== null) {
    currentHead = currentHead.next;
    length++;
  }

  let centerPosition = Math.floor(length / 2) + (length % 2);

  if (length % 2 === 0) {
    centerPosition++;
  }

  let centerNode = head;

  for (let index = 0; index < centerPosition; index++) {
    centerNode = centerNode.next;
  }

  return centerNode;
};

console.log({
  expected: "4->5",
  result: JSON.stringify(getMiddleNodeBruteForce(list.build(dataNodes))),
});
