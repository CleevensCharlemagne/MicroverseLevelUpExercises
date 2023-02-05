function birthdayCakeCandles(arr){
  n = arr.length;
  top = 0;
  n_top = 0
  if(n >= 1 && n <= 10**5){
    for(let i = 0; i < n; i++){
      if(arr[i] > top){
        top = arr[i];
      }
    }

    for(let i = 0; i < n; i++){
      if( arr[i] === top){
        n_top++;
      }
    }
    return n_top;
  }
  else {
    console.log("Ypour array has an invalid length!!!");
    return;
  }
}

function main(){
   let n = prompt("Enter the length of your array");
  n = parseInt(n);

  let entries = prompt("Your " + n + " entryt(ies) separated by space").split(" ");

  let valuable = true;
  if(entries.length === n){
    for(let i = 0; i < entries.length; i++){
    if(entries[i] < 1 || entries[i] > 10**7){
      valuable = false;
      break;
    }
  }

  if(valuable === true){
    console.log(birthdayCakeCandles(entries));
  } else{
    console.log("All the entries of your array should be greater or equal to 1 and less or equal to 10^7");
    return;
  }
  }
  else{
    console.log("the length of your table should be equal to " + n);
    return;
  }
  
}

main();
