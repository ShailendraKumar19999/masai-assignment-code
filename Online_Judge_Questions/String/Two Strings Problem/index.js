/*
Description

A substring is a contiguous sequence of characters within a string.

You are given two strings: S1 and S2.

Print "Yes" if S2 is a substring of S1, else print "No"

You are not allowed to use any inbuilt function.


Input
Input Format:

First line contains S1

Second line contains S2


*/
var str1 = "masai";
     var str2 = "sai";
 var len1= str1.length;
  var len2 = str2.length;
var isSubstring = false;
for (var i = 0; i <= len1 - len2; i++)
{var count= 0;
  	for(var j=0; j<len2; j++)
    {
      if (str1[i + j] !== str2[j]) {
        break;
      }
      else
        count++;
     
  }
  if(count === len2)
    isSubstring = true;
 
  }
  if(isSubstring === true)
    	console.log("Yes");
  else
    console.log("No");
 