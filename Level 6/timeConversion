'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let output = "";
    let hour = s.slice(0, 2);
    let type = s.slice(8);

  if(hour === "12"){
    if(type === "AM"){
      output = "00"+s.slice(2, 8);
    } else{
      output = s.slice(0, 8);
    }
    
  } else if(type === "PM"){
            hour = parseInt(hour);
            hour = hour + 12;
            hour = hour.toString();
            output = hour+s.slice(2, 8);
        
    } else if(type === "AM"){
        output = s.slice(0, 8);
    }
  return output;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
