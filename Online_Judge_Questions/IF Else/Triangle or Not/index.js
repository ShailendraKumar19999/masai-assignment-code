/*
Triangle or Not
Description

 Given three integers a , b, c , find whether they form the sides of the triangle or not, print "Yes" if they form the sides of the triangle else print "No"


Input
Input:


*/ 
var a = 3;
	 var b = 4;
  	 var c = 5;
  
  if((a+b) > c && (b+c)>a && (a+c)>b){
    console.log("Yes");
    
}
  else{
        console.log("No");
  }