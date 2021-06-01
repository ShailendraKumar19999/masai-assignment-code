/*
Description

You are given an array of  N integers. Write a program that prints "Greater" (without quote) if the sum of all elements present in the array is greater than 100, else print "Lesser" (without quotes).


Input
Input format

First line contains N

Second line contains N space separated integers which are elements of the array.

Constraints


*/
var N = 5;
     var nums = [21, 24, 2, 54, 8];
    
     var sum=0;
  for(var i=0; i<N; i++){
  	
    	sum += nums[i];
    
  }
  if(sum > 100)
  	console.log("Greater");
  else
    console.log("Lesser");