// https://leetcode.com/problems/contains-duplicate/description/
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
//
// Input: nums = [1,2,3,1]
//
// Output: true
//
// Explanation: The element 1 occurs at the indices 0 and 3.
//
// Example 2:
// Input: nums = [1,2,3,4]
//
// Output: false
//
// Explanation: All elements are distinct.
//
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
//
// Output: true
//
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// Time: O(n * Log n)
// Space: O(1)
const containsDuplicateBetter = (nums) => {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }

    return false;
}

let nums = [1, 2, 3, 1];

console.log({ expected: true, result: containsDuplicateBetter(nums) });

nums = [1, 2, 3, 4];

console.log({ expected: false, result: containsDuplicateBetter(nums) });

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log({ expected: true, result: containsDuplicateBetter(nums) });


// Time: O(n)
// Space: O(n)
const containsDuplicate = (nums) => {
    const list = new Set();

    for (let i = 1; i < nums.length; i++) {
        if (list.has(nums[i])) {
            return true;
        } else {
            list.add(nums[i]);
        }
    }

    return false;
}

nums = [1, 2, 3, 1];

console.log({ expected: true, result: containsDuplicate(nums) });

nums = [1, 2, 3, 4];

console.log({ expected: false, result: containsDuplicate(nums) });

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log({ expected: true, result: containsDuplicate(nums) });



