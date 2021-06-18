var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3],

];

var output = "";

for (var i = 0; i < matrix[0].length; i++){
    for (var j = 0; j < matrix.length; j++){
        output += matrix[j][i] + " ";
       
    }
    output += "\n";
}

console.log(output);