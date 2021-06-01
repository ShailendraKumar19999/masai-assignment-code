/*
Pattern Printing I
Description

Given an integer N, and a pattern. Print the pattern as given in the sample I/O.

Note: Please check for spaces.


Input
The first and the only line of the input contains the value of N.

Constraints

1 <= N <= 25


Output
Print the pattern as given in the sample test case.


Sample Input 1 

5
Sample Output 1

* * * * *
*
*
*
* * * * *
Language: 
  

*/

function runProgram(input){
	 var a = Number(input);
  var output ="";
  for(var i=0 ;i<a; i++){
    	for(var j=0; j<a;j++){
          if(i ===0 || i === a-1){
            	output +="* "
          }
          else{
            output +="*";
            break;
          }
        }
    output +="\n";
  }
  console.log(output);
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
});//Enter code here