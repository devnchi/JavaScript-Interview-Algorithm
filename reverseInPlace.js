/*
Question: Given the string "I am the good boy" how can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

Answer: Reverse both string elements and the word itself.
*/

function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

> reverseInPlace('I am the good boy');
 = "I ma eht doog yob"
