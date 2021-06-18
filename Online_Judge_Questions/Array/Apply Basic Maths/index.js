/*
Apply Basic Maths
Description

Given, an array A (index starting from 0) with N elements. You CAN remove only that element which makes the sum of ALL the remaining elements exactly divisible by 7.

Your task is to find the first array index of the smallest element that can be removed.


Input
Input Format

The first line contains a single integer N.

Next line contains N space separated integers A[k] , 0 < k < N - 0 based indexing

Constraints

1 < N < 100000

0 < A[k] < 1000000000




Output
Output Format

Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!


Sample Input 1

5
14 7 8 2 4
Sample Output 1

1
Hint

Sample 1 Explanation

Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.

Language:


*/
function findArray(arr, n) {
    var sum = 0, result1, count = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    var min = Number.MAX_SAFE_INTEGER;
    for (var j = 0; j < n; j++) {

        var totalSum = sum - arr[j];

        if ((totalSum) % 7 === 0 && min > arr[j]) {
            min = arr[j];
            result1 = j;
        }
        else {
            count++;
        }
    }
    if (count === n)
        return -1;

    else
        return result1;
}



function runProgram(input) {
    input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var index = findArray(arr, n);
    console.log(index)

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