/*
Given an unordered list of the numbers 1 to 100, we have removed one at random.
Please write a function that takes that list as the input, and returns the missing number.

Use any language you're comfortable with and don't worry about syntax, pseudo code is all we are looking for.

pararmeter: input list
return: the missing number
example: 12

sort list, find the number

sort function

for loop to iterate thru the list

current index is +1 than the last index.

if current index is not +1 than the last index,

it should return list[i].
*/



function removeMissing (list) {
	
  list.sort()
  
	if (list[0] !== 1) {
  	return 1;
  } 
	for ( var i=0; i < list.length; i++) {
   
   list[i] !== list [i -1} + 1)
  
  }	
    return list[i] + 1
}



//var list = [1, 4, 5,  2]

//[1, 2, 4, 5]

//for loop thru
//skip over the first index
