/*
Odds of Odds
Description

Given an array A with n integers, find out whether the count of odd elements is odd.

If exists, then print "Yes" else "No".


Input
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 1000) — the number of elements in the array A.

The second line of each test case contains n integers (1 ≤ Ai ≤1000).


Output
For each test case, print the answer.


Sample Input 1 

3
1
1
2
1 101
2
1 200
Sample Output 1

Yes
No
Yes
*/

function runProgram(input){
	 input = input.split("\n");
  	var T = Number(input[0]);
  var pos=1;
  for(var i=0; i<T; i++){
  	var N= Number(input[pos]);
    var arr = input[pos+1].split(" ").map(Number);
    pos +=2;
    var count=0;
    for(var j=0; j<N; j++){
    	if(arr[j] % 2 ===1){
        	count++;
        }
    }
    if(count % 2 ===1)
      	console.log("Yes");
    else
      	console.log("No");
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
//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here