/*
Description

You are given an array A of length n. Your task is to write a program that prints the array in reversed form.


Input
Input Format

First line contains n (number of elements present in the array)

Second line contains n space separated integers which are the elements of the array.


*/
var N = 5;
  var arr = [12 ,34, 11, 9 ,18];
  var output= "";
  for(var i=N-1 ; i>=0 ; i--){
  		
    output += arr[i] +" ";
  }
  console.log(output);