/*
Count Possible Pairs
Description

You are given a system of equations:

x^2 + y = n

y^2 + x = m

You have to count, how many there are pairs of integers (x, y) (0 ≤ x, y) which satisfy the system.


Input
Input Format :

A single line contains two integers n, m

Constraints :

1 ≤ n, m ≤ 1000


Output
On a single line print the count


Sample Input 1

9 3
Sample Output 1

1
Hint

Output Explanation :

In the first sample the suitable pair is integers (3, 0)

Language:


*/

function findPair(n, m) {
    let count = 0;
    let y;
    for (let i = 0; i <= m; i++) {
        y = n - i * i;
        if (y * y + i === m && y >= 0) {
            count++;
            //console.log(count);
        }
    }
    return count;
}

function runProgram(input) {
    input = input.split(" ").map(Number);
    var n = input[0];
    var m = input[1];
    var result = findPair(n, m);
    console.log(result);

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
//Enter code here//Enter code here