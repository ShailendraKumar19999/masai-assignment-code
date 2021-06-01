/*
Description

Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding. The values can be assumed to be natural numbers.

Note: Use functions to implement the solution.


Input
First Line contains T, size number of test cases.

First Line of each test case contains N, size of array.

Second Line of each test case contains N integers, numbers of array.


Output
For each test output resulting array on a new line.


Sample Input 1 

2
5
1 2 3 4 5
3
3 2 7
Sample Output 1

120 60 40 30 24
14 21 6
Hint

For test case 1

i = 0 ==> 2*3*4*5 = 120

i = 1 ==> 1*3*4*5 = 60

i = 2 ==> 1*2*4*5 = 40

i = 3 ==> 1*2*3*5 = 30


*/
function product(arr){
 var prod=1;
  for(var i= 0 ; i<arr.length ; i++){
    
 	prod *= arr[i];
  
}
  return prod;
}
function solve(N, arr){
  var prod = product(arr);
  var res = [];
   for(var i= 0 ; i<N ; i++){
    
 	res.push(prod/arr[i]);
  
}
  return res;
 
  }

function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0 ; i<T; i++){
  	var N = Number(input[pos]);
    var test = input[pos+1].split(" ").map(Number);
    var solution = solve(N, test);
    pos +=2;
    console.log(solution.join(" "));
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
});//Enter code here//Enter code here//Enter code here