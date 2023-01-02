function veryBigSum(){
  let output = 0;
  
  let length = prompt("Enter the length of your array");
  length = parseInt(length);

  let entries = prompt("Your " + length + " entryt(ies) separated by space").split(" ");

  while(entries.length > length || entries.length < length){
  entries = prompt("The length of your array should equal to: " + length).split(" ");
}
  
  for(let i = 0; i < length; i++){
    output += parseInt(entries[i]);
  }

  return output;
}
console.log(veryBigSum());
