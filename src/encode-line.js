const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let arr2 = []
  let count = 0;
  
  
  
  for(let [i, el] of arr.entries()){
      
       if(arr2.length === 0){
           arr2.push(el)
      }
  
      if(arr2[arr2.length-1] != el){
  
          if(count > 1){
          arr2.push(count)
          }
          
          arr2.push(el)
          count = 1;
          
      }
     
      else {
          count += 1;
  
      }
      
  }
  
  if(count > 1){
          arr2.push(count)
          }
          
          
  for (let i = 0; i < arr2.length; i++) {
  
      if(typeof arr2[i] === 'number') {
          arr2.splice(i-1,0,arr2[i]);
          arr2 = arr2.slice(0,i+1).concat(arr2.slice(i+2,arr2.length))
  
        i++
      }
  }
  
  return arr2.join('')
  // console.log(count)
  }

module.exports = {
  encodeLine
};
