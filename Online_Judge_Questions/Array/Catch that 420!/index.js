/*
Catch that 420!
Description

You are given an integer N. Your task is to find if the string 420 is present in it or not.

Print "Caught" (without quotes) if 420 is present in it.

Otherwise "Escaped" (without quotes) if 420 is not present in it.


Input
Input Format

You are provided an integer N.

Constraints

N<1000000


Output
Output Format

Output an string based on the conditions mentioned above.


Sample Input 1 

97420
Sample Output 1

Caught
Hint

Sample 1 Explanation

97420 contains 420.


*/

function runProgram(input){
  var arr = input.split("").map(Number);
  var isPresent=false;
  for(var i=0; i<arr.length; i++){
  	if(arr[i] === 4 && arr[i+1] === 2 && arr[i+2] === 0){
    	isPresent=true;
      break;
    }
  }
  if(isPresent)
    	console.log("Caught");
  else
	console.log("Escaped"); 
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
//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here