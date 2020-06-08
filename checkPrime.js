/*
Question: How would you verify a prime number?

Answer: a prime number is only divisible by itself and 1. So, we should run a while loop and increase each increment by 1.
*/

function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}

> isPrime(137);
  = true
> isPrime(237);
  = false
