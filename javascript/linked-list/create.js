// Create a singly linked list from an array

const { SinglyLinkedList, printNodes } = require("./SinglyLinkedList");

const list = new SinglyLinkedList();

console.log({
  expected: "1->2->3->4->5->6->null",
  result: printNodes(list.build([1, 2, 3, 4, 5, 6])),
});
