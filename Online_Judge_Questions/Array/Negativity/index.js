/*
Description

You are given an array of N integers. Find the total count of negative elements present in the array.


Input
Input Format:

First line contains N integers

Second line contains N space separated integers which constitute the array.

Constraints:

N < 100


Output
Output the number of negative integers present in the array


Sample Input 1 
*/
var N = 5;
     var nums = [-3 ,0 ,-5, 9, 8];
    
     var count=0;
  for(var i=0; i<N; i++){
  	if(nums[i] < 0){
    	count++;
    }
  }
  console.log(count);