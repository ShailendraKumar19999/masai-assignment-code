/*
Matrix Competition
Description

You are given two matrices (2D array). The first array A (n rows and m columns) and second array B (i rows and j columns).

Output sum of the matrix which is greater than the sum of other matrix.

PLEASE DON'T CONVERT YOUR 2D ARRAY TO 1D ARRAY FOR THIS TASK** because this question is to make you comfortable in 2d array


Input
Input Format

First line contains n and m (number of rows and columns of first matrix).

Next n lines contain m elements which are elements of first matrix.

Next line contains i and j (number of rows and columns of second matrix).

Next, i lines contain j elements which are elements of the second matrix.

Constraints

n<100

m<100

i<100

j<100




Output
Output one number, which is the sum of elements of that matrix whose sum is greater than other.


Sample Input 1 

3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8
Sample Output 1

42
Hint

Sample 1 Explanation

Sum of elements present in the first matrix is 42 and the sum of elements present in the second matrix is 32.


*/

function sumMat(mat) {
    var sum = 0;
    for (var row = 0; row < mat.length; row++){
        
        for (var col = 0; col < mat[row].length; col++){
            sum += mat[row][col];
        }
    }
    return sum;
}

function runProgram(input) {
    input = input.split("\n");

    var start = 0;
    var max = Number.MIN_SAFE_INTEGER;
    
    while (start < input.length) {
         var dim = input[start++].split(" ").map(Number);
    
    var row = dim[0];
    var col = dim[1];
    
        var oneDimArr = input.slice(start, start+row);
        start= start + row;
    
    var twoDimArr = [];
    for (var i = 0; i < oneDimArr.length; i++){
        twoDimArr.push(oneDimArr[i].split(" ").map(Number));
    }
        var sum = sumMat(twoDimArr);
        if (sum > max) {
            max = sum;
        }
    }
   
    console.log(max);
    
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
//Enter code here