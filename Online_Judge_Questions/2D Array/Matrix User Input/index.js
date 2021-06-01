function runProgram(input) {
    input = input.split("\n");
    var pos = 0;
    while (pos < input.length) {
        var dim = input[pos++].split(" ").map(Number);
        var row = dim[0];
        var col = dim[1];
        var oneDimArr = input.slice(pos, row + pos); //convert into 1-D Array
        pos = pos + row;
        console.log(oneDimArr)
        var twoDimArr = [];
        for (var i = 0; i < oneDimArr.length; i++) {
            twoDimArr.push(oneDimArr[i].split(" ").map(Number)); // store into 2-D Array
        }
        console.log(twoDimArr)

    }

    /*
    var dim2 = input[row+1].split(" ").map(Number);
    var row2 = dim2[0];
    var col2 = dim2[1];
    var oneDimArr2 = input.slice( row + 2);
    console.log(oneDimArr2)
    var twoDimArr2 = [];
    for (var i = 0; i < oneDimArr2.length; i++){
        twoDimArr2.push(oneDimArr2[i].split(" ").map(Number));
    }
    console.log(twoDimArr2)
    */
}
runProgram(`3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8`);