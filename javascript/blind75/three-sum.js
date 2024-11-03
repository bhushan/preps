// https://leetcode.com/problems/3sum/
// https://www.youtube.com/watch?v=onLoX6Nhvmg&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=40
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
// Example 1:
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Constraints:
//
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

const nums = [-1, 0, 1, 2, -1, -4];

const threeSumBruteForce = (nums, target) => {
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    const one = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const two = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const three = nums[k];
        if (one + two + three === target) {
          const triplet = [one, two, three];
          // sorting with key to have unique triplets only
          result.set(`${triplet.sort((a, b) => a - b).join("-")}`, triplet);
        }
      }
    }
  }

  // doubling the space required which is not good
  // to get unique triplets we used map which is extra overhead
  return Array.from(result.values());
};

console.log({
  result: threeSumBruteForce(nums, 0),
  expected: [
    [-1, 0, 1],
    [-1, -1, 2],
  ],
});
