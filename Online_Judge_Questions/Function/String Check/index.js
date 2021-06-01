/*
Description

Given a string, check whether it contains only characters, only numbers or both.

If it contains only characters, output "chars" without quotes

If it contains only numbers, output "numbers" without quotes

If it contains both numbers and characters, output "alphanumeric" without quotes


Input
Input
The first line of input will contain an integer T, denoting the number of test cases.

The first line of each test case will contain an integer N, denoting the size of the string.

The next line will contain the string of N size.



Constraints
1<=T<=10

1<=N<=10^5


Output
For each test case output string as mentioned in the description, in a new line.


Sample Input 1 

3
5
ab2cd
5
acfgh
3
123
Sample Output 1

alphanumeric
chars
numbers
*/

function checkString(str, N){
var countChar = 0, countNumber=0;
	for (var i = 0; i < N; i++)
	{
    	if (isNaN(str[i])) {
      		countChar++;
    
  		}
  		else {
    		countNumber++;
  			}
   }
if (countChar > 0 && countNumber > 0)
  return "alphanumeric";
else if (countChar === 0 && countNumber > 0)
  return "numbers";
else if (countChar > 0 && countNumber === 0)
  return "chars"; 
}

function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0; i<T;i++){
  	var N = Number(input[pos]);
    var str = input[pos+1].split("");
    var result = checkString(str, N);
    pos +=2;
    console.log(result);
  }
  
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
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});//Enter code here//Enter code here//Enter code here//Enter code here