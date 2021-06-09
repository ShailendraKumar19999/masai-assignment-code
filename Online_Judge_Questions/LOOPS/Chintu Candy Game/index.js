function runProgram(input) {
  input = input.split("\n");
  var T = input[0];
  var pos = 1;
  for (var i = 0; i < T; i++) {
    var n = Number(input[pos]);
    pos += 1;

    var cashback = 0;
    var amountSpend = n;

    while (n > 9) {
      cashback = Math.floor(n / 10);
      amountSpend += cashback;
      n %= 10;
      n += cashback;
    }
    console.log(amountSpend);
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
}); //Enter code here//Enter code here
