/*
Loop it twice
Description

You are given two integers, L and R. You have to print all the integers between this range, which are at a distance of two from the previous element, including L and R . Refer to the sample I/O for better understanding.


Input
The first and the only line of the input contains two integers L and R
*/
var a = 4;
	 var b = 20;
  var output="";
  for(var i=a;i<=b; i=i+2){
    output +=i + " ";
    
  }
  console.log(output);