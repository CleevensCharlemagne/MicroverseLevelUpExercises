function staircase(n){
  if(n <= 100 || n > 0){
    for(let i = n; i >= 1; i--){
      for(let j = 1; j <=  n; j++){
        if(j >= i){
          process.stdout.write("#");
        }
        else{
          process.stdout.write(" ");
        }
      }
      console.log();
    }
  } else {
    console.log("Invalid entry!!!")
    return
  } 
}

function main(){
  let n = prompt("Enter the number of row expected");
  staircase(n);
}

main();
