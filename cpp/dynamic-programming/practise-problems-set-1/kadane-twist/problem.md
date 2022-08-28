
# Description
In the standard Kadane problem, you are given an array of integers, and you have to find one or more consecutive elements in this array where their sum is the maximum possible sum or in sort the Maximum Subarray Sum.  But in this problem, you are given  n  small arrays, and you will create one big array from the concatenation of one or more instances of the small arrays (each small array could occur more than once). The big array will be given as an array of indexes ( 1 -based) of the small arrays, and the concatenation should be done in the same order as in this array. Then you should apply the standard problem mentioned above on the resulting big array.  For example let's suppose that the small arrays are  ( 1 , 6 , − 2 ) ,  ( 3 , 3 )  and  ( − 5 , 1 ) . And the indexes in the big array are  ( 2 , 3 , 1 , 3 ) . So the actual values in the big array after formatting it as the concatenation of the small arrays will be  ( 3 , 3 , − 5 , 1 , 1 , 6 , − 2 , − 5 , 1 ) . In this example, the maximum sum is  9 .  

## Input Format
The first line contains  T  - the number of test cases. The first line of each test case contains two integers  n  and  m ,  n  is the number of the small arrays, and  m  is the number of indexes in the big array. Then follow  n  lines, the  i t h  line starts with one integer  l  which is the size of the  i t h  array, followed by  l  integers each one will be greater than or equal  − 1000  and less than or equal  1000 . The last line contains  m  integers which are the indexes in the big array, and you should concatenate the small arrays in the same order, and each index will be greater than or equal to  1  and less than or equal to  n .  The small arrays are numbered from  1  to  n  in the same order as given in the input. Some of the given small arrays may not be used in a big array.  

## Output Format
For each test case, print one line containing the maximum sum in the big array after formatting it as described above. You must choose at least one element for the sum, i. e. it cannot be empty.

1 ≤   T   ≤   100 .
1   ≤   n   ≤   50 .
1   ≤   m   ≤   250000 .
1   ≤   l   ≤   5000 .
 
### Sample Input 1

```
2
3 4
3 1 6 -2
2 3 3
2 -5 1
2 3 1 3
6 1
4 0 8 -3 -10
8 3 -2 -5 10 8 -9 -5 -4
1 0
1 -3
3 -8 5 6
2 9 6
1
```

### Sample Output 1
```
9
8
```

### Note

