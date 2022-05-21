// https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four&h_r=next-challenge&h_v=zen

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  let totalBribed = 0;
  let firstExpectation = 1;
  let secondExpectation = 2;
  let thirdExpectation = 3;

  for (let i = 0; i < q.length; i++) {
    if (q[i] === firstExpectation) {
      firstExpectation++;
      secondExpectation++;
      thirdExpectation++;
    } else if (q[i] === secondExpectation) {
      totalBribed++;
      secondExpectation++;
      thirdExpectation++;
    } else if (q[i] === thirdExpectation) {
      totalBribed = totalBribed + 2;
      thirdExpectation++;
    } else {
      return "Too chaotic";
    }
  }
}

console.log({
  result: minimumBribes([2, 1, 5, 3, 4]),
  expected: "Too chaotic",
});

console.log({
  result: minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]),
  expected: "Too chaotic",
});
