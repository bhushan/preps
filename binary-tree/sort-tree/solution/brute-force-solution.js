// Brute force
let unsortedNodes = [
  {
    nodeId: "4",
    name: "Four",
    parentId: "2",
    previousSiblingId: "6",
  },
  {
    nodeId: "8",
    name: "Eight",
    parentId: "7",
    previousSiblingId: null,
  },
  {
    nodeId: "2",
    name: "Two",
    parentId: "1",
    previousSiblingId: null,
  },
  {
    nodeId: "6",
    name: "Six",
    parentId: "2",
    previousSiblingId: null,
  },
  {
    nodeId: "3",
    name: "Three",
    parentId: null,
    previousSiblingId: null,
  },
  {
    nodeId: "5",
    name: "Five",
    parentId: "4",
    previousSiblingId: null,
  },
  {
    nodeId: "1",
    name: "One",
    parentId: null,
    previousSiblingId: "3",
  },
  {
    nodeId: "7",
    name: "Seven",
    parentId: null,
    previousSiblingId: "1",
  },
];

const alreadyVisitedChildsAtTop = new Set();

for (let i = 0; i < unsortedNodes.length; i++) {
  const node = unsortedNodes[i];

  for (let j = 0; j < unsortedNodes.length; j++) {
    if (i === j) {
      continue;
    }

    const parentNode = unsortedNodes[j];
    if (!parentNode.children) {
      parentNode.children = [];
    }

    if (node.parentId === parentNode.nodeId) {
      const index = unsortedNodes.indexOf(node);
      alreadyVisitedChildsAtTop.add(index);
      parentNode.children.push(node);
    }
  }
}

unsortedNodes = unsortedNodes.filter(
  (_, index) => !alreadyVisitedChildsAtTop.has(index)
);

console.log({ x: JSON.stringify(unsortedNodes, null, 4) });
