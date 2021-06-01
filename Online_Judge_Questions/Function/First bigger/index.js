/*
Description

You are given n numbers and you have to answer q queries. In each query, you will be provided with a number k and you have to find the first number which is greater than k.

For instance, if there are 7 numbers 9,5,8,1,2,3,4 and k is 6, then there are 2 numbers greater than 6 => 8 and 9, but the first element greater than it is 8. So, print 8.

In case there is no number greater than k in the array, print -1

Note: You have to implement the solution with the help of functions. Any other solution will be discarded.


Input
Input Format

The first line of input contains n

Next line contains n space separated integers

After that, you are given q

In the next q lines, you are provided k in each line

Constraints

n <= 1000000

values in array, k <= 10000000


Output
Output q numbers based on problem statement given above


Sample Input 1 

10
13 89 81 66 81 63 71 76 73 81
2
65
15
Sample Output 1

66
63
*/


// find minimum which is stored in newArr
function findMin(newArr, N)
{
  var min = Number.MAX_SAFE_INTEGER;
   
  for (var i = 0; i < N; i++)
  {
    if (min > newArr[i])
    {
    min = newArr[i];
      
    }
  }
  return min;
}

function storeNewArray(arr , totalNums, k) {
  var  newArr = [];
  for (var i = 0; i < totalNums; i++)
  {	
    if (k < arr[i])
    {	// push all the element which is greater than k values into newArr
      newArr.push ( arr[i]);
    }
    // if i reach at end and k is bigger than eleements then return -1
   
   
  }
  
 
  
 if (newArr.length === 0) {
    //console.log(newArr.length)
        return (-1);
      }
 else {
    var N = newArr.length;
  var result = findMin(newArr, N);
  return result;
  }
  
}
  
  
  

  
function runProgram(input){
  input = input.split("\n");
  var totalNums = Number(input[0]);
  var arr = input[1].split(" ").map(Number);
  var query = Number(input[2]);
  var pos=2;
    
  for(var i=0 ; i<query; i++){
  	
    var k = Number(input[pos+1]);
    var solution = storeNewArray(arr, totalNums, k );
    
    pos++;
    console.log(solution);
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
});//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here