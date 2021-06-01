var matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];
var subMatrix = "";
var end_row = 2;
var end_col = 2;
for (var start_row = 1; start_row <= end_row; start_row++){
    for (var start_col = 1; start_col <= end_col; start_col++){
        subMatrix += matrix[start_row][start_col] + " ";
    }
    subMatrix += "\n";
}
console.log(subMatrix);