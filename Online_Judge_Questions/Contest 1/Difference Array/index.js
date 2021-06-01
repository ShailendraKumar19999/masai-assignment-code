/*
Description

You are given an array A of size N, which contains all unique elements. You have to sort the array, and find the difference between the initial position and the final position of the elements after the array is sorted . Refer the sample I/O for better understanding.


Input
The first line contains T, the number of test cases.

The first line of each test case contains N, the size of the array.

The next line contains N space separated integers, denoting the elements of the array.


Output
Print an array of size N on a new line, denoting the difference between the initial and the final position of the elements, on a single line, for each test case.


Sample Input 1 

2
5 
1 4 2 3 5
5
5 4 3 2 1
Sample Output 1

0 -2 1 1 0 
-4 -2 0 2 4 
Hint

In the first sample test case, the array after sorting became,

1 2 3 4 5. For each element the difference between the initial and the final position in the array is equal to -original position - final position

1 -> 0 - 0 = 0

2 -> 2 - 1 = 1

3 -> 3 - 2 = 1

4 -> 1 - 3 = -2

5 -> 4 - 4 = 0

Similarly, in the second test case the array after sorting becomes -> 1 2 3 4 5. Therefore, the difference in the position is

1 -> 4 - 0 = 4

2 -> 3 - 1 = 2

3 -> 2 - 2 = 0

4 -> 1 - 3 = -2

5 -> 0 - 4 = -4
*/