/*
Description

You are given a string S. Print the reversed version of the string.


Input
Input Format

The first and only line contains string S.

Constraints


*/
var input = "masaischool";
var output = "";
 
  for(var i= input.length-1 ; i>=0 ; i--){
    
 	output += input[i];
  }
  
  console.log(output);