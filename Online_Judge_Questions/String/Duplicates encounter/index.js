/*
Description

Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).


Input
Input Format

First and the only line contains string

Constraints

Length of string < 1000


Output
Output Format


*/

function runProgram(input){
  
  
  var output=""

for (var i = 0; i < input.length; i++){
   var count = 0;
   var current = input[i];
   for (var j = i; j < input.length; j++){
      if (current === input[j]) {
         count++;
      }
     else if (current !== input[j]) {
        
         break;
      }
   }
   i += count - 1;
   if (count % 2 === 1) {
      output += current;
   }
}
if (output)
   console.log(output)
else
   console.log("Empty String")   
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});//Enter code here//Enter code here//Enter code here