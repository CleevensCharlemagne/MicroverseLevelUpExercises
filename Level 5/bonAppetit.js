function bonAppetit(bill, k, b){
    let n = bill.length;
    let due_sum = 0;
  // If 2 <= n >= 10^5, we sum all the price except the one that we did not eat for
    if(n >= 2 && n <= 10**5){
      for(let i = 0; i < n; i++){
        if(i !== k){
          due_sum += bill[i];
        }  
      }
  
      // Calculate the change if it is equal to zero we say "Bon appetit"
      due_sum = b - (due_sum / 2);
      if(due_sum === 0){
        console.log("Bon appetit!");
      }
      else{
        console.log(due_sum);
      }
    }
    else{
      console.log("That bill has an invalid length!!!");
      return;
    }
  }
  
  function main(){
    // Get the fist line of input from the user containing the length of the bill array and the index of the meal we didn't eat so the one we won't pay for.
    let line1 = prompt("Your entryt(ies) separated by space").split(" ");
  
    //Convert the first entry which is the length of the coming array to integer.
  let n = parseInt(line1[0]);
  
    //Test if the second entry in teh interval [0; n[
  let k = parseInt(line1[1]);
    if(k < 0 || k >= n){
      console.log("The second value is out of the range of your bill array!!!");
      return;
    }
  
    //Getthe second line input which all the entries of the bill array one one line separated by space.
    let bill = prompt("Enter your bill array on one line.").split(' ');
  
    //Convert all the entries of the bill array to integer if possible
    // also checking if 0 <= bill[i] <= 10^4
    let temp = [];
    let sum = 0;
    for(let i = 0; i < bill.length; i++){
      if(parseInt(bill[i]) >= 0 && parseInt(bill[i]) <= 10**4){
        temp.push(parseInt(bill[i]));
        sum += temp[i];
      } else{
        console.log("Maybe one or severals of the entries is (are) invalid!!!");
        return;
      }
    }
    bill = temp;
  
  //Get the last input from the user which is the amount of money they gave to see if we need to give them change
    let b = parseInt(prompt("Enter the amount of money you gave."));
  
    //Checking if 0 <= b <= sum(bill[i])
    if(b < 0 || b > sum){
      console.log("The money you entered is invalid!!!");
      return;
    }
  
    //calling the bonAppetit function
    bonAppetit(bill, k, b);
  }
  
  main();
