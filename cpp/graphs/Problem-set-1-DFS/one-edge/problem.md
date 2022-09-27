
# Description
You have given an undirected graph with n nodes, and m edges between them. The goal is to add exactly one edge between two nodes such that the total number of connected components in the graph decreases.
Your task is to find out the number of ways to add such edge.


## Input Format
The first input line has two integers n and m: the number of nodes and edges. The nodes are numbered 1, 2, …, n.
After that, there are m lines describing the edges. Each line has two integers a and b: there is an edge between those nodes.
An edge always connects two different nodes, and there is at most one edge between any two nodes.


## Output Format
Print the number of ways to add such edge, described in the statement.

1 ≤ n ≤ 105
1 ≤ m ≤ 2 x 105
1 ≤ a, b ≤ n
### Sample Input 1

```
5 4
1 2
2 3
1 3
4 5
```

### Sample Output 1
```
6
```
### Sample Input 2
```
4 3
1 2
2 3
3 4
```
### Sample Output 2
```
0
```
### Note
Explanation 1:
There are 6 ways to add edge so that the number of connected components in the graph decreases: (1, 4), (1, 5), (2, 4), (2, 5), (3, 4), (3, 5).

Explanation 2:
The given graph is already connected. Even if add any edge, we can't decrease the number of connected components.
