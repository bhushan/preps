
# Description
Zenithland has n cities and m roads between them. The goal is to construct new roads so that there is a route between any two cities. A road is bidirectional.
Your task is to find out the minimum number of roads required.


## Input Format
The first input line has two integers n and m: the number of cities and roads. The cities are numbered 1, 2, …, n.
After that, there are m lines describing the roads. Each line has two integers a and b: there is a road between those cities.
A road always connects two different cities, and there is at most one road between any two cities.


## Output Format
Print the number of minimum roads required.

1 ≤ n ≤ 105
1 ≤ m ≤ 2 x 105
1 ≤ a, b ≤ n
### Sample Input 1

```
4 2
1 2
3 4
```

### Sample Output 1
```
1
```

### Note
Construct a road between cities 1 and 3.
