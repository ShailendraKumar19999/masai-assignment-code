var matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];
/*
var upper_triangular = [
    [1, 2, 3],
    [0, 6, 7],
    [0, 0, 9]
];
*/
var sum = 0;
for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
        if (i <= j) {
            sum += matrix[i][j];
        }
    }
}
console.log(sum);