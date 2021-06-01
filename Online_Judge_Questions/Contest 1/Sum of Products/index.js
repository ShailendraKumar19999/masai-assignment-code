/*
Description

You are given a number K, and three other numbers A, B, and C. Find the sum of the three numbers after each of them is multiplied with K.


Input
The first and the only line of the input contains 4 space separated integers denoting the value of K, A, B and C.

Constraints

1 <= A,B,C, K <= 20


Output
Print a single integer denoting the sum of the numbers after each of them is multiplied by K.


Sample Input 1 

4 1 2 3
Sample Output 1

24
Hint

In the sample test case, the value of K is 4, and the values of A, B, and C. On multiplying with K, the values of A, B and C become 4, 8  and 12. Therefore, the output becomes 24.
*/

function runProgram(input){
	 input = input.split(" ");
  var K = Number(input[0]);
  var A = Number(input[1]);
  var B = Number(input[2]);
  var C = Number(input[3]);
  
  var sum;
    sum = A+B+C;
    
  
  
  console.log(K*sum);
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