/*
Simple Calculator
Description

Given 2 integersa, band characterc, output the mathematical operation between a and b based upon the operator c.

c can be ( +, -, *, / )

e.g.

2 * 3, then output will be 6, it means 2 is multiplied with 3

6 / 4 , then output will be 1, it means 6 is divided by 4 ( also it is an integer division )


Input
The first line of input contains a, c, b where 'a' and 'b' are integers and 'c' is a character ( operator )




*/
var a = 6;
	 var b = "/";
  	 var c = 4;
  
  switch(b)
  {
    case '+': console.log(a+c);
      break;
    case '-': console.log(a-c);
      break;
    case '*': console.log(a*c);
      break;
    case '/': console.log(Math.floor(a/c)); // 3.2 -> 3
      break; 
    default : break;
    
 }