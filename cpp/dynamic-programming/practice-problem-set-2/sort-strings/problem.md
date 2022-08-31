
# Description

You are given N strings. You are allowed to reverse the i-th string with a cost c[i]. You have to find the minimum cost needed to sort the strings in lexicographical order.

String A is lexicographically smaller than string B if it is shorter than B (|A| < |B|) and is its prefix, or if none of them is a prefix of the other and at the first position where they differ character in A is smaller than the character in B.




## Input Format

The first line of the input contains one integer T - the number of test cases. Then T test cases follow.

The first line of each test case contains one integer N.

The second line of each test case contains N space-separated integers - the cost.

Each of the next N lines contains a string.

## Output Format
For each test case, print the minimum cost needed to sort the strings in lexicographical order. If it is impossible to sort the strings print -1.

1≤ T ≤ 100

1≤ N ≤ 105

0≤ Ci ≤ 109

1≤ |S| ≤ 105

It is guaranteed that the total length of these strings doesn't exceed 106.

### Sample Input 1

```
3
3
2 6 7
aca
aad
fba
3
5 1 1
pbc
cbe
qbf
2
4 5
baa
aaa
```

### Sample Output 1
```
6
6
-1
```

### Note
For the first test case, reverse the second string to get: [aca, daa, fba]

For the second test case, reverse the first and second strings to get: [cbp, ebc, qbf]

For the third test case, there is no way to make the strings in lexicographical order.
