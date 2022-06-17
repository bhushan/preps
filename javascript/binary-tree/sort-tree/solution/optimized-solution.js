let unsortedNodes = [
  { nodeId: "4", name: "Four", parentId: "2", previousSiblingId: "6" },
  { nodeId: "8", name: "Eight", parentId: "7", previousSiblingId: null },
  { nodeId: "2", name: "Two", parentId: "1", previousSiblingId: null },
  { nodeId: "6", name: "Six", parentId: "2", previousSiblingId: null },
  { nodeId: "3", name: "Three", parentId: null, previousSiblingId: null },
  { nodeId: "5", name: "Five", parentId: "4", previousSiblingId: null },
  { nodeId: "1", name: "One", parentId: null, previousSiblingId: "3" },
  { nodeId: "7", name: "Seven", parentId: null, previousSiblingId: "1" },
];

const alreadyVisitedNodes = new Set();
const alreadyVisitedChildIndexes = new Set();

// sort so that we will have all the possible parents first
let result = [...unsortedNodes.sort((a, b) => a.nodeId - b.nodeId)];

for (let index = 0; index < unsortedNodes.length; index++) {
  // current node
  const node = unsortedNodes[index];

  // if pushing children for the first time then add children property
  if (!node.children) {
    node.children = [];
  }

  // mark node as visited
  alreadyVisitedNodes.add(node.nodeId);

  // current nodes parent we have already visited so we can find parent and push current node as its child
  if (alreadyVisitedNodes.has(node.parentId)) {
    // find parent node, we will always find because we already visited it before
    const parent = result.find((n) => node.parentId === n.nodeId);

    // push node into parent
    parent.children.push(node);
    alreadyVisitedChildIndexes.add(index);
  }
}

// remove all the unwanted child elements from top level
result = result.filter((_, index) => !alreadyVisitedChildIndexes.has(index));
console.log({ x: JSON.stringify(result, null, 4) });
