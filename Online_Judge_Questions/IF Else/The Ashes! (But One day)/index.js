/*
The Ashes! (But One day)
Description

You are given two numbers where first number is score of Australian team and second number is score of England.

Comment who wins the match.

If match ends in a tie, print "Tie" (without quotes), else print the name of Winner


Input
Input Format :

First and the only line contains 2 space separated integers denoting scores of Australia and England respectively.


*/
var scoreOfAustralia = 46;
	 var scoreOfEngland   = 67;
  if(scoreOfAustralia > scoreOfEngland)
  {
    console.log("Australia");
  }
  else if(scoreOfAustralia === scoreOfEngland)
  {
    console.log("Tie");
  }
  else
  {
    console.log("England");
  }