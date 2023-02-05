function reverseString(str) {
  let holder = '';
  for(let i = str.length -1; i >= 0; i--){
    holder += str[i];
  }
  str = holder
  return str;
}

reverseString("hello");
