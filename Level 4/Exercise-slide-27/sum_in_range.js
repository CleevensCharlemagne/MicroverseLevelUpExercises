//Sum in range
function sumAll(arr) {
  let counter = 0;
   let first = arr[0];
   let second = arr[1];
  if(arr[0] > arr[1]){
    first = arr[1];
    second = arr[0];
  }

  for(let i = first; i <= second; i++){
    counter += i;
  }  
  
  return counter;
}

sumAll([1, 4]);
