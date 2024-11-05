// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
//
// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
//
// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
//
// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
//
// It's guaranteed that each city can reach city 0 after reorder.
//
//  
//
// Example 1:
//
//
// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 2:
//
//
// Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
// Output: 2
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 3:
//
// Input: n = 3, connections = [[1,0],[2,0]]
// Output: 0
//  
//
// Constraints:
//
// 2 <= n <= 5 * 104
// connections.length == n - 1
// connections[i].length == 2
// 0 <= ai, bi <= n - 1
// ai != bi

function minReorder(n, connections) {
    // Step 1: Build the graph with both directions
    const graph = Array.from({ length: n }, () => []);

    // Each connection is directed, so we add a flag to indicate the direction
    connections.forEach(([a, b]) => {
        graph[a].push([b, 1]); // 1 means the edge is directed from a to b
        graph[b].push([a, 0]); // 0 means the edge is directed towards a from b
    });

    let reorientations = 0;
    const visited = new Array(n).fill(false);

    function dfs(city) {
        visited[city] = true;

        for (const [nextCity, needsReorient] of graph[city]) {
            if (!visited[nextCity]) {
                // If `needsReorient` is 1, we have to reverse this edge
                reorientations += needsReorient;
                dfs(nextCity);
            }
        }
    }

    // Start DFS from city 0
    dfs(0);

    return reorientations;
}

let n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]

console.log({ expected: 3, result: minReorder(n, connections) });

n = 5, connections = [[1, 0], [1, 2], [3, 2], [3, 4]]

console.log({ expected: 2, result: minReorder(n, connections) });

n = 3, connections = [[1, 0], [2, 0]]

console.log({ expected: 0, result: minReorder(n, connections) });
