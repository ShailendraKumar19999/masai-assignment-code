/*
Description

You are given an array A of N integers. Your task is to write a programme that prints "Odd" (without quotes) if the sum of all odd numbers present in the array is greater than sum of all the even numbers present in the array. In all other cases, print "Even" (without quotes).


Input
Input Format :

First line contains N which is the number of elements present in the array.

Second line contains N space separated integers which are the elements of array.



Constraints :


*/
var N = 4;
  var arr = [1 ,2 ,3, 4];
  var evenSum =0, oddSum=0;
  for(var i=0 ; i<N ; i++){
  	if(arr[i] % 2 === 0){
    	evenSum += arr[i];
    }
    else{
    	oddSum += arr[i];
    }
  }
  if(oddSum > evenSum){
  	console.log("Odd");
  }
  else{
  	console.log("Even");
  }