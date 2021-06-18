/*
Is Even Sum Possible?
Description

Given an array a which contains n integers in it. Find out if there exists a subset of the array such that the sum of its elements is even.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the length of the array a.

The second line contains n integers a1,a2,…,an (1 ≤ ai ≤ 10000), elements of the array a.


Output
For each test case, print the answer: "Yes" if possible or else "No" if not possible (without quotes).


Sample Input 1

2
1
5
4
1 2 3 4
Sample Output 1

No
Yes
Language:


*/

function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for (var i = 0; i < T; i++) {
        var N = Number(input[pos]);
        var arr = input[pos + 1].split(" ").map(Number);
        pos += 2;
        var isPresent = false;
        for (var j = 0; j < N; j++) {
            for (var k = j + 1; k < N; k++) {
                if ((arr[j] + arr[k]) % 2 === 0) {
                    isPresent = true;
                    break;
                }
            }
        }
        if (isPresent) {
            console.log("Yes");
        }
        else {
            console.log("No");
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
