module.exports = function check(str, bracketsConfig) {
  // your solution
  r =str.length;
  
  
    for(let i = 0; i<(r*r); i++){
      
      if(str[i] === ')' && str[i-1] === '('){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // console.log(str)
        // break;
      }
      if(str[i] === '|' && str[i-1] === '|'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === ']' && str[i-1] === '['){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '}' && str[i-1] === '{'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '2' && str[i-1] === '1'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '4' && str[i-1] === '3'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '6' && str[i-1] === '5'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '7' && str[i-1] === '7'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
      if(str[i] === '8' && str[i-1] === '8'){
        str = str.slice(0, i-1) + str.slice(i+1, str.length);
        i=0;
        // break;
      }
    
    
  }
  console.log('f =' + str)
  if(str === ''){
    return true;
  }else{
    return false;
  }
}

// check('((()))()');
