/*
Description

You are given a string S. Cut it into 2 equal halves and reverse it.

So, suppose if you have a string "abcxyz" then after performing the above mentioned operation it becomes "cbazyx"

If you have a string "abcdxyz", then after performing the above mentioned operation it becomes "cbadzyx"

Note: You have to implement the solution with the help of functions. Any other solution will be discarded.


Input
Input Format :

First line of input contains the string S

Constraints :

Length of S <= 1000


Output
Print the string with the required changes


Sample Input 1 

abcxyz
Sample Output 1

cbazyx
*/

function split(str, n) {
    var s1 = "";
    var s2 = "";
    var s3 = "";
    for (var i = 0; i < str.length; i++){
        if (str.length % 2 === 1)
        {
            if (i < n )
            {
            s1 += str[i];
            }
            else if (i === n) {
                s2 += str[i];
            }
            else {
            s3 += str[i];
             }  
        }
        else {
            if (i < n)
            {
            s1 += str[i];
            }
            
            else {
                s3 += str[i];
            }
        }
    
    }
    var res = s3 + s2 + s1;
    return  reverse(res);
}


function reverse(res) {

    var result = res;
var output = "";
for (var i = res.length - 1; i >= 0; i--)
{
    output += result[i];
}


return output;
}

function runProgram(input){
  	var str = input;
    var n = Math.floor(str.length / 2);
	var result = split(str, n);
	console.log(result);
     
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
});//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here