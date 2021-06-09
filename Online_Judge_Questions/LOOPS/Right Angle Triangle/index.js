/*
        * 
      * *
    * * *
  * * * *
* * * * *
*/
var N = 5;
    var s = "";
  for(var i=1; i<=N; i++)
  {		
    
    for(var k=N-i; k>=1; k--)
    {	
         s +="  ";	
    }
  
    for(var j=1; j<=i; j++)
    {
    	s +="* " ;
    }
    s +="\n";
  }
  
  console.log(s); 