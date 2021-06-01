var User = {
    name: "Ironman",
    year_of_birth: 1974,
    printAge: function () {
        var current_year = new Date().getFullYear();
        var year = this.year_of_birth;
        
        console.log(current_year - year);
    },
   
}
User.printAge();