// Reverse a linked list

// Given Linked List 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Expected Linked List NULL <- 1 <- 2 <- 3 <- 4 <- 5
// As we can see we just needs to reverse arrows (in simple words).
// We will be given the head node ie. 1, we need to simple return head node only ie. 5

const { SinglyLinkedList, printNodes } = require("./SinglyLinkedList");

const list = new SinglyLinkedList();

const reverseIterativeApproach = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let previousHead = null;

  while (head != null) {
    // loop until head becomes null ie reaches last node

    // head is 1 so next becomes 2
    const nextHead = head.next;

    // Remove linking of 1 -> 2 and make it 1 -> NULL
    head.next = previousHead;

    // for the next iteration previousHead becomes 1
    previousHead = head;

    // head ie 1 becomes 2 for next iteration
    head = nextHead;
  }

  return previousHead;
};

// Given Linked List 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Expected Linked List NULL <- 1 <- 2 <- 3 <- 4 <- 5
// ie Linked List 5 -> 4 -> 3 -> 2 -> 1 -> NULL
console.log({
  expected: "5->4->3->2->1->null",
  result: printNodes(reverseIterativeApproach(list.build([1, 2, 3, 4, 5]))),
});

console.log({
  expected: "1->null",
  result: printNodes(reverseIterativeApproach(list.build([1]))),
});

console.log({
  expected: "null",
  result: printNodes(reverseIterativeApproach(null)),
});

const reverseRecursiveApproach = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseRecursiveApproach(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

console.log({
  expected: "5->4->3->2->1->null",
  result: printNodes(reverseRecursiveApproach(list.build([1, 2, 3, 4, 5]))),
});

console.log({
  expected: "1->null",
  result: printNodes(reverseRecursiveApproach(list.build([1]))),
});

console.log({
  expected: "null",
  result: printNodes(reverseRecursiveApproach(null)),
});
