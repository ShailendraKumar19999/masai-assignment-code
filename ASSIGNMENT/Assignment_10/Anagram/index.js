/*listen, silent) , (here, heir), (wind, dwine)*/
var str1 = "wind"
var str2 = "dwine";
var s1 = str1.split("").sort().join("");
var s2 = str2.split("").sort().join("");
if (s1 === s2)
   console.log("TRUE");
else   
   console.log("FALSE");