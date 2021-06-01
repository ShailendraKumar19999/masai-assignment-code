/*
Masai Divisors
Description

You are provided 3 integers: *left*, *right* and *k*. Your task is to write a program that finds out the count of all such numbers between *left* and *right* (both inclusive) which are divided by *k*.


Input
Input Format

First line contains 3 space separated integers which are left, right and k respectively.

Constraints


*/

var left = 1;
	 var right = 10;
  	 var k = 1;
  var count =0;
  for(var i=left ; i<=right; i++){
    if(i % k === 0)
    {
      count++;
      
    }
  }
  console.log(count);