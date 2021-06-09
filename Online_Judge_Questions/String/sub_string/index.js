var str = "abc";
var output = "";
for (var i = 0; i < 3; i++) {
  for (var j = i; j < 3; j++) {
    for (var k = i; k <= j; k++) {
      output += str[k] + " ";
    }
    output += "\t";
  }

  output += "\n";
}
console.log(`" "\n` + output);
