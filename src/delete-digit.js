const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let nNew;
  let nStr = n.toString();

  for(let i=0; i < nStr.length; i++){
    nNew = Number(nStr.slice(0,i) + nStr.slice(i+1,nStr.length));
    if(nNew > result) {
      result =  nNew
    }
  }

  return result;
  
}

deleteDigit(1876)
console.log('test')

module.exports = {
  deleteDigit
};
