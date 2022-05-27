// Create a singly linked list from an array

let SinglyLinkedList = require("./SinglyLinkedList");

const dataNodes = [1, 2, 3, 4, 5, 6];

const list = new SinglyLinkedList();

console.log({ result: JSON.stringify(list.build(dataNodes), null, 4) });
