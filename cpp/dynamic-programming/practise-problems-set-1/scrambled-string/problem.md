
# Description
We can scramble a string s
 to get a string 
t
 using the following algorithm:

If the length of the string is 
1
, stop.

If the length of the string is 
>
1
, do the following:
2.1 Split the string into two non-empty substrings at a random index, i.e., if the string is 
s
, divide it to 
x
 and 
y
 where 
s
=
x
+
y
.
2.2 Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, 
s
 may become 
s
=
x
+
y
 or 
s
=
y
+
x
.

Apply step 
1
 recursively on each of the two substrings 
x
 and 
y
.


## Input Format



## Output Format



### Sample Input 1

```
```

### Sample Output 1
```
```

### Note
