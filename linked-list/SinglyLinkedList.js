class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = class SinglyLinkedList {
  build(nodes) {
    if (nodes === null) {
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
