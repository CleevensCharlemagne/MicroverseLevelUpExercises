/**
 * A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.
 * @param {integer} k - the height the character can jump naturally.
 * @param {integer} heights - array containing the heights of each hurdle.
 */
function hurdleRace(k, heights){
  let top = 0;
  for(let i = 0; i < heights.length; i++){
    if(heights[i] > top){
      top = heights[i];
    }
  }

  if(top > k){
    console.log(top - k);
  } else {
    console.log(0);
  }
}

function main(){
  // The first line contains two space-separated integers n and k, the number of hurdles and the maximum height the character can jump naturally. 
  let heights = [];
    let line1 = prompt("Your entryt(ies) separated by space").split(" ");
  
    //Test if the first entry, which is the length of the arra, is in the interval [1; 100]
  let n = parseInt(line1[0]);
  if(n < 1 || n > 100){
      console.log("The first value is out of the range of your array!!!");
      return;
    }
  
    //Test if the second entry, which is the height the character can jump naturally, is in the interval [1; 100]
  let k = parseInt(line1[1]);
    if(k < 1 || k > 100){
      console.log("The second value is out of the range of your array!!!");
      return;
    }

  //Geting the array from the user in the form << a b c d >>
  line2 = prompt("Enter the array, each value separatedby a space").split(" ");

  //Testing if the length of the array is equal to
  if(line2.length == n){
    //Turn all the entries to integer
    for(let i = 0; i < n; i++){
      //testing if each entriy in in the interval 1 <= line2[i] <= 100
      if(parseInt(line2[i]) >= 1 && parseInt(line2[i]) <= 100){
        heights.push(parseInt(line2[i]));
      } else{
        console.log("One or severals off your entry(ies) are invalid!!!");
        return;
      }
    }
  } else{
    console.log("The length of your arra is invalid!!!");
    return;
  }
  hurdleRace(k, heights);
}

main();
