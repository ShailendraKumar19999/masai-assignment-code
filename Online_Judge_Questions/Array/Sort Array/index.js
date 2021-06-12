// decreasing order sorting
// 
// var arr = [12, 35, 1, 10, 34, 1];
// for (let i = 0; i < arr.length; i++){
//   for (let j = i; j < arr.length; j++){
//     if (arr[i] < arr[j]) {
      
//      var temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   //console.log(arr[i])
// }
// console.log(arr);//[ 35, 34, 12, 10, 1, 1 ]



// increasing order

var arr = [12, 35, 1, 10, 34, 1];
for (let i = 0; i < arr.length; i++){
  for (let j = i; j < arr.length; j++){
    if (arr[i] > arr[j]) {
      
     var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  //console.log(arr[i])
}
console.log(arr);// [ 1, 1, 10, 12, 34, 35 ]
