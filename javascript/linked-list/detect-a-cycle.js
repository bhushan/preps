// https://www.youtube.com/watch?v=354J83hX7RI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=35
// https://leetcode.com/problems/linked-list-cycle/
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again
// by continuously following the next pointer. Internally, pos is used to denote the index of the node
// that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

const { SinglyLinkedList, printNodes } = require("./SinglyLinkedList");

const list = new SinglyLinkedList();

// attaches node at the end of the linked list
const makeCycle = (head, node) => {
  const start = head;
  while (head.next !== null) {
    head = head.next;
  }

  head.next = node;

  return start;
};

// T: O(n) S: O(1)
const hasCycle = (head) => {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head,
    fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

const head = list.build([1, 2, 3, 4, 5, 6]);
const cyclicLinkedListHead = makeCycle(head, head.next.next);

const acyclicLinkedListHead = list.build([1, 2, 3, 4, 5, 6]);

console.log({
  expected: true,
  result: hasCycle(cyclicLinkedListHead),
});

console.log({
  expected: false,
  result: hasCycle(acyclicLinkedListHead),
});

const dataNodes = [
  -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14,
  14, 2, 13, -24, 21, 23, -21, 5,
];
const linkedList = list.build(dataNodes);

console.log({
  expected: false,
  result: hasCycle(linkedList),
});
