//Where do I belong
function getIndexToIns(arr, num) {
  let numbersLessThenNum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < num){
      numbersLessThenNum++;
    }
  }
  return numbersLessThenNum;
}

getIndexToIns([40, 60], 50);
