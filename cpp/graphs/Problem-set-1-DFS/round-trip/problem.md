
# Description
Zenithland has n cities and m roads between them. Your task is to check for the existence of a round trip that begins in a city, goes through two or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.


## Input Format

The first input line has two integers n and m: the number of cities and roads. The cities are numbered 1, 2, …, n.
Then, there are m lines describing the roads. Each line has two integers a and b: there is a road between those cities.
Every road is between two different cities, and there is at most one road between any two cities.




## Output Format
Print ‘YES’ if such round trip exists, otherwise print ‘NO’.


1 ≤ n ≤ 105
1 ≤ m ≤ 2 x 105
1 ≤ a, b ≤ n


### Sample Input 1

```
5 6
1 3
1 2
5 3
1 5
2 4
4 5
```

### Sample Output 1
```
YES
```
### Sample Input 2
```
4 3
1 2
1 3
3 4
```

### Sample Output 2
```
NO
```
### Note

