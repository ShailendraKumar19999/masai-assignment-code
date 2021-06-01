var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];

var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
        if (i === j) {
            sum1 += matrix[i][j];
        }
        if (i + j === matrix.length - 1) {
            sum2 += matrix[i][j];
        }
    }
}
console.log(sum1 - sum2);