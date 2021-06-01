/*
Description

We do not like strings which have same consecutive letters. No one has any idea why it is so.

We call these strings as Bad strings. So, Good strings are the strings which do not have same consecutive letters. Now, the problem is simple. Given a string S, you need to convert it into a Good String.


Input
Input Format:

The first line contains an integer T, denoting the number of test cases.

Each test case consists of a string S, which consists of only lower case letters.

Constraints:

1 <= T <= 10

1 <= Length of string <= 30


Output
For each test case, print the answer to the given problem.

The answer is the modified good string


Sample Input 1 

3
abb
aaab
ababa
Sample Output 1

ab
ab
ababa
*/
function goodString(str, N) {
    var output = "";
    for (var i = 0; i <N; i++){
    if (str[i] !== str[i - 1]){
        output += str[i];
    }
    
    }
    return output;
}

function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0 ; i<T; i++){
  	var str = input[pos].split("");
    pos++;
    var N = str.length;
    var result = goodString(str, N);
    console.log(result);
  }
  
  
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
});//Enter code here//Enter