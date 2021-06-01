// part-1 (Result: false)
//*true || <fill_here> || false && <fill_here>

console.log("\nPart.1 Not possible value: false\npossible value:", true || false || false && false);
console.log("\n");


// part-2 (Result: true)
//<fill_here> || true && false ||  <fill_here>
console.log("Part.2 possible value 3: true");
console.log(false || true && false || true);
console.log(true || true && false || true);
console.log(true || true && false || false);

//part-3 (Result: false)
//false || true || <fill_here> || <fill_here> && true

console.log("Part.3 Not possible value: false\npossible value:", false || true || true || false && true);


//part-4 (Result: true)
//false && true || <fill_here> || <fill_here> && false


console.log("\nPart.4 possible value 2: true");
console.log(false && true || true || true && false);
console.log(false && true || true || false && false);


//part-5 (Result: false)
//false || <fill_here> || <fill_here> && true || false

console.log("Part.5 Possible value:",false || false || false || false);



