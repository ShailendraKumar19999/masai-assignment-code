/*
Longest Repeated Odd
Description

You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


Input
Input Format

First line contains N which is the number of element present in the array.

Second line contains N integers which are the values of array.

Constraints

N<100


Output
Output Format

Output one integer which the maximum number of times an odd number is repeated in array.


Sample Input 1 

12
1 1 1 1 2 2 2 2 2 1 1 1
Sample Output 1

4
Hint

Sample 1 Explanation

1 is repeated 4 times from index 0 to index 3 => 4 times

2 is repeated 5 times from index 4 to index 8 => 5 times

1 is repeated 3 times from index 9 to index 11 => 3 times


*/

function findMax(arr2, len) {
  var min = Infinity;
  var max = -Infinity;
  for (var i = 0; i < len; i++){
    if (max < arr2[i]) {
      max = arr2[i];
    }
    if (min > arr2[i]) {
      min = arr2[i];
    }
  }
  return max;
}

function runProgram(input){
	 input = input.split("\n");
  	var N = input[0];
  	var arr = input[1].split(" ").map(Number);
  var count = 1;
	var arr2 = [];
  for(var i=1 ; i< arr.length; i++){
   var current= arr[i];
     var prev= arr[i-1];
    if (current === prev) {
      if (current % 2 === 1)
        count++;
      else
        count = 0;
      
    }
    else{
    	//count=0;
      if (current % 2 === 0 && prev %2 ===0) {
        count = 0;
        arr2.push(count);
      }
      else {
        arr2.push(count);
      count = 1;
      }
     
      
    }
    if(i === arr.length - 1){
    	
      arr2.push(count);
    }
    
  }
var len = arr2.length;

var result = findMax(arr2, len);
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
});//Enter code here