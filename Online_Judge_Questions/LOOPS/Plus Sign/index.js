var N = 4;
  for(var i=1; i<=N; i++)
  {
    var s = "";
    for(var k=1; k<=N; k++)
    {
         s += " ";
    }
    //var output = s;
    for(var j=N; j<=N; j++)
    {
      
        s += "*";
        
      
      }
      console.log(s);
    
    
  }
  
  // middle part
  var output="";
  for(var m=1; m<=(2*N+1); m++){
    output +="*";
    
  }
  console.log(output);
  
  
  // lower part
  for(var i=1; i<=N; i++)
  {
    var s = " ";
    for(var k=1; k<=N-1; k++)
    {
         s += " ";
    }
    //var output = s;
    for(var j=N; j<=N; j++)
    {
      
        s += "*";
        
      
      }
      console.log(s);
    
    
  }