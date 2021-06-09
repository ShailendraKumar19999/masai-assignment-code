var arr = [1, 2, 3, 4];
var output = "";
for (var i = 0; i < 4; i++) {
  for (var j = i; j < 4; j++) {
    for (var k = i; k <= j; k++) {
      output += arr[k] + " ";
    }
    output += "\t";
  }

  output += "\n";
}
console.log(output);
