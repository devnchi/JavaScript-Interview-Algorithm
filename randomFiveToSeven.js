/*
Question:If you have a function that generates a random number between 1 and 5, how could you generate a random number from 1 to 7 using that same function?

Answer: Think of some basic arithmetic and you will get it.
*/

function rand5(){
   return 1 + Math.random() * 4;
}

function rand7(){
  return 5 + rand5() / 5 * 2;
}
