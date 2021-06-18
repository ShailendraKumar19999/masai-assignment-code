var str = "aman";
var output = "";
for (var i = 0; i < 4; i++) {
  for (var j = i; j < 4; j++) {
    for (var k = i; k <= j; k++) {
      output += str[k] + " ";
    }
    output += "\t";
  }

  output += "\n";
}
console.log(`" "\n` + output);
