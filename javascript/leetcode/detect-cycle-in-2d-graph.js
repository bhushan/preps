// https://leetcode.com/problems/detect-cycles-in-2d-grid/description/
// Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.
// A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell,
// you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), 
// if it has the same value of the current cell.
// Also, you cannot move to the cell that you visited in your last move.
// For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.
// Return true if any cycle of the same value exists in grid, otherwise, return false.

// TC: O(n*m)
// SC: O(n*m)
var containsCycle = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function dfs(x, y, prevX, prevY, value) {
        if (visited[x][y]) return true;

        visited[x][y] = true;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === value && !(nx === prevX && ny === prevY)) {
                if (visited[nx][ny] || dfs(nx, ny, x, y, value)) {
                    return true;
                }
            }
        }

        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && dfs(i, j, -1, -1, grid[i][j])) {
                return true;
            }
        }
    }

    return false;
};


// a a a a
// a b b a
// a b b a
// a a a a
let grid = [["a", "a", "a", "a"], ["a", "b", "b", "a"], ["a", "b", "b", "a"], ["a", "a", "a", "a"]]

console.log({ expected: true, result: containsCycle(grid) });

// a b b
// b z b
// b b b
grid = [["a", "b", "b"], ["b", "z", "b"], ["b", "b", "a"]];

console.log({ expected: false, result: containsCycle(grid) });

// c c c a
// c d c c
// c c e c
// f c c c
grid = [["c", "c", "c", "a"], ["c", "d", "c", "c"], ["c", "c", "e", "c"], ["f", "c", "c", "c"]]

console.log({ expected: true, result: containsCycle(grid) });
