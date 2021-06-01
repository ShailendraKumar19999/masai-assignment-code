/*
Description

Given a string containing both Uppercase and Lowercase characters , you need to change the Uppercase into Lowercase and Lowercase into Uppercase.

Note: "A" will be changed to "a"  and "b" will be changed to "B"


Input
Input Format

The first line will contain an integer N, denoting the size of the string.

The next line will contain the string of N size.


*/
var N = 5;
     var nums = "aBbcd";
    
     var output="";
  for(var i=0; i<N; i++){
  		if(nums[i] === nums[i].toUpperCase())
        {
          output +=nums[i].toLowerCase();
        }
    	else{
        	output +=nums[i].toUpperCase();
        }
    	
    
  }
 console.log(output);