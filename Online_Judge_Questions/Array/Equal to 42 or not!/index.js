/*
Description

You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".


Input
Input Format :

First line contains number of integers N present in the array.

Second line contains  N  space separated integers.


*/
var N = 5;
  var arr = [3, 7, 0, 9, 8];
  var output= "";
  var isPresent = false;
  for(var i=0 ; i<N ; i++){
    if(arr[i] === 42){
      isPresent = true;
      break;
    }
  }
  if(isPresent){
  	console.log("Yes");
  }
  else{
  	console.log("No");
  }