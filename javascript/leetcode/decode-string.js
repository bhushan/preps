// https://leetcode.com/problems/decode-string/
//Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
// is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces,
// square brackets are well-formed, etc. Furthermore, you may assume that the original data
// does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

const decode = (queue) => {
  let num = 0;
  let sb = "";

  while (!!queue.length) {
    const c = queue.shift();
    if (/\d/.test(c)) {
      num = num * 10 + parseInt(c);
    } else if (c === "[") {
      let sub = decode(queue);
      for (let i = 0; i < num; i++) sb += sub;
      num = 0;
    } else if (c == "]") {
      break;
    } else {
      sb += c;
    }
  }

  return sb;
};

const decodeString = function (str) {
  let queue = str.split("");

  return decode(queue);
};

console.log({
  isCorrect: "bc" === decodeString("bc"),
});
console.log({
  isCorrect: "bcbc" === decodeString("2[bc]"),
});
console.log({
  isCorrect: "bcbcbcbcbcbcbcbcbcbc" === decodeString("10[bc]"),
});
console.log({
  isCorrect: "aaabcbc" === decodeString("3[a]2[bc]"),
});
console.log({
  isCorrect: "accaccacc" === decodeString("3[a2[c]]"),
});
console.log({
  isCorrect: "abccdcdcdxyz" === decodeString("abc3[cd]xyz"),
});
console.log({
  isCorrect: "abccbccabccbccabccbcc" === decodeString("3[a2[b2[c]]]"),
});
