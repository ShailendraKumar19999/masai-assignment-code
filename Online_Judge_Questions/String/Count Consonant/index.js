/*
Description

You are provided a string S. Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.


Input
Input Format:

First-line contains a string S

Constraints:

Length of String is always lesser than 1000



*/
var input = "masaischool";
var str = input;
    var count=0;
  for(var i=0 ; i< str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"  ){
    	continue;
    }
    else{
      
      count++;
    }
   
    
  }
 console.log(count);