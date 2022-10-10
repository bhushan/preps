const Node = class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

const printNodes = (head) => {
  let output = "";
  while (head !== null) {
    output += head.data + "->";
    head = head.next;
  }
  return output + "null";
};

const SinglyLinkedList = class SinglyLinkedList {
  build(nodes) {
    if (nodes === null || !Array.isArray(nodes)) {
      return null;
    }

    let previousNode = null;
    let head = null;

    for (let index = 0; index < nodes.length; index++) {
      const newNode = new Node(nodes[index]);

      if (index === 0) {
        previousNode = newNode;
        head = newNode;
        continue;
      }

      previousNode.next = newNode;
      previousNode = newNode;
    }

    return head;
  }
};

module.exports = {
  Node,
  SinglyLinkedList,
  printNodes,
};
