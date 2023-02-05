/**
 * Return the sum of all the sub arrays inside the big array
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0
  for(let i = 0 ; i < arr.length; i++){
    for(let j = 1; j <= arr.length; j++){
      array = arr.slice(i, j);
      if(array.length % 2 !== 0){
        sum += array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
      }
    }
  }
  return sum;
}
