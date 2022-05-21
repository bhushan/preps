/*
 * https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
  const arrayOfChar = s.split("");
  const arrayOfCharCode = arrayOfChar.map((c) => c.charCodeAt());

  let left = 0;
  let right = arrayOfCharCode.length - 1;

  if (left === right) return 0;

  let steps = 0;

  while (left < right) {
    if (arrayOfCharCode[left] === arrayOfCharCode[right]) {
      left++;
      right--;
    } else {
      if (arrayOfCharCode[left] === 97 && arrayOfCharCode[right] > 97) {
        arrayOfCharCode[right] = arrayOfCharCode[right] - 1;
      } else if (arrayOfChar[right] === 97 && arrayOfCharCode[left] > 97) {
        arrayOfCharCode[left] = arrayOfCharCode[left] - 1;
      } else if (arrayOfCharCode[left] > arrayOfCharCode[right]) {
        arrayOfCharCode[left] = arrayOfCharCode[left] - 1;
      } else {
        arrayOfCharCode[right] = arrayOfCharCode[right] - 1;
      }

      steps++;
    }
  }

  return steps;
}

console.log({ result: theLoveLetterMystery("abc"), expected: 2 });
console.log({ result: theLoveLetterMystery("abcba"), expected: 0 });
console.log({ result: theLoveLetterMystery("abcd"), expected: 4 });
console.log({ result: theLoveLetterMystery("cba"), expected: 2 });
