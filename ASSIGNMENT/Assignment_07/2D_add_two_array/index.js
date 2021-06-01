// Matrix 1
var matrix1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];
// Matrix 2
var matrix2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];
var output = "";
for (var i = 0; i < matrix1.length; i++){
    for (var j = 0; j < matrix1[i].length; j++){
        output += matrix1[i][j] + matrix2[i][j] + " ";
    }
}
console.log(output)