/*
Substring under condition
Description

Given a string S, you need to find the count of all contiguous substrings starting and ending with same character.


Input
Input Format :

First and the only line contains a string S

Constraints:

Length of S <= 1000


Output
Output the count


Sample Input 1 

abcab
Sample Output 1

7
Language: 
  

*/

function runProgram(input){
  var str=input;
  var count=0;
  
  for(var i=0; i<=str.length; i++){
  	for(var j=i; j<str.length; j++){
    	if(str[i] === str[j]){
        	count++;
        }
    }
    
  }
  
	console.log(count); 
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