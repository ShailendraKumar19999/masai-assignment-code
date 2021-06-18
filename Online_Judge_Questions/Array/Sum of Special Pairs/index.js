/*
Sum of Special Pairs
Description

You are given an array A of N integers. Write a program to find the sum of the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Input
Input Format :

First line contains N

Second line contains N space separated integers which are elements of A

Constraints :

N<1000


Output
Output one number as per condition mentioned above


Sample Input 1

6
1 2 3 5 7 12
Sample Output 1

45
Hint

Sample Test Case Explanation

All valid index pairs are:
(5, 0) -> abs(12 – 1) = 11
(3, 0) -> abs(5 – 1) = 4
(2, 0) -> abs(3 – 1) = 2
(4, 1) -> abs(7 – 2) = 5
(3, 1) -> abs(5 – 2) = 3
(5, 2) -> abs(12 – 3) = 9
(4, 2) -> abs(7 – 3) = 4
(5, 3) -> abs(12 – 5) = 7
11 + 4 + 2 + 5 + 3 + 9 + 4 + 7 = 45
Language:


*/


function isPrime(Num) {
    var prime = true;
    for (var k = 2; k < Num; k++) {
        if (Num % k === 0) {
            prime = false;
            break;
        }
    }
    if (prime && Num > 1)
        return true;
    else
        return false;
}

function runProgram(input) {
    input = input.split("\n");
    var n = input[0];
    var arr = input[1].split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var Num = j - i;
            if (j > i && isPrime(Num)) {
                sum += Math.abs(arr[j] - arr[i]);
            }
        }
    }
    console.log(sum)
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
//Enter code here//Enter code here//Enter code here//Enter code here