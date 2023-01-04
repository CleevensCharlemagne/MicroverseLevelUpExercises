function plusMinus(arr){
  negatives = 0;
  positives = 0;
  zeros = 0;

  if(arr.length > 0 && arr.length <= 100){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        positives++;
      } else if(arr[i] <0){
        negatives++;
      } else {
        zeros++;
      }
    }

    negatives  = (negatives/arr.length).toFixed(6);
    positives  = (positives/arr.length).toFixed(6);
    zeros  = (zeros/arr.length).toFixed(6);
  } else{
    console.log("Your array is too long!!!");
    return;
  }

  console.log(negatives);
  console.log(positives);
  console.log(zeros);
}

function main(){
  let entries = prompt("Your entries").split(" ");
  let valuable = true;
  for(let i = 0; i < entries.length; i++){
    if(entries[i] < -100 || entries[i] > 100){
      valuable = false;
      break;
    }
  }

  if(valuable === true){
    plusMinus(entries);
  } else{
    console.log("All the entries of your array should be greater or equal to -100 and less or equal to 100");
  }
  
}

main();
