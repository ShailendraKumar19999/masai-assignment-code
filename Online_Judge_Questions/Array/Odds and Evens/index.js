/*
Odds and Evens
Description

You are given an array A of size N.

You need to change all even numbers in array to -1 and odd numbers to 1, and print array


Input
First line contains T, no of test cases.

First line of each test case contains N, size of array

Second line of each test case contains N spaced integers of array A.

Constraints

1 <= T <= 10

1 <= N <= 100

1 <= A[i] <= 1000


Output
For each test case, print array,on new line


Sample Input 1

2
3
1 3 2
5
3 3 2 9 7
Sample Output 1

1 1 -1
1 1 -1 1 1
Hint

For test case 1:

1 is odd, so changes to 1.

3 is odd, so changes to 1.

2 is even, so changes to -1.
*/

//Enter code here
function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for (var i = 0; i < T; i++) {
        var N = Number(input[pos]);
        var arr = input[pos + 1].split(" ").map(Number);
        pos += 2;
        var output = "";
        for (var i = 0; i < N; i++) {
            if (arr[i] % 2 === 1) {
                arr[i] = 1;
            }
            else {
                arr[i] = -1;
            }
            output += arr[i] + " ";
        }
        console.log(output);


    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});//Enter code here