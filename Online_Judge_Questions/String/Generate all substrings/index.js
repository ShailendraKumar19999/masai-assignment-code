/*
Generate all substrings
Description

You are given a string A of size N. Print all the non empty substrings of the string.

Note: You have to print the strings in an order such that all the substrings, starting with the first character are printed first, then all the substrings starting with the second character are printed, and so on. Refer the sample I/O for better understanding.

Note: The string contains only lowercase letters.


Input
The first line of the input contains T, the number of test cases.

The first line of each test case, contains N, the length of the string.

The next line contains the string itself.

Constraints

1 <= T <= 10

1 <= N <= 30


Output
For each test case, print all the substrings of the given string, in the order given in the sample test case.


Sample Input 1

1
4
aman
Sample Output 1

a
am
ama
aman
m
ma
man
a
an
n
Hint


*/
function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for (var i = 0; i < T; i++) {
        var N = Number(input[pos]);
        var str = input[pos + 1];
        pos += 2;

        for (var j = 0; j < N; j++) {
            for (var k = j; k < N; k++) {
                var output = "";
                for (var s = j; s <= k; s++) {
                    output += str[s];
                }
                console.log(output);
            }
        }

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
