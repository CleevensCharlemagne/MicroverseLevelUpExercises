function convertHTML(str) {
  let specialCharacters = "&<>\"\'";
  let output = "";
  for(let i = 0; i < str.length; i++){
    
      if(str[i] === "&"){
        output += "&amp;";
      } 
      else if (str[i] === "<"){
        output += "&lt;";
      }
      else if (str[i] === ">"){
        output += "&gt;";
      }
      else if(str[i] === "\'"){
        output += "&apos;";
      }
      else if(str[i] === "\""){
        output += "&quot;";
      }
      else{
        output += str[i];
      }
  
  }
  console.log(output);
  return output;
}

convertHTML("Dolce & Gabbana");
