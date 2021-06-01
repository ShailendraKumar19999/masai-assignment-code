/*
Description

Given 2 matrix , find and print the matrix which is the sum of both the matrix. If they cannot be added together output -1



Note: 2 matrix can only be added if both of them have same number of rows and same number of columns


Input
The first line of input will contain 4 integers denoting R1, C1, R2, C2, which is the number of rows of matrix 1, the number columns of matrix 1,the number of rows of matrix 2, number columns of matrix 2 respectively.

Next R1 lines will contain C1 integers, which are the matrix elements.

Next R2 lines will contain C2 integers, which are the matrix elements.



Constraints:
1<= R1,C1,R2,C2 <=100

1<= Matrix[i][j] <= 100


Output
Output the new matrix ( sum of matrix 1 and matrix 2 ), if it cannot be added then output -1


Sample Input 1 

2 2 2 2
1 2
3 4
2 3
4 5
Sample Output 1

3 5
7 9

*/

function sumOfMatrix(matrix1, matrix2, r1, c2) {

    
        var output = "";
        for (var i = 0; i < r1; i++){
            for (var j = 0; j < c2; j++){
                output += matrix1[i][j] + matrix2[i][j] + " ";
                //console.log(output);
            }
            output += "\n";
        }
       console.log(output) 
    //return output;
    
    
}

function runProgram(input) {
    input = input.split("\n");
	 var dim = input[0].split(" ").map(Number);
    var r1 = dim[0]; //console.log(r1);
     var c1 = dim[1];
   	var r2 = dim[2];
    var c2 = dim[3];
    
    if (r1 === r2 && c1 === c2)
    {
        
            var oneDimArr1 = input.slice(1, r1 + 1);
            var matrix1 = [];
        for (var i = 0; i < oneDimArr1.length; i++)
        {
                matrix1.push(oneDimArr1[i].split(" ").map(Number));
        }
        
        var oneDimArr2 = input.slice(r1 + 1);
        var matrix2 = [];
        for (var i = 0; i < oneDimArr2.length; i++)
        {
                matrix2.push(oneDimArr2[i].split(" ").map(Number));
        }
        //console.log(matrix2);
        var result = sumOfMatrix(matrix1, matrix2, r1, c2);
        //console.log(result);
        return result;
    }
    else {
        //return -1;
        console.log(-1)
    }
     
  
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
//Enter code here//Enter code here