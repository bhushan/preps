class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinaryTree {
  constructor() {
    this.index = -1;
  }

  build(nodes) {
    this.index++;

    if (this.index >= nodes.length || nodes[this.index] === -1) {
      return null;
    }

    let newNode = new Node(nodes[this.index]);
    newNode.left = this.build(nodes);
    newNode.right = this.build(nodes);

    return newNode;
  }
};
