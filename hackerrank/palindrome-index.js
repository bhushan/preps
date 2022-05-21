/*
 * Find the index of character, which can be removed from string to make it palindrome
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 * NOTE: There is something wrong with hackerrank test cases 10, ... 14, those are ambiguous
 */

function palindromeIndex(s) {
  s = s.split("");
  let left = 0;
  let right = s.length - 1;

  let result = -1;

  while (left < right) {
    if (s[left] !== s[right]) {
      result = left;
      left++;
    } else {
      left++;
      right--;
    }
  }

  return result;
}

console.log(palindromeIndex("baa") === 0);
console.log(palindromeIndex("aaa") === -1);
console.log(palindromeIndex("bxaab") === 1);
console.log(palindromeIndex("baxab") === -1);
console.log(palindromeIndex("quyjjdcgsvvsgcdjjyq") === 1);
console.log(
  palindromeIndex("hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh") === 8
);
console.log(
  palindromeIndex(
    "fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf"
  ) === 33
);
