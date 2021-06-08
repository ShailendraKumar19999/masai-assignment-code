/*
Description

You are given a number N. Your task is to write a program that calculates the sum of all prime numbers below N(including N if N is a prime )


Input
Input Format

First and only line contains N

Constraints

N<1000


Output
Print sum of all such numbers.


Sample Input 1 

13
Sample Output 1

41
*/

function runProgram(input){
	 var N = Number(input);
  	 var sum=0;
  	for(var i=2; i<=N; i++)
    {	var isPrime = true;
     	
    	for(var j=2; j<i; j++)
   		 {
      		if(i % j ===0)
      		{
      			isPrime= false;
        		break;
      		}
    	}
     if(isPrime)
     	sum +=i;
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
//Enter code here//Enter code here//Enter code here//Enter code here