// Reverse a linked list

// Given Linked List 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Expected Linked List NULL <- 1 <- 2 <- 3 <- 4 <- 5
// As we can see we just needs to reverse arrows (in simple words).
// We will be given the head node ie. 1, we need to simple return head node only ie. 5

const SinglyLinkedList = require("./SinglyLinkedList");

const dataNodes = [1, 2, 3, 4, 5];

const list = new SinglyLinkedList();
const head = list.build(dataNodes);

const reverse = (head) => {
  let newHead = null;

  while (head != null) { // loop until head becomes null ie reaches last node
    const next = head.next; // temporarily store next node to next variable
    head.next = newHead; // now heads next becomes new head
    newHead = head; // new head is updated with current head
    head = next; // store next node as head only for next iteration
  }

  return newHead;
};

// Given Linked List 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Expected Linked List NULL <- 1 <- 2 <- 3 <- 4 <- 5
console.log({ result: JSON.stringify(reverse(head), null, 4) });
