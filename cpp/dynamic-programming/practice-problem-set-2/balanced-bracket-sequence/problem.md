
# Description
Given a bracket sequence with ‘?’ at some places, you need to find the number of ways you can replace ‘?’ with ‘(‘ or ‘)’ to form a regular bracket sequence. A bracket sequence is called regular if it is possible to obtain the correct arithmetic expression by inserting characters + and 1 into this sequence.


## Input Format
The first line of the input contains one integer t - the number of test cases. Then t test cases follow.

The first and only line of each test case contains a string with characters, ‘(‘, ‘)’ and ‘?’.


## Output Format
For each test case, print the number of ways to replace ‘?’ with ‘(‘ or ‘)’ to form a balanced bracket sequence mod 10^9+7.

1 ≤ t ≤ 105

1 ≤ n ≤ 103 where n is the length of the string.

It is guaranteed that the sum of n2 over all test cases does not exceed 106.

### Sample Input 1

```
5
(??)
??
()()()
???
??????
```

### Sample Output 1
```
2
1
1
0
5
```

### Note
For the first test case, following strings are possible: ()() and (()).

For the second test case, only one string is possible: ().

For the third test case, only one string is possible: ()()().

For the fourth test case, n is odd hence no string is possible.
