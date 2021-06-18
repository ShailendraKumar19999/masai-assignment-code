/*
Power of 2
Description

Given an integer N, check if the number is power of 2 or not.

Note : You may not use any inbuilt function.


Input
The first line contains T, the number of test cases.

The first and the only line of each test case contains N, the number to be checked.

Constraints :

-2^31<= n <= 2^31- 1

Output
Print "True", if the number is a power of 2, else print "False".


Sample Input 1

2
2
3
Sample Output 1

True
False
Hint


*/

function isPower(n) {
    if (n === 0) {
        return 0;
    }
    while (n !== 1) {
        if (n % 2 !== 0) {
            return 0;
        }
        n = Math.floor(n / 2);
    }

    return 1;


}

function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for (var i = 0; i < T; i++) {
        var n = Number(input[pos++]);
        var result = isPower(n);
        if (result === 1) {
            console.log("True");
        }
        else {
            console.log("False");
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
//Enter code here//Enter code here//Enter code here