function pairElement(str) {
  let dna = [];
  for(let i = 0; i < str.length; i++){
    let dnaPart = [];
    switch(str[i]){
      case "A":
        dnaPart.push("A", "T");
        break;
      case "T":
        dnaPart.push("T", "A");
        break;
      case "C":
        dnaPart.push("C", "G");
        break;
      case "G":
        dnaPart.push("G", "C");
        break;
    }
    dna.push(dnaPart);
  }
 
  return dna;
}

pairElement("GCG");
