/*
Description

You are given an array of N positive integers. Write a program to output the product of all the elements present in the array.


Input
Input Format:

First line contains N.

Second line contains N space separated integers


*/
var N = 5;
     var nums = [3, 5, 2, 9, 4];
    
     var product=1;
  for(var i=0; i<N; i++){
  	
    	product *= nums[i];
    
  }
  console.log(product);