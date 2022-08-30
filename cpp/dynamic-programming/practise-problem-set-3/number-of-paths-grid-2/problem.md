
# Description
Given a grid of size n*m, you need to find the total number of different paths from (1, 1) to (n, m). You are allowed to move from (x, y) to (x+1, y) and (x, y) to (x, y+1). The grid may have some blocked cells, represented by 1, and it is not allowed to move to a blocked cell. An empty cell is represented by 0. You are also given an integer k and you can convert at most k blocked cells into unblocked cells.


## Input Format
The first line of the input contains one integer t - the number of test cases. Then t test cases follow.

The first line of each test case contains three space-separated integers n, m, k - the size of the grid and the number of cells you can convert.

Each of the following n lines contains m space-separated integers, aij - the number at that cell.


## Output Format
For each test case, print the number of paths modulo 10^9 + 7.

1 ≤ t ≤ 105

1 ≤ n, m ≤ 200

0 ≤ k ≤ 400

0 ≤ aij ≤ 1
It is guaranteed that the sum of nmk over all test cases does not exceed 108.
### Sample Input 1

```
3
3 3 2
0 1 1
1 1 0
1 0 0
3 3 1
0 1 1
1 1 0
1 0 0
2 3 0
1 0 0
0 1 0

```

### Sample Output 1
```
6
0
0
```

### Note
For the first test case, any path from (1,1) to (n,m) has 2 blocked cells, which can be unblocked.

For the third test case, no cells can be unblocked and the first cell is blocked, so there are no paths from (1,1) to (n,m).
