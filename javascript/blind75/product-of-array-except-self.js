// https://leetcode.com/problems/product-of-array-except-self/description
//
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
// You must write an algorithm that runs in O(n) time and without using the division operation.
//
// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
//
// Example 2:
//
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
//
// Constraints:
//
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// O(n^2)
const productExceptSelfBruteForce = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            }

            product = product * nums[j];
        }

        result.push(product);
    }

    return result;
}

let nums = [1, 2, 3, 4];
// console.log({ expected: [24, 12, 8, 6], result: productExceptSelfBruteForce(nums) });

// nums = [-1, 1, 0, -3, 3]

// console.log({ expected: [0, 0, 9, 0, 0], result: productExceptSelfBruteForce(nums) });

// Time: O(n)
// Space: O(2 * n)
const productExceptSelfWithMoreSpace = (nums) => {
    const n = nums.length;
    const prefix = [];
    const suffix = [];


    prefix[0] = 1;

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    suffix[n - 1] = 1;

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    const ans = [];
    for (let i = 0; i < prefix.length; i++) {
        ans[i] = prefix[i] * suffix[i];
    }

    return ans;
}

// nums = [1, 2, 3, 4];
// console.log({ expected: [24, 12, 8, 6], result: productExceptSelfWithMoreSpace(nums) });
//
// nums = [-1, 1, 0, -3, 3]
//
// console.log({ expected: [0, 0, 9, 0, 0], result: productExceptSelfWithMoreSpace(nums) });

// Time: O(n)
// Space: O(1)
const productExceptSelf = (nums) => {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    let suffix = 1; // We need this to backtrack previous suffix

    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }

    return ans;
}

nums = [1, 2, 3, 4];
console.log({ expected: [24, 12, 8, 6], result: productExceptSelf(nums) });

nums = [-1, 1, 0, -3, 3]

console.log({ expected: [0, 0, 9, 0, 0], result: productExceptSelf(nums) });
