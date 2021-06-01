/*
Description

Some people believe that the earth is flat. Same people, also believe that the value ofPi = 3The flat - earth society has asked you to write a program which calculates the area of a circle. Help them out!

Note: The area of the circle is given by(Pi x R X R),where R is the radius of the circle


Input
The input consists a single integer denoting the value of R, the radius of the circle for which the area is to be calculated.

Constraints

1 <= R <= 20


Output
Print a single integer denoting the value of the area of the circle


Sample Input 1 

4
Sample Output 1

48
Hint

In the sample test case, the value of R is 4. Therefore, the area of the circle, given by Pi x R x R, where Pi = 3. Therefore, the output is 48.
*/

function runProgram(input){
	 var a = Number(input);
  console.log(a*a*3);
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
});