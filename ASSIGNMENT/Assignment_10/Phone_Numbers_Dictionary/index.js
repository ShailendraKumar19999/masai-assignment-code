/*
Ajay 21345
RamDas 32146
Rohith 23522
Nihal 98743
*/


var person = {
   data: [
      {
         name: "Ajay",
         phone: 21345
      },
      {
         name: "RamDas",
         phone: 32146
      },
      {
         name: "Rohith",
         phone: 23522
      },
      {
         name: "Nihal",
         phone: 98743
      },

   ],
   findUser: function () {
      var isFound = false, result;
      for (var i = 0; i < this.data.length;i++){
         if (this.data[i].name === "Mani" ) {
         result=this.data[i].phone;
            isFound = true;
         }
         
      }
      if (isFound) {
         console.log(result)
      }
      else {
            console.log("No user found")
         }
   }
}

person.findUser();