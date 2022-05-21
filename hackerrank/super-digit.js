/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  if (n.length === 1) {
    return n;
  }

  const sum =
    n.split("").reduce((carry, value) => parseInt(carry) + parseInt(value), 0) *
    k;

  return superDigit(sum + "", 1);
}

console.log({ result: superDigit("148", 3), expected: 3 });
console.log({ result: superDigit("9876", 4), expected: 3 });
