/*
Enough Fuel Consumption
Description

You are given the amount of fuel consumed by a car travelling 1 km. You are also provided total distance the car will be travelling. If the total amount of fuel required by car is greater than 50 litres, print "Enough" (without quotes), else print "Go On" (without quotes).


Input
Input Format

The input has one line which contains a number which is the amount of fuel required by the car in travelling 1 km space separated by the total distance the car has to cover.


*/
var amountOfFuel = 1;
	 var totalDistance   = 46;
  var totalAmountOfFuelRequired = amountOfFuel * totalDistance;
  if(totalAmountOfFuelRequired > 50)
  {
    console.log("Enough");
  }
 
  else
  {
    console.log("Go On");
  }