/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function transpose(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

function gridChallenge(grid) {
  const newGrid = grid.map((str) => {
    return str
      .split("")
      .map((char) => char.charCodeAt())
      .sort((a, b) => a - b);
  });

  const transposedGrid = transpose(newGrid);

  for (var i = 0; i < transposedGrid.length; i++) {
    for (var j = 1; j < transposedGrid[i].length; j++) {
      if (transposedGrid[i][j] < transposedGrid[i][j - 1]) {
        return "NO";
      }
    }
  }

  return "YES";
}

console.log({
  result: gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]),
  expected: "YES",
});

console.log({
  result: gridChallenge(["mpxz", "abcd", "wlmf"]),
  expected: "NO",
});
