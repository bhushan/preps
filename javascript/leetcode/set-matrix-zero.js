//  https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let isColumnContainsZero = false;

  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) isColumnContainsZero = true;
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = matrix[0][col] = 0;
      }
    }
  }

  for (let row = matrix.length - 1; row > 0; row--) {
    for (let col = matrix[0].length - 1; col > 0; col--) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }

    if (isColumnContainsZero) matrix[row][0] = 0;
  }

  return matrix;
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log({
  expected: [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  result: setZeroes(matrix),
});

matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];

console.log({
  expected: [
    [0, 0, 3, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  result: setZeroes(matrix),
});
