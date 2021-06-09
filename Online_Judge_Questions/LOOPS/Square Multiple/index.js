/*
1 2 3 4 
2 4 6 8 
3 6 9 12
4 8 12 16
*/
var N = 4;
  for(var i=1; i<=N; i++)
  {
    var output = "";
    for(var j=1; j<=N; j++)
    {
         output +=(i*j)+ " ";
    }
    //var output = s;
    
      console.log(output);
    
    
  }