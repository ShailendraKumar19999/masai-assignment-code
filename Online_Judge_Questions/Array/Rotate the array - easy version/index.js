/*
Rotate the array - easy version
Description

You are given an array of n elements and an integer k, you need to rotate the array by k units towards right direction ( => ).


Input
1<=T<=10

1<=N<=1000, 0<=K<=1000

1 <= Ai <= 1000000


Output
out put N elements, elements of the array , rotated by K units


Sample Input 1

3
3 1
1 2 3
2 2
1 2
2 3
1 2
Sample Output 1

3 1 2
1 2
2 1
Language:

*/

function rotateArray(arr2, k, n) {
    var output = "";
    for (var a = 0; a < k; a++) {
        var lastElement = arr2[n - 1]
        for (var j = n - 1; j > 0; j--) {

            arr2[j] = arr2[j - 1];

        }
        arr2[0] = lastElement;
    }
    output += arr2;
    return String(output);
}

function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    var pos = 1;
    for (var i = 0; i < T; i++) {
        var arr1 = input[pos].split(" ").map(Number);
        var n = Number(arr1[0]);
        var k = Number(arr1[1]);

        var arr2 = input[pos + 1].split(" ").map(Number);

        pos += 2;

        var result = rotateArray(arr2, k, n);
        var finalOutput = result.split(",").join(" ")
        console.log(finalOutput);
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