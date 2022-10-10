// https://leetcode.com/problems/middle-of-the-linked-list/
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const { SinglyLinkedList, printNodes } = require("./SinglyLinkedList");

const list = new SinglyLinkedList();

// T: O(n/2) S: O(1)
// 1 -> 2 -> 3 -> 4 -> Null
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL
// if we have even nodes then choose the second middle (4/2 + 4%2 + 1)
// 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// if we have odd nodes count then choose the exact middle 5/2 + 5%2
const getMiddleNode = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  // rabbit jumps 2 steps at the time
  // tortoise jumps 1 step at the time
  // as soon as rabbit reaches the end toirtoise reaches to the middle
  let rabbit = head,
    tortoise = head;

  while (rabbit !== null) {
    if (rabbit.next === null) {
      break;
    }

    tortoise = tortoise.next;
    rabbit = rabbit.next.next;
  }

  return tortoise;
};

console.log({
  expected: "3->4->5->null",
  result: printNodes(getMiddleNode(list.build([1, 2, 3, 4, 5]))),
});

console.log({
  expected: "4->5->6->null",
  result: printNodes(getMiddleNode(list.build([1, 2, 3, 4, 5, 6]))),
});
