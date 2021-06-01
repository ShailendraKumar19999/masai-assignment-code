/*
Description

Given a string, check whether it contains only characters, only numbers or both.

If it contains only characters, output "chars" without quotes

If it contains only numbers, output "numbers" without quotes

If it contains both numbers and characters, output "alphanumeric" without quotes


Input
Input

The first line will contain an integer N, denoting the size of the string.

The next line will contain the string of N size.

Constraints
*/
var N = 5;
     var nums = "acfgh";
    
    var countChar = 0, countNumber=0;
	for (var i = 0; i < N; i++)
	{
    	if (isNaN(nums[i])) {
      		countChar++;
    
  		}
  		else {
    		countNumber++;
  			}
   }
if (countChar > 0 && countNumber > 0)
  console.log("alphanumeric");
else if (countChar === 0 && countNumber > 0)
  console.log("numbers")
else if (countChar > 0 && countNumber === 0)
  console.log("chars")  