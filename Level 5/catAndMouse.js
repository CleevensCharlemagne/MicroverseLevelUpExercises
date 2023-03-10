 /**
 * calulating the distance to figure out wicth cat will catch the mouse first or wether the mouse will escape. The mouse will escape on ly if the cats are at the same position are the same distance. 
 * @param {int} x - The position of cat A.
 * @param {int} y - The position of cat B.
 * @param {int} z - The position of the mouse.
 */
 function catAndMouse(x, y, z){  
    //Calculating the distance between z and y
    let yz = Math.abs(z - y);
  
    //Calculating the distance between z and x
    let xz = Math.abs(z - x);
  
    if(yz > xz){
      console.log("Cat A");
    } else if(yz < xz){
      console.log("Cat B");
    } else {
      console.log("Mouse C");
    }
  }
  
  function main(){
    //Get the number of queries from the user which means the number of positions array.
    let q = parseInt(prompt("Enter the number of queries you intend to make."));
  
    //Checking if 1 <= q <= 100
    if(q < 1 && q > 100){
      console.log("The number of array you entered is invalid.");
      return;
    }
  
    queries = [];
  //loop to create the number of arrays the user said earlier
    for(let i = 0; i < q; i++){
      let query = [];
      // Get the array on one line
      let line = prompt("Enter the three positions (A, B, C) separated by a space").split(" ");
      //Checking if the length of each arrays are equal to 3
      if(line.length === 3){
        //if so, convert each entry to integer 
        for (let i = 0; i < 3; i++){
          query.push(parseInt(line[i]));
        }
      } else {
        // if the length of the array is not equal to 3
        console.log("The length of your arrays are invalid, they should be equal to 3!!!");
        return;
      }
      queries.push(query);
    }
  
    //Checking if the number q is equal to the number of arrays the user gave
    if(queries.length > q || queries.length < q){
      console.log("You entered an invalid number of arrays!!!");
      return;
    }
  
    //Loop to apply the catAndMouse function on each array
    for(let i = 0; i < q; i++){
       catAndMouse(queries[i][0], queries[i][1], queries[i][2]);
    }
    
  }
  
  main();
