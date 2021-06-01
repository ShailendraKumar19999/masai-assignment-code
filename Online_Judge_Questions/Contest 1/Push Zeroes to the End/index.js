/*
Description

You are given an array A of size N. Your task is to modify the array, such that all the zeroes are pushed to the end. The relative order of all the other elements should remain the same.


Input
The first line contains T, the number of test cases.

The first line of each test case contains N, the size of the array.

The next line contains N space separated integers denoting the elements of the array.

Constraints

1 <= T <= 10

1 <= N <= 100

1 <= A[i] <= 100


Output
For each test case, print the modified array on a single line, on a new line.


Sample Input 1 

2
5
0 1 2 3 0
5
0 0 1 2 3
Sample Output 1

1 2 3 0 0 
1 2 3 0 0 
Hint

In the sample test case, both the arrays, after pushing zeroes to the end, become as shown in the sample output.
*/


  
   
    
  

	 
function runProgram(input){
  input = input.split("\n");
  var T = Number(input[0]);
  var pos =1;
  for(var i=0 ; i<T; i++){
  	var N = Number(input[pos]);
    var arr = input[pos+1].split(" ").map(Number);
    var count=0;
    var output ="";
    var result ="";
    
    	for(var i=0 ; i<N ; i++)
    	{var temp;
    		if(arr[i] !== 0)
        	{
         	 temp = arr[count];
         	 arr[count] = arr[i];
          	arr[i] = temp;
          	count++;
         
        	}
      
     
    	}
     
   		 for(var i=0;i<N;i++){
    		output +=arr[i]+" ";
   		 }
    
    console.log(output);
    pos +=2;
    //console.log(solution.join(" "));
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
});//Enter code here//Enter code here