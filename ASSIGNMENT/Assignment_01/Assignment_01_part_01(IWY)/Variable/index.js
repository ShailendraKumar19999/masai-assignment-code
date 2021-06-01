var a, b;
a = 30;
b = 20;
var Addition, Subtraction, Multiply, Division, Remainder, PowerOfA, PowerOfB;
//addition
Addition = a + b;

//subtraction
Subtraction = a - b;
//multiply
Multiply = a * b;

//division

Division = a / b;

//remainder
Remainder = a % b;

//exponent b raise to the power a
PowerOfA = a ** b;
//exponent a raise to the power b
PowerOfB = b ** a;

//pre increment and decrement
var c, d;
c = ++a;
d = ++b;




//post increment and decrement
var s = 22, t = 34;
e = s++;
f = t--;


console.log("Addition=", Addition);
console.log("Subtraction=", Subtraction);
console.log("Multiply=", Multiply);
console.log("Division=", Division);
console.log("Remainder=", Remainder);
console.log("difference between PowerOfA and PowerOfB=", PowerOfA-PowerOfB);

console.log("Post Increment/Decrement");
console.log("C = ", c,"A =",a);
console.log("D = ", d, "B = ", b);
console.log("Post Increment/Decrement");
console.log("e = ", e,"A =",a);
console.log("f = ", f, "B = ", b);

//find current age
var YearOfBirth = 1999;
var currentYear = new Date().getFullYear();
var age = currentYear - YearOfBirth;
console.log("Age = ", age);