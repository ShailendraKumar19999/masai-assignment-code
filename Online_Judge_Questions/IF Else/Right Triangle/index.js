/*
Right Triangle
Description

Given three integers a , b, c , find whether they form the sides of theRight Angled Triangleor not, print "Yes" if they form the sides of the triangle else print "No"



For a triangle to be right angled triangle it must hold the Pythagoras Theorem i.e. ( a^2 + b^2 = c^2, if c is the hypotenuse of the triangle )

Note: If the input holds the necessary condition to be a triangle and right angled triangle then output "Yes" else output "No"


Input
Input:


*/ 
var a = 3;
	 var b = 4;
  	 var c = 5;
  
  if((c*c) === (a*a)+(b*b) ){
    console.log("Yes");
    
}
  else{
        console.log("No");
  }