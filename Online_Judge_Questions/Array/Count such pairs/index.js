/*
Count such pairs
Description

You are given an array A of N integers along with a target integer.Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.


    Input
Input Format:

First line contains 2 integers: N and the target respectively.

Second line contains N integers which are the elements of the array.

    Constraints :

N < 100


Output
Print one number which is number of such pairs.


Sample Input 1

5 9
3 0 6 2 7
Sample Output 1

2
Language:


*/

function runProgram(input) {
    input = input.split("\n");
    var arr1 = input[0].split(" ").map(Number);
    var n = arr1[0];
    var target = arr1[1];
    var arr2 = input[1].split(" ").map(Number);
    var output = "";
    var count = 0;
    for (var i = 1; i <= n; i++)
        for (var j = i; j <= n; j++)
            if (arr2[i - 1] + arr2[j] === target)
                count++;
    console.log(count)
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