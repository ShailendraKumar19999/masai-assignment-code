/*
* * * * 
*     *
*     *
* * * *
*/ 
var N = 4;
    var s = "";
  for(var i=0; i<N; i++)
  {		
    if(i===0 || i===(N-1))
    {
      for(var j=1; j<=N; j++)
    	{
    		s +="* " ;
    	}
    }
    else
    {
      s +="*";
      for(var k=1; k<=(2*N-3); k++)
    	{	
        	 s +=" ";	
   		 }
      s +="*";
    }
    
  
    
    s +="\n";
  }
  
  console.log(s); 
  