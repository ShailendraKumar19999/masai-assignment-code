/*
Detect Palindrome
Description

Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)

You must write a recursive function to achieve this

You must not use the reverse() function. Using that would lead to disqualification


Input
Input Format

You are provided with one integer.

Constraints

The provided integer is always lesser than 1000000


Output
Print Yes or No depending upon the integer.


Sample Input 1 

1221
Sample Output 1

Yes
Hint

Sample 1 Explanation


*/

function palindrom(n, r){
	if(n === 0){
    	return r;
    }
  else{
  	r = r*10+ n%10;
    return palindrom(Math.floor(n/10), r);
  }
}
function runProgram(input){
 var n= Number(input);
  var r=0;
  var result = palindrom(n, r);
  if(result=== n)
    	console.log("Yes");
  else
    	console.log("No");
 
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here