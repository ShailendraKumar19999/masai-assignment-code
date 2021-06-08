/*
Description

You are given N integers, your task is to write a program that finds the integer present after 2 in the sequence of numbers given. In case 2 is not present or  2 is the last element, print -1.

Note: You have to ensure that you use functions to implement the solution. Any other solution will be discarded.


Input
Input Format

First line of the input contains N

Second line of the input contains N space separated integers.

Constraints

N<10000


Output
Output Format

Output number present after 2.

In case there's no number present after 2, print -1


Sample Input 1 

5
3 4 2 0 1
Sample Output 1

0
*/

function find(arr, N){
	for(var i=0; i<N;i++){
      	if(i === N-1)
        	return -1;
    	if(arr[i] === 2){
        	return arr[i+1];
        }
      
    }
}


function runProgram(input){
	 input = input.split("\n");
  	var N = input[0];
  	var arr = input[1].split(" ").map(Number);
  	var result = find(arr, N);
  console.log(result);
  
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
//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here