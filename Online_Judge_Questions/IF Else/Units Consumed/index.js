/*
Description

Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

0 -50 unit /3 rs
51 -150unit /5rs

150 and >150 unit /10rs

Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

Given the bill, write a program to find the number of units consumed.


Input
Input Format:

First and the only line of input contains the bill amount

Constraints:

Bill amount is an integer <= 1000


Output
Output the number of units consumed


Sample Input 1 

930
Sample Output 1

170
Language: 
  

*/
function runProgram(input){
	 var bill = Number(input);
  	var numOfUnit=0;
  	bill = bill-80;
  	if(bill <=150){
    	numOfUnit = numOfUnit + bill/3;
       console.log(numOfUnit);
    }
  	else if(bill <= 750){
    	numOfUnit +=50 + (bill-150)/5;
       console.log(numOfUnit);
    }
  	else{
    	numOfUnit += 50 +100+ (bill-150-500)/10;
        console.log(numOfUnit);
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
//Enter code here//Enter code here//Enter code here