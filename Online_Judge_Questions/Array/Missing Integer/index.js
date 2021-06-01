/*
Description

You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer



*/
var input = [4, 5, 1, 3];
  var sum =0;
  for(var i=0;i<input.length; i++)
  {	sum += input[i];
    
  }
 var n = input.length + 1;
  var totalSum = (n*(n+1))/2;
  var diff = totalSum - sum;
  console.log(diff);