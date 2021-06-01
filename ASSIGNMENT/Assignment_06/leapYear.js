// year should be divisible by 4 and 400
// year should not be divisible by 100
// 400 -> 4 * 100
// 400
//    ->4
//    ->100
var year = 2400;
if (year % 400 === 0) {
    if (year % 4 === 0 || year % 100 ===1) {
        
        console.log("Leap Year");
    }
    else {
        console.log("Not Leap Year");
    }
}
else {
    console.log("Not Leap Year");
}
