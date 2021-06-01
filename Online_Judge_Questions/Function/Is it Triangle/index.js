/*
Description

Given the lengths of 3 sticks, find out if it is possible to form a triangle of a positive area. (Non-Degenerate Triangle).

Note: Please implement the solution with the help of a function, any other solution will be discarded.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.

The first line of each test case contains 3 integers a,b,c (1 ≤ a,b,c ≤ 100) — the lengths of the 3 sticks.


Output
For each test case, print the answer: "Yes" if possible, else "No".


Sample Input 1 

4
4 5 13
7 1 8
2 5 4
2 2 2
Sample Output 1

No
No
Yes
Yes
*/

function isTriangle(N, arr){
  for(var i =0; i<arr.length ;i++){
  if((arr[i]+ arr[i+1]) > arr[i+2] && (arr[i+1]+arr[i+2])> arr[i] && (arr[i]+arr[i+2])>arr[i+1])
    return "Yes";
  else{
    return "No"
  }
  }
}
  
  

function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0 ; i<T; i++){
  	//var N = Number(input[pos]);
    var arr = input[pos].split(" ").map(Number);
    var N = arr.length;
    var solution = isTriangle(N, arr);
    pos +=1;
    console.log(solution);
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