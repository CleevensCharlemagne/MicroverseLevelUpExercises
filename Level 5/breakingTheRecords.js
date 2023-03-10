function breakingTheRecords(arr){
  let n = arr.length
  let max = arr[0];
  let overMax = 0;
  let underMin = 0;
  let min = arr[0];

  if(n >= 1 && n <= 1000){
    for(let i = 0; i < n; i++){
      if(arr[i] > max){
        max = arr[i];
        overMax++;
      } else if(arr[i] < min){
        min = arr[i];
        underMin++;
      }
    }
    console.log(overMax, underMin);
  }
  else{
    console.log("Your array exceeded the acceptable length!!!");
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
    if(entries[i] < 0 || entries[i] > 10**8){
      valuable = false;
      break;
    }
  }

  if(valuable === true){
    breakingTheRecords(entries);
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
