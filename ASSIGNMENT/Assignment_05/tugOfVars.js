var a = "Masai";
var b = 21331;
var c = true;

// typeof a -> string  and  typeof b ->number
// string == number -> false
console.log(typeof a == typeof Number(b));

// a is string then convert into number it gives -> NaN
// "Masai" convert int Number("Masai") -> NaN. 
//NaN is number type
// NaN == number -> true
console.log(typeof Number(a) == typeof Number(b));

// c is boolean  convert into string "false"
// typeof "false" -> string
// String("") it is empty
// so "false" == "" -> false
console.log(typeof String(c) == String(""));