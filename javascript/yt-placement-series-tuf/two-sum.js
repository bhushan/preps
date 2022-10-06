// https://leetcode.com/problems/two-sum/
// https://www.youtube.com/watch?v=dRUpbt8vHpo&list=PLgUwDviBIf0rVwua0kKYlsS_ik_1lyVK_&index=1
//
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//
// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
//
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// O(n^2) solution
const twoSumBruteForce = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    const numOne = nums[index];
    for (let j = index + 1; j < nums.length; j++) {
      const numTwo = nums[j];
      if (numOne + numTwo == target) {
        return [index, j];
      }
    }
  }

  return [];
};

const nums = [2, 7, 11, 15];
let target = 9;

console.log({
  result: twoSumBruteForce(nums, target),
  expected: [0, 1],
});

target = 10;

console.log({
  result: twoSumBruteForce(nums, target),
  expected: [],
});

// O(n) solution
// const nums = [2, 7, 11, 15];

const twoSum = (nums, target) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), index];
    } else {
      // JS MAP searches based on 'key', so we store number as key and index as value
      map.set(num, index);
    }
  }

  return [];
};

target = 9;

console.log({
  result: twoSum(nums, target),
  expected: [0, 1],
});

target = 10;

console.log({
  result: twoSum(nums, target),
  expected: [],
});
