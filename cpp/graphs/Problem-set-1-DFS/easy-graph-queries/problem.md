
# Description
You have given an undirected graph G with N nodes and M edges. You've to answer Q queries. Each query is either of the following two types:

1 X: Print the size of the connected components containing node X.
2 X Y: Print ‘YES’ (without quotes) if node X and Y belong to the same connected component, else print ‘NO’ (without quotes).


## Input Format
The first line of input contains three space-separated integers N, M, and Q (1 ≤ N, M, Q ≤ 105).
Next M lines contain two space-separated integers u and v (1 ≤ u, v ≤ N).
Each of the next Q lines contains queries of one of the types as described in the statement.


## Output Format
Print Q lines as the answer to the Q queries, each on a new line.


### Sample Input 1

```
6 5 5
1 2
2 3
1 3
4 4
5 6
1 2
1 4
2 3 4
1 5
2 5 6
```

### Sample Output 1
```
3
1
NO
2
YES
```

### Note

