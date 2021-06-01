/*
Description

You are provided a string S. Your task is to print a string which also contains the number of times that character is repeated. (Read explanation of test case for better understanding)


Input
Input Format :
First and the only line contains the string S.



Constraints :


*/
var input = "aaabbbbcc"
var output = "";
    var count=1;
  for(var i=1 ; i< input.length; i++){
   var current= input[i];
     var prev= input[i-1];
    if(current === prev){
    	count++;
    }
    else{
      output += prev + count;
      count=1;
    }
    if(i === input.length - 1){
    	output += current + count;
    }
    
  }
 console.log(output);