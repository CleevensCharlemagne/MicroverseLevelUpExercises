'use strict';

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
*Complete the countApplesAndOranges function in the editor below. 
*It should print the number of apples and oranges that land on Sam's 
*house (i.e in the interval [s t]), each on a separate line.
*
*countApplesAndOranges has the following parameter(s):
*
*s: integer, starting point of Sam's house location.
*t: integer, ending location of Sam's house location.
*a: integer, location of the Apple tree.
*b: integer, location of the Orange tree.
*apples: integer array, distances at which each apple falls from the tree.
*oranges: integer array, distances at which each orange falls from the tree.
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInTheHouse = 0;
    let orangesInTheHouse = 0;
    let a_apples = [];
    let b_oranges = [];
    // Write your code here
    for(let i = 0; i < apples.length; i++){
        a_apples.push(a + apples[i]);
    }
    
    for(let i = 0; i < oranges.length; i++){
        b_oranges.push(b + oranges[i]);
    }
    
    for(let i = 0; i < a_apples.length; i++){
        if(a_apples[i] >= s && a_apples[i]<= t){
            applesInTheHouse++;
        }
    }
    
    for(let i = 0; i < b_oranges.length; i++){
        if(b_oranges[i] >= s && b_oranges[i]<= t){
            orangesInTheHouse++;
        }
    }
    
    console.log(applesInTheHouse);
    console.log(orangesInTheHouse);

}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
