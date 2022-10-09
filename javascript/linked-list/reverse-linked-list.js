// Reverse a linked list

// Given Linked List 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Expected Linked List NULL <- 1 <- 2 <- 3 <- 4 <- 5
// As we can see we just needs to reverse arrows (in simple words).
// We will be given the head node ie. 1, we need to simple return head node only ie. 5

const SinglyLinkedList = require("./SinglyLinkedList");

const dataNodes = [1, 2, 3, 4, 5];

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
  result: JSON.stringify(
    reverseIterativeApproach(list.build(dataNodes)),
    null,
    4
  ),
});

console.log({
  result: JSON.stringify(reverseIterativeApproach(list.build([1])), null, 4),
});

console.log({
  expected: "null",
  result: JSON.stringify(reverseIterativeApproach(null), null, 4),
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
  result: JSON.stringify(
    reverseRecursiveApproach(list.build(dataNodes)),
    null,
    4
  ),
});

console.log({
  result: JSON.stringify(reverseRecursiveApproach(list.build([1])), null, 4),
});

console.log({
  result: JSON.stringify(reverseRecursiveApproach(null), null, 4),
});
