/*
Apply Brakes
Description

You are given the distance travelled by car(in kilometres) in a certain time (in hours). If the speed of that car is greater than 40 km/hr, you have to print "Apply Brake" (without quotes), else in all other conditions, print "Keep Going" (without quotes)


Input
Input Format

First line contains 2 space separated integers where the first integer represents the distance travelled by car and second represents time taken to cover that distance.


*/
var distance = 100;
	 var time   = 2;
  var speedOfCar = distance/time;
  if(speedOfCar > 40)
  {
    console.log("Apply Brake");
  }
 
  else
  {
    console.log("Keep Going");
  }