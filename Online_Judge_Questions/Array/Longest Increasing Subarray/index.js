/*
Longest Increasing Subarray
Description

Given an array A with n integers, find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.

Expected Time Complexity O(n^2) for each array.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the number of elements in the array A.

The second line of each test case contains n integers (1 ≤ Ai ≤ 100).


Output
For each test case, print the answer: The length of the longest subarray.


Sample Input 1 

2
2
1 1
6
1 2 1 2 3 1
Sample Output 1

1
3
Language: 
  

*/

function findMinGroup(arr, len) {
  var arr2=[];
var k = 0, j = 0, count=0;
for (var i = 1; i <= len; i++){
  if (arr[i] > arr[i - 1]) {
    count++;
    
  }
  else {
    arr2[k]= arr.slice(j,count+1);
    k++;
    count++;
    j = i;
  }
  
}
var arr3=[];
  for(var i=0; i<arr2.length; i++){
  	arr3[i]= arr2[i].length;
  }
 var len= arr3.length;
  return findMax(arr3, len);
}

function findMax(arr3, len){
var max= -Infinity;
  var min= Infinity;
  for(var i=0; i<len; i++){
  	if(max < arr3[i]){
    	max= arr3[i];
    }
    if(min > arr3[i]){
    	min = arr3[i];
    }
  }
  return max;
}

function runProgram(input){
	 input = input.split("\n");
  var T = Number(input[0]);
  var pos=1;
  for(var i=0; i<T; i++){
  	var N = input[pos];
  	var arr = input[pos+1].split(" ").map(Number);
    pos +=2;
    var len= arr.length;

var result = findMinGroup(arr, len);
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
});//Enter code here//Enter code here//Enter code here