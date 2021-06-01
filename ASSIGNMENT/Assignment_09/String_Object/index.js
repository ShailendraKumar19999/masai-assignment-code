var string = {
    item: "Shailendra Kumar",
    vowelsCount: function () {
        var count = 0;
        for (var i = 0; i < this.item.length; i++){
            switch (this.item[i]) {
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U': count++; break;
                
                default: ;
                
            
            }
            
        }
        console.log(`numberOfVowels: `,count);
        
    },
    reverse: function () {
        var output = "";
        for (var i = this.item.length - 1; i >= 0; i--){
            output += this.item[i];
        }
        console.log(output)
    },
    changeCase: function () {
        var output = "";
        output += this.item.toUpperCase();
        console.log(output);
        
    }

}
string.vowelsCount();
string.reverse();
string.changeCase();