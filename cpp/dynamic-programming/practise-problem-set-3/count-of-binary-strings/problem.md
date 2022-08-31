
# Description
Find the number of binary strings of length n where “0100” is not present as a substring.


## Input Format
The first line of the input contains one integer t - the number of test cases. Then t test cases follow.

The first and only line of each test case contains an integer n.


## Output Format
For each test case, print the number of binary strings of length n where “0100” is not present as a substring mod 10^9+7.
1 ≤ t ≤ 106

1 ≤ n ≤ 106 where n is the length of the string.

### Sample Input 1

```
3
3
4
5
```

### Sample Output 1
```
8
15
28
```

### Note
For the first test case, n = 3, so “0100” cannot be a substring.

For the second test case, there are total 24 = 16 substrings out of which “0100” is a substring. So, the answer is 16-1 = 15.
