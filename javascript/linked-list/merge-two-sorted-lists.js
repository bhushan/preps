// https://www.youtube.com/watch?v=Xb4slcp1U38&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=30
// https://leetcode.com/problems/merge-two-sorted-lists/
//You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const { Node, SinglyLinkedList, printNodes } = require("./SinglyLinkedList");

const list = new SinglyLinkedList();
const list1 = list.build([1, 2, 4]);
const list2 = list.build([1, 3, 4]);

// T: O(n), S: O(n)
const mergeSortedListsWithExtraSpace = (list1, list2) => {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let first = list1,
    second = list2;

  // we will make sure we always make first as low
  if (list2.data < list1.data) {
    [first, second] = [second, first];
  }

  let start = new Node(null);
  let temp = start;

  while (first !== null) {
    if (first.data === second.data || first.data < second.data) {
      temp.next = first;
      first = first.next;
    } else {
      temp.next = second;
      second = second.next;
      // swap variables to make sure first is always low
      [first, second] = [second, first];
    }

    temp = temp.next;
  }

  if (second !== null) {
    temp.next = second;
  }

  return start.next;
};

console.log({
  expected: "1->1->2->3->4->4->null",
  result: printNodes(mergeSortedListsWithExtraSpace(list1, list2)),
});
