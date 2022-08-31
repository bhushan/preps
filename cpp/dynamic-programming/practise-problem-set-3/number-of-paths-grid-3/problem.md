
# Description
Given a grid of size n*m, you need to find the number of paths from (1, 1) to (n, m). You are allowed to move from (x, y) to (x+1, y) and (x, y) to (x, y+1). You cannot move more than K consecutive right moves. The grid may have some blocked cells, represented by 1, and it is not allowed to move to a blocked cell. An empty cell is represented by 0.


## Input Format
The first line of the input contains one integer t - the number of test cases. Then t test cases follow.

The first line of each test case contains three space-separated integers n, m, k - the size of the grid and the number of right moves you can make.

Each of the following n lines contains m space-separated integers, aij - the number at that cell.


## Output Format
For each test case, print the number of paths modulo 10^9 + 7.
1 ≤ t ≤ 105

1 ≤ n, m, k ≤ 200

0 ≤ aij ≤ 1

It is guaranteed that the sum of nmk over all test cases does not exceed 108.

### Sample Input 1

```
3
3 3 1
0 0 0
0 0 0
0 0 0
3 3 1
0 1 0
0 1 0
0 0 0
2 3 2
0 0 1
0 0 0
```

### Sample Output 1
```
3
0
2
```


### Note
For the second test case, there is only one path with 2 consecutive right moves, so the answer is 0.

For the third test case, the following 2 paths are possible: (1,1) → (1,2) → (2,2) → (2,3) and (1,1) → (2,1) → (2,2) → (2,3).
