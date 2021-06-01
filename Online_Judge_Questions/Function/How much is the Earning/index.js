/*
Description

Noddy choosed a city for Advertising his company's product. There are *S* streets in that city. Each day he travels one street. There are *N* buildings in a street which are located at points 1,2,3....N(respectively). Each building has some height(Say h meters).

Noddy stands at point 0. His height is 0.5m. Now he starts communicating with the people of each building. He can communicate with people of a particular building only if he can see that building. If he succeed to communicate with any particular building then his boss gives him R rupees. i.e. if he communicates with K buildings in a day, then he will earn K times R rupees. Now Noddy wants to know his maximum Earning for each day.

Note: All the points are on Strainght Line and Noddy is always standing at point 0. Also, ensure that you use functions to implement the solution.


Input
Input Format

First line of input contains an integer S, denoting no of streets in the city.

Details for each street is described in next two lines.

First line contains two integers N and R denoting no of buildings in the Street and earning on communicating with a building.

Second line contains N integers, denoting height of building.



Constraints

N <= 10000

h <= 1000000000

S <= 100

R <= 10000


Output
Output Format

Print S Lines, each containing maximum earning in i-th street.


Sample Input 1 
*/
function lookingBuilding(arr2, numberOfBuilding) {
    var j = 0, count = 1;
for (var i = 0; i < numberOfBuilding; i++){
    if (arr2[j]< arr2[i+1]) {
        count++;
        j = i + 1;
    }
    }
    return count;
}

function runProgram(input){
  	input = input.split("\n");
  	 var T = Number(input[0]);
  var pos=1;
  for(var i=0 ; i<T;i++){
    var arr1 = input[pos].split(" ");
    var numberOfBuilding = Number(arr1[0]);
    var earn = Number(arr1[1]);
    var arr2 = input[pos+1].split(" ").map(Number);
     var result = lookingBuilding(arr2, numberOfBuilding)*earn;
    
    pos +=2;
    console.log(result);
  }
  
    
  //console.log(T);
  //console.log(arr1);
  //console.log(build);
  //console.log(earn);
 //console.log(arr2);
     
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