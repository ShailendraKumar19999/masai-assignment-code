/*
Description

Recently, you gave an exam which had questions around three subjects Maths, Physics & Chemistry. The exam was of 450 marks, and you wanted a perfect score. But unfortunately, you missed the perfect score by some marks. Find out by how many marks did you miss the perfect score.



Input
The first and the only line of the input contains A,B,C. The marks in Maths, Physics & Chemistry.



Constraints

1 <= A,B,C <= 150


Output
Print a single integer denoting the number of marks by which you missed the perfect score.


Sample Input 1 

120 120 120
Sample Output 1

90
Hint

In the sample test case, you scored 120 in each of the test case. Therefore, the total score is 360, which is 90 less than the perfect score, so the output is 90.
*/

function runProgram(input){
  var newInput = input.split(" ").map(Number);
	 var A = newInput[0];
	 var B = newInput[1];
   var C = newInput[2];
  var total =450;
  var leftScore = total-(A+B+C);
  console.log(leftScore);
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