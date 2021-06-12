/*
Nobita and Vowels
Description

Nobita & Doraemon both are given a number N (length of the string) and a string, you need to tell whether the string contains any vowel or not. If it contains any vowel return true else return false.



"cdefg" , this string contains a vowel "e" , so the output will be true



Note: The input string contains only lowercase English alphabet


Input
Input Format:

First line of input contains the number N , denoting the length of the string.

Second line of input contains the string.



Constraints:
1<=N<=1000


Output
Output true or false based upon whether it contains a vowel or not.



Make sure to return "true" and "false" without quotes.


Sample Input 1

5
cdefg
Sample Output 1

true
Sample Input 2

5
cdfgg
Sample Output 2


false

*/

function runProgram(input) {
    var newInput = input.split("\n");
    var N = Number(newInput[0]);
    var str = newInput[1];
    var isPresent = 0;
    for (var i = 0; i < N; i++) {
        if (str[i] === 'A' || str[i] === 'a' || str[i] === 'e' || str[i] === 'E' || str[i] === 'o' || str[i] === 'O' || str[i] === 'u' || str[i] === 'U' || str[i] === 'i' || str[i] === 'I') {
            isPresent = 1;
            break;
        }

    }
    if (isPresent)
        console.log("true");
    else
        console.log("false");
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});