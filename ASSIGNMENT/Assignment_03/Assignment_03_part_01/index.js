//SIMPLE INTEREST
var principalAmount,interestPercentage, time,simpleInterestAmount;

//its principal amount
principalAmount = 20000;

//its yearly interest rate
interestPercentage = 15;

//its time to taken
time = 5;

// simpleInterestAmount = (principalAmount * InterestPercentage * time)/100
simpleInterestAmount = (principalAmount * interestPercentage * time) / 100;
console.log("Simple Interest Amount = ", simpleInterestAmount);




//************************************************************************ */
//Write the variable names for the following things and assign any relevant value to it.
var avgAge = 25;
var numOfStudents = 100;
var maxMarks = 100;
var firstName = "Shailendra";
var numOfStudentsClass12th = 30;

//*************************************************************************** */
/*
Take a variable named a , assign it a value of 10, and perform the following operations on it.
*/
var a = 10;

//Add 2 to the same variable
a += 2;

//Subtract 3 from the same variable
a -= 3;

//Divide the same variable by 6
a /= 6;

//Multiply the same variable by 11
a *= 11;

//take a remainder by 7 of the same variable
a %= 7;

console.log("Value of a = ", a);




//************************************************************* */
//GAME -1
var game1 = true && false && !(true) || false;
/*
priority goes to like  () > && > || > !
step1: first calculate true && false -> false
step2: then false && !(true) -> false 
step3: then false || false -> false
*/
console.log("GAME-1 : ",game1);
//my answer matches by running the code.





// GAME -2

var game2 = true || !(false) && (true || false);

/*
priority goes to like  () > && > || > !
step1: first calculate (true || false) -> true
step2: then !(false) && true -> true 
step3: then true || true -> true
*/
console.log("GAME-2 : ",game2);
//my answer matches by running the code.




//GAME -3

var game3 = false || (true && false) || true;
/*
priority goes to like  () > && > || > !
step1: first calculate (true && false) -> false
step2: then false || false -> false 
step3: then false || true -> true
*/
console.log("GAME-3 : ",game3);
//my answer matches by running the code.




//GAME -4

var game4 = true || (false && true || true);
/*
priority goes to like  () > && > || > !
step1: first calculate false && true -> false
step2: then false || true -> true 
step3: then true || true -> true
*/
console.log("GAME-4 : ",game4);
//my answer matches by running the code.