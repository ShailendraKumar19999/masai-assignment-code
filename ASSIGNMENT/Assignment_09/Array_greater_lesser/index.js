var compare = {
    data: [
        1, 2, 6, 7, 3, 4, 9, 0
    ],
    lessThanItems: function () {
        var k = 4;
        var array =[]
        for (var i = 0; i < this.data.length; i++){
            if (k > this.data[i]){
                array.push(this.data[i]);
            }
        }
        console.log(`Lesser -> `,array);
        
    },
    greaterThanItems: function () {
        var k = 6;
        var array =[]
        for (var i = 0; i < this.data.length; i++){
            if (k < this.data[i]){
                array.push(this.data[i]);
            }
        }
        console.log(`Greater -> `,array)
        
    }
}

compare.lessThanItems();
compare.greaterThanItems();