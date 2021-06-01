/*
Description

You are given an array A of N integers, and an integer K. You have to find the sum of all the numbers in the array which have less than or equal to K.


Input
The first line of the input contains N, the size of the array, and K as mentioned in the problem statement.

The next line contains N space separated integers, denoting the values of the array.


Output
Print a single integer denoting the sum of all the elements in the array, whose value is less than or equal to K.


Sample Input 1 

4 2
1 2 3 4
Sample Output 1

3
Hint
*/

function runProgram(input){
	  input = input.split("\n");
	 var arr1 =input[0].split(" ");
  	var N = Number(arr1[0]);
  	 var K =Number(arr1[1]);
  var arr2 = input[1].split(" ").map(Number);
 var sum =0;
 for(var i=0; i<N; i++){
   if(K >= arr2[i]){
   		sum += arr2[i];
   }
 }
	console.log(sum); 
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
});//Enter code here//Enter code here