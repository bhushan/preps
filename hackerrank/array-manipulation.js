// https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  const arr = Array.from({ length: n + 1 }).fill(0);

  queries.forEach(([a, b, k]) => {
    arr[a] += k;
    if (b + 1 <= n) arr[b] -= k;
  });

  let sum = 0, max = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    max = Math.max(max, sum);
  }

  return max;
}

console.log({
  result: arrayManipulation(10, [
    [1, 5, 3],
    [6, 8, 5],
  ]),
  expected: 5,
});
