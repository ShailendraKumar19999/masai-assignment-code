//COMPOUND INTEREST

var principalAmount, interestPercentage, time, compoundInterest;

principalAmount = 20000;
interestPercentage = 7;
time = 8;

// compound Interest = principalAmount((100 + interestPercentage)/100) ** time - principalAmount;

compoundInterest = principalAmount * ((100 + interestPercentage) / 100) ** time -principalAmount;

console.log("Compound Interest is : ", compoundInterest);




//GAME -1

var game1 = true && !(false) && !(true) || true || false;

/*
priority goes to like  () > && > || > !
step1: first calculate true && !(false) -> true
step2: then true && !(true) -> false 
step3: then false || true -> true
step4: then true || false -> true
*/
console.log("GAME-1 : ",game1);
//my answer matches by running the code.




//GAME -2

var game2 = false && true || !(false) && (!true || !false);

/*
priority goes to like  () > && > || > !
step1: first calculate false && true -> false
step2: then !(false) -> true 
step3: then (!true || !false) -> true
step4: then !(false) && (!true || !false) -> true
step5: then false && true || !(false) && (!true || !false)  -> true
*/
console.log("GAME-2 : ",game2);
//my answer matches by running the code.



//GAME-3

var game3 = true && false && (!false || !false) && true;

/*
priority goes to like  () > && > || > !
step1: first calculate true && false -> false
step2: then (!false || !false) -> true
step3: then false && (!false || !false) -> false 
step4: then false && true -> false

*/
console.log("GAME-3 : ",game3);
//my answer matches by running the code.




//GAME -4

var game4 = !(false && !false || (false && !true || !true));

/*
priority goes to like  () > && > || > !
step1: first calculate false && !false -> false
step2: then (false || !true) -> false
step3: then (false || !true) -> false
step3: then false || false -> false 
step4: then !false -> true

*/
console.log("GAME-4 : ",game4);
//my answer matches by running the code.