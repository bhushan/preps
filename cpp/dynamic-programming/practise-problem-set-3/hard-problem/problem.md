
# Description
You are given a string S with length N. Each character is assigned a cost for removing it. Find the minimum cost for removing characters such that it does not contain any subsequence ‘hard’.


## Input Format
The first line of the input contains one integer T - the number of test cases. Then T test cases follow.

The first line of each test case contains one integer N - the length of the array. 

The second line of each test case contains a string S.

The third line of each test case contains N space-separated integers - the cost of removing a character.



## Output Format
For each test case, print the minimum cost for removing characters such that it does not contain any subsequence ‘hard’.
1≤ T ≤ 1000

1≤ N ≤ 10^5

1≤ Ai ≤ 10^9

### Sample Input 1

```
3
4
abcd
1 2 3 4
10
hhhaaarrdd
1 2 3 4 1 2 3 4 2 3
4
hard
2 1 4 6
```

### Sample Output 1
```
0
5
1
```

### Note

