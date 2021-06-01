var N = 4;
  var arr = [-2, 0 ,8, 14];
  var max= Number.MIN_SAFE_INTEGER;
  var min = Number.MAX_SAFE_INTEGER;
  for(var i=0;i<N; i++)
  {
    var num = arr[i];
    
      if(max < num){
        max = num;
    }
    if(min > num){
      min = num;
    }
  }
  console.log(min);
  console.log(max);