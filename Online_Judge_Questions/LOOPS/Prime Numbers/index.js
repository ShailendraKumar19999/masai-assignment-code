var a = 2;
	 var b = 20;
   var output = "";
  for(var i=a; i<=b;i++){
    var isPrime = 1;
   
    for(var j=2 ; j<i; j++){
      if(i % j === 0){
        isPrime++;
        break;
      }
      
    }
    if(isPrime === 1 && i>1){
      output +=j + " ";
      }
    else{
      continue;
    }
    
  }
  console.log(output); 