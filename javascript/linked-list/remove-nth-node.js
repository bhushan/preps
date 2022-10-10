// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// https://www.youtube.com/watch?v=Lhu3MsXZy-Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=31
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// 4 is deleted from linked list

const SinglyLinkedList = require("./SinglyLinkedList");

const list = new SinglyLinkedList();

// if n is greater than number of nodes then return linked list as it is
// if we have only one node in linked list and we want to delete that then return null
// T: O(n) S: O(1)
const deleteNode = (head, n) => {
  if (head === null || (head.next === null && n === 1)) {
    return null;
  }

  let tortoise = head,
    rabbit = head;

  for (let index = 0; index < n; index++) {
    rabbit = rabbit.next;
  }

  if (rabbit === null) {
    return tortoise.next;
  }

  // lazyly update counter so that we reach one node earlier than to be deleted
  while (rabbit.next !== null) {
    rabbit = rabbit.next;
    tortoise = tortoise.next;
  }

  if (tortoise !== null && tortoise.next !== null) {
    tortoise.next = tortoise.next.next;
  }

  // return head because objects are referenced, so deleting from tortoise effects head,
  // in Java or CPP use pointers
  return head;
};

const printNodes = (head) => {
  let output = "";
  while (head !== null) {
    output += head.data + "->";
    head = head.next;
  }
  return output + "null";
};

console.log({
  expected: "null",
  result: printNodes(deleteNode(list.build([1]), 1)),
});

console.log({
  expected: "2->null",
  result: printNodes(deleteNode(list.build([1, 2]), 2)),
});

console.log({
  expected: "1->2->3->5->null",
  result: printNodes(deleteNode(list.build([1, 2, 3, 4, 5]), 2)),
});

console.log({
  expected: "1->3->4->5->6->null",
  result: printNodes(deleteNode(list.build([1, 2, 3, 4, 5, 6]), 5)),
});
