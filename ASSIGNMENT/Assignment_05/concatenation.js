/*
firstName
lastName
age
Address
City
State
Pincode
*/
var firstName = "Shailendra";
var lastName = "Singh";
var age = 35;
var address = "#6534";
var city = "Patna";
var state = "Bihar";
var pinCode = 884356;

var details = firstName + " " + lastName + ","
            + "\n" +"Age is :"+ age + "," 
            + "\n" + "Address:" +address + "," 
            + "\n" + city + ","
            + "\n" + state + ","
            + "\n" + "PinCode:" +pinCode; 
console.log(details);  

//backstics `${variable name}`

var info = `
${firstName} ${lastName},
Age is : ${age},
Address: ${address},
         ${city},
         ${state},
         ${pinCode}
        `;

console.log(info);

