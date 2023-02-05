function sumPrimes(num) {
  let output = 0;
  
 for(let i = 3; i <= num; i++){
   let isNotPrime = false;
    for (let j = 2; j < i; j++){
        if (i % j === 0){
          isNotPrime = true;
          break;
        }
      }
    if(isNotPrime === false){
      output += i;
    }    
 }
  
  console.log(output+2);
  return output+2;
}

sumPrimes(10);
