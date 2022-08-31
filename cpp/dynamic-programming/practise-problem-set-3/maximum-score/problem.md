
# Description
You are standing on the lowest row of a chessboard and can only move, upwards and leftwards or upwards and rightwards. There is a predefined score on each cell of the chessboard. You can start from any cell in the lowest row and you have to reach the uppermost row such that your score is the maximum possible and it is divisible by K. You have to find the maximal score you can achieve.


## Input Format
The first line of the input contains one integer T - the number of test cases. Then T test cases follow.

The first line of each test case contains three space-separated integers N, M, and K - the length of the array.

Each of the next N lines contains M digits from 0-9 indicating the score at that cell.


## Output Format
For each test case, if it is possible, you have to find the maximal score you can achieve. If it is impossible print -1.

1≤ T ≤ 100

1 ≤ N, M ≤ 100

1≤ K ≤ 11
### Sample Input 1

```
3
4 3 11
194
707
733
633
2 4 2
3916
9593
2 2 4
15
52
```

### Sample Output 1
```
22
18
-1
```

### Note
For the first test case, we start from A[4][3] and get the score as 3+3+7+9 = 22 which is divisible by 11.

For the second test case, we start from A[2][1] and get the score as 9+9 = 18, which is divisible by 2. You can also start from A[2][3] to get the same result.

For the third test case, there is no way to reach the top row with the score as a multiple of k.
