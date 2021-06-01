/*
Range of 2
Description

You are given two integers, L and R. You have to print all the numbers between L and R, L and R inclusive, such that the current number is the double of the previous number. Refer the sample I/O for better understanding.


Input
The first and the only line of the input contains L and R, the two numbers.


*/
var a = 4;
	 var b = 20;
  var output= "";
  for(var i=a; i<=b;i=i*2){
    output +=i+ " ";
  }
  console.log(output);