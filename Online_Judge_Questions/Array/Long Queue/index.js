/*
Long Queue
Description

There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.

Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves. In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing). Effectively, all people who have lined up in increasing order of height form one group

Find the minimum number of groups that can be observed in the queue?


Input
Input Format:

The first line of input contains one positive integer N. The second line contains N space-separated integers H[i] denoting the height of i-th person. Each group has group members standing in increasing order of their height.

Constraints:

N <= 1000000

H[i] <= 1000000


Output
Print the minimum number of groups that are at least present in the queue?


Sample Input 1 

6
1 2 4 3 5 8
*/

function findMinGroup(arr, len) {
  var arr2=[];
var k = 0, j = 0, count=0;
for (var i = 1; i <= len; i++){
  if (arr[i] >= arr[i - 1]) {
    count++;
    
  }
  else {
    arr2[k]= arr.slice(j,count+1);
    k++;
    count++;
    j = i;
  }
  
}

 
  return arr2.length;
}

function runProgram(input){
	 input = input.split("\n");
  	var N = input[0];
  	var arr = input[1].split(" ").map(Number);
  	var len= arr.length;

var result = findMinGroup(arr, len);
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
});//Enter code here//Enter code here