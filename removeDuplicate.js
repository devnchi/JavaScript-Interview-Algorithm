/*
Question: How would you remove duplicate elements from an array?

Answer: Start a while loop and keep an object/associated array. 
Once element is found, its value is set as true. If element already exists in the object, it will not be reinserted into the return object.
*/

function removeDuplicate(arr){
  var exists ={},
      outArr = [], 
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

> removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
  = [1, 3, 5, 6, 7, 8]
