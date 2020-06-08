/*
Question: How could you find all the prime factors of a number?

Answer: Run a while loop. Start dividing by two and if instance is not divisible, then increase increment until loop is done.
*/

function primeFactors(n){
  var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

> primeFactors(69);
  = [3, 23]
