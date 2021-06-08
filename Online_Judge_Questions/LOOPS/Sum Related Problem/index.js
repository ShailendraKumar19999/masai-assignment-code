/*
Sum Related Problem
Description

You are given a number N, find sum of all even numbers which occur before N (inclusive of N if N is even)


Input
Input Format

First and the only line contains one number N.

Constraints

N<10000


Output
Output Format

Output one number which is sum (under above condition)


Sample Input 1 

8
Sample Output 1

20
*/
function runProgram(input){
	 var a = Number(input);
  	var sum=0;
  if(a % 2 ===0){
  	for(var i=2;i<=a;i +=2){
    	sum +=i;
    }
  }
  else{
  	for(var i=2;i<a;i +=2){
    	sum +=i;
    }
  }
  console.log(sum);
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
//Enter code here//Enter code here