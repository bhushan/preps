
# Description
There are n students in AlgoZenith Course and m friendships between them. Your task is to divide the students into two teams in such a way that no two students in a team are friends. You can freely choose the sizes of the teams. The size of each team should be positive.


## Input Format
The first input line has two integers n and m: the number of students and friendships. The students are numbered 1, 2, …, n.
Then, there are m lines describing friendships. Each line has two integers a and b: students a and b are friends.
Every friendship is between two different students. You can assume that there is at most one friendship between any two students.





## Output Format
Print ‘YES’ if it's possible to divide students in two teams, otherwise print ‘NO’.
1 ≤ n ≤ 105
1 ≤ m ≤ 2 x 105
1 ≤ a, b ≤ n

### Sample Input 1

```
5 3
1 2
1 3
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
2 3
1 3
```

### Sample Output 2
```
NO
```
### Note

