/*
Intersection of Array
Description

You are given 2 arrays of N integers. Your task is to write a program that finds the one integer which is common in both arrays.

Note: There is always one integer common in both arrays.


Input
Input Format

First line of input contains N

Second line contains N space separated integers making the first array

Third line contains N space separated integers making the second array



Constraints

N<1000


Output
Output Format

Output that one integer which is common in both arrays


Sample Input 1

3
4 5 7
9 2 5
Sample Output 1

5
*/

function runProgram(input) {
    input = input.split("\n");
    var n = Number(input[0]);
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    var output = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {

            if (arr1[i] === arr2[j]) {
                output += arr1[i] + " ";
            }
        }
    }
    console.log(output)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});