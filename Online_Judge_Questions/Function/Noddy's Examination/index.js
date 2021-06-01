/*
Description

Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-

The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.

Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array

Determine the maximum score that Noddy can score?

Note: Use functions to implement the solution. Any other solution will be discarded.


Input
First Line contains Integer N, the number of questions and the maximum difficulty X Noddy can solve.

Next line contains N integers, denoting the difficulty level of each question.

N <= 100000

X <= 1000000000

Difficulty level of each question <= 1000000000


Output
Print the maximum score that Noddy can score


Sample Input 1 

7 6
4 3 7 6 7 2 2
Sample Output 1

3
Hint

Sample 1 Explanation


*/
function score(arr2, numsOfQuestion, maxDiffLevel) 
{
var solvedQues = 0;
var skip = 0;
for (var i = 0; i < arr2.length; i++)
{
    if (arr2[i] <= maxDiffLevel) {
        solvedQues++;
    }
    else {
        skip++;
    }
    if (skip > 1) {
        break;
    }    
    }
    return solvedQues;
}


function runProgram(input){
  input = input.split("\n");
  var arr1 = input[0].split(" ");
  var numsOfQuestion = Number(arr1[0]);
  var maxDiffLevel = Number(arr1[1]);
  var arr2 = input[1].split(" ").map(Number);
  
  var result = score(arr2, numsOfQuestion, maxDiffLevel)
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
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});//Enter code here//Enter code here//En