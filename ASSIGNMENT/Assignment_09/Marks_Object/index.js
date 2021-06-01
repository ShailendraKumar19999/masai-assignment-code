var marks = {
    data: [
        {
            names: "Nrupul",
            marks: 10
        },
        {
            names: "Prateek",
            marks: 20
        },
        {
            names: "Aman",
            marks: 30
        },
        {
            names: "Albert",
            marks: 5
        },
        {
            names: "Yogesh",
            marks: 15
        }

        
    ],
    average: function () {
        var sum = 0;
        for (var i = 0; i < this.data.length; i++){
            sum += this.data[i].marks;
        }
        console.log(`Average Marks ->`,sum / this.data.length);
        
    },
    maximum: function () {
        var max = Number.MIN_SAFE_INTEGER;
        for (var i = 0; i < this.data.length; i++){
            if (max < this.data[i].marks) {
                max = this.data[i].marks;
                var name = this.data[i].names
            }
        }
        console.log(`(Maximum) ${name} -> `, max);
    },
    minimum: function () {
        var min = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < this.data.length; i++){
            if (min > this.data[i].marks) {
                min = this.data[i].marks;
                var name = this.data[i].names
            }
        }
        console.log(`(Minimum) ${name} -> `, min);
    }
}

marks.average();
marks.maximum();
marks.minimum();