/*
Description

Given an integer N print the table of N up to 10 terms.

Note: Please make sure that you implement with the help of functions, any other solution will be discarded.


Input
Input Format

The first line of input will contain an integer T, denoting the number of test cases

The first line of each test case will contain an integer N

Constraints

1<= T <= 10


*/
function printTable(N) {
var output = "";
for (var i = 1; i < 11; i++){
    output += N * i +" ";
}
return output;
}

function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0 ; i<T; i++){
  	var N = Number(input[pos]);
    pos++;
    var result = printTable(N);
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
});//Enter code here//Enter