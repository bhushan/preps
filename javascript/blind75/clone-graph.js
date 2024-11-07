// https://leetcode.com/problems/clone-graph/description/
// Given a reference of a node in a connected undirected graph.
//
// Return a deep copy (clone) of the graph.
//
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
//
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
//  
//
// Test case format:
//
// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
//
// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
//
// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

const Node = class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

// TC O(n+e) n = nodes, e = number of edges
// SC O(n)
const cloneGraph = (node) => {
    let isVisited = new Map();

    function dfs(node) {
        if (node === null) return node;

        if (isVisited.has(node)) {
            return isVisited.get(node);
        }

        const clone = new Node(node.val)

        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
}

let node = new Node(1, [new Node(2, [new Node(3, [])])]);

console.log({ expected: JSON.stringify(node), result: JSON.stringify(cloneGraph(node)) });

node = new Node(4, [new Node(6, [new Node(3, [new Node(5, [])])])]);

console.log({ expected: JSON.stringify(node), result: JSON.stringify(cloneGraph(node)) });
