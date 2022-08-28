
# Description
Given a string, count the number of distinct subsequences of it (including empty subsequence).
A subsequence of a string is a new string which is formed from the original string by deleting some of the characters without disturbing the relative positions of the remaining characters.


## Input Format
The first line of input contains T - the number of test cases.
The only line of each test case contains a string S.
It is guaranteed that all characters of S will be uppercase English alphabets.


## Output Format
For each test case, print the number of distinct subsequences of S on a new line modulus 10^9+7.

1 ≤ T ≤ 10
1 ≤ |S| ≤ 105
Sum of the length of all strings over all test cases ≤ 5 x 105 

### Sample Input 1

```
4
AAA
ABBA
ABCDEFG
CODECRAFT
```

### Sample Output 1
```
4
11
128
496
```

### Note
Explanation 1:
Distinct subsequences: "", "A", "AA", "AAA".

Explanation 2:
Distinct subsequences: "", "A", "B", "AB", "AA", "ABB", "BB", "ABA", "BA", "BBA", "ABBA". 
