var unique = {
   items: ['a', 'b', 'c', 'd', 'a', 'c'],
   repeatedItem: function () {
     var output = [];
      for(var i = 0; i < this.items.length; i++){
         var count = 1;
         for (var j = i+1; j < this.items.length; j++){
            if (this.items[i] === this.items[j]) {
               count++;
            }
         }
         
         if (count > 1) {
            output.push(this.items[i]);
         
         }
}
      console.log(output)
   }
}

unique.repeatedItem();