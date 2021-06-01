/*
Infinity Stones
Description

You are given the power of the six infinity stones Tony Stark, with the help of Jarvis, has found out a way to increase the total power of the infinity stones. The powers of the infinity stones are given by A,B,C,D,E,F. Tony has doubled the power of the stone with power B, while the power of stone C is increased by 3 times, and that of stone D is also increased by 3 times. The power of the stones with power E and F, has been doubled as well, while that of stone with power A is unchanged. Find the new total power of the stone.


Input
You are given the values of A, B, C , D , E and F, on a single line.

Constraints


*/
var A = 1;
     var B = 2;//1 2 3 4 5 6
  	 var C = 3;
  	 var D = 4;
     var E = 5;
     var F = 6;
  var totalPower= A+ B*2+C*3+D*3+E*2+F*2;
  console.log(totalPower);