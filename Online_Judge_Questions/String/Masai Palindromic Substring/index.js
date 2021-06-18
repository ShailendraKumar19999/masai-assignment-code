/*
Masai Palindromic Substring
Description

You are provided a string S. Write a program that returns length of the longest palindromic substring of that string.


Input
Input Format

You are provided with a string

Constraints

Length of string < 100


Output
Output Format

Output one number which is length of the longest substring which is a palindrome


Sample Input 1

thisracecarisgood
Sample Output 1

7
Hint

Sample 1 Explanation

The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings. Hence the output is 7

Language:


*/

function isPalindrome(str1, N) {
    let j = N - 1;
    let isPalindrome = true;
    for (let i = 0; i < N; i++) {
        if (str1[i] !== str1[j]) {
            isPalindrome = false;
            break;
        }
        j--;
    }
    if (isPalindrome)
        return true;
    else
        return false;
}



function subString(str, n) {


    let ans = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let output = "";

            for (let k = i; k <= j; k++) {

                output += str[k];

            }
            var check = isPalindrome(output, output.length);
            if (check) {
                if (output.length > ans) {
                    ans = output.length;
                }
            }

        }


    }
    return ans;
}
function runProgram(input) {
    var len = input.length;
    var finalOutput = subString(input, len);
    console.log(finalOutput);
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