
# Description
Given an array of size N, and Q queries, for each query, you need to get the indices of the elements of the array whose subset-sum is equal to the queried sum sum i, if possible, else return −1.

## Input Format
Complete the Function subset_queries( vector &arr, vector &queries ) that takes vector a and queries vector as input.


## Output Format
Return a vector < vector < int > > having 0 -based indices of the elements of the array whose subset-sum is equal to the queried sum sumi for each ith
 query, if possible, else return vector { −1}.


### Sample Input 1

```
arr[] = { 1, 2, 3, 4, 5 }
queries[]= { 7, 16, 3 }
```

### Sample Output 1
```
{ {1, 4}, {-1}, {2} }
```

### Note

