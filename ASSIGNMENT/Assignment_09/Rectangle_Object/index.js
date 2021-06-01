var rectangle = {
    length: 12,
    breath: 8,
    area: function() {
        console.log(this.length * this.breath)
    },
    perimeter:function() {
        console.log(2 * (this.length + this.breath))
    }
}

rectangle.area();
rectangle.perimeter();