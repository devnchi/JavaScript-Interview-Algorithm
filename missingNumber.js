/*
Question: From a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

Explanation: You have an array of numbers 1 to 100. Only one number is missing in the array. The array is unsorted. Find the missing number.

Answer: Talk about the sum of a linear series of n numbers = n*(n+1)/2
*/

function missingNumber(arr){
  var n = arr.length+1, 
  sum = 0,
  expectedSum = n* (n+1)/2;
  
  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}

> missingNumber([5, 2, 6, 1, 3]);
  = 4
