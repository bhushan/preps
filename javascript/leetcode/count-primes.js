// https://leetcode.com/problems/count-primes/description/
// Given an integer n, return the number of prime numbers that are strictly less than n.
//
// Example 1:
//
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:
//
// Input: n = 0
// Output: 0
// Example 3:
//
// Input: n = 1
// Output: 0
//
// Constraints:
//
// 0 <= n <= 5 * 106

const primeLookup = (n) => {
    // Initialize an array to keep track of prime status for each number
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // We know 0 and 1 are not primes

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as not prime when i is prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

// TC: O(nlogn)
// SC: O(n)
const countPrimes = (n) => {
    const isPrime = primeLookup(n)

    return isPrime.reduce((count, isPrime) => count + (isPrime ? 1 : 0), 0);
}

let n = 10;

console.log({ expected: 4, result: countPrimes(n) });

n = 5 * 10 ** 6;

console.log({ expected: 348513, result: countPrimes(n) });

