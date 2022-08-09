
# Description
There are N stones, numbered 1,2,…,N. For each i (1≤i≤N), the height of Stone i is hi.

There is a frog who is initially on Stone 1. He will repeat the following action some number of times to reach Stone N:

If the frog is currently on Stone i, jump to Stone i+1 or Stone i+2. Here, a cost of ∣hi−hj∣ is incurred, where j is the stone to land on.
Find the minimum possible total cost incurred before the frog reaches Stone N.

## Constraints
All values in input are integers.
2≤N≤10^5
1≤hi<=10^4 

## Input Format
N
h1 h2 ... hn

## Output Format
Print the minimum possible total cost incurred.


### Sample Input 1

```
4
10 30 40 20
```
```
2
10 10
```
```
6
30 10 60 10 60 50
```

### Sample Output 1
```
30
```
```
0
```
```
40
```
### Note

