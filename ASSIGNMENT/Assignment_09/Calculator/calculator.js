var calc = {
    a :120,
    b: 40,
    addition: function () {
        console.log(`Addition: `,this.a + this.b);
    },
    subtraction: function () {
        console.log(`Subtraction: `,this.a - this.b);
    },
    division: function () {
        console.log(`Division: `,this.a / this.b);
    },
    multiplication: function () {
        console.log(`Multiplicaion:`,this.a * this.b);
    }
}

calc.addition();
calc.subtraction();
calc.division();
calc.multiplication();