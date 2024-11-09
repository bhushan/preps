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
var containsCycle = function(grid) {
    const gridRowLength = grid.length;
    const gridColLength = grid[0].length;
    const isVisited = new Set();

    const isCycle = ({ row, col, value, preRow, preCol }) => {
        if (row < 0 || col < 0 || row >= gridRowLength || col >= gridColLength) return false;

        const current = grid[row][col];

        if (current !== value) return false;

        if (isVisited.has(`${row}_${col}`)) return true;

        isVisited.add(`${row}_${col}`);

        for (let move of [-1, 1]) {
            if (row + move !== preRow) {
                if (isCycle({ row: row + move, col, value, preRow: row, preCol: col })) return true;;
            }

            if (col + move !== preCol) {
                if (isCycle({ row, col: col + move, value, preRow: row, preCol: col })) return true;
            }
        }
        return false;
    };

    for (let row = 0; row < gridRowLength; row++) {
        for (let col = 0; col < gridColLength; col++) {
            if (isVisited.has(`${row}_${col}`)) continue;
            let value = grid[row][col]

            if (isCycle({ row, col, value, preRow: -1, preCol: -1 })) return true;
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
