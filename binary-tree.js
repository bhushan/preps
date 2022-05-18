// Create binaray tree from array given in preorder sequence

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
}

const execute = (nodes) => {
  let tree = new BinaryTree();

  return tree.build(nodes);
};

const preorderSequencedArray = [2, 2, 5, -1, -1, 3, -1, 6, -1, 1];

console.log({ root: execute(preorderSequencedArray) });
