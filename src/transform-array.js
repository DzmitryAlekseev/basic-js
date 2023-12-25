const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // try {
  //   arr.values();
  // } catch (e) {
  //   console.log(e)
  //   return "'arr' parameter must be an instance of the Array!"
  // }

  // console.log(Array.isArray(arr))
  // if(Array.isArray(arr) === false){
  //   console.log('here')
  //   throw '\'arr\' parameter must be an instance of the Array!'
  // }

  // if(arr.length === 0) {
  //   return arr;
  // }

  // arr.forEach((element,i) => {
  //   if(element === '--discard-next') {
  //     arr = arr.slice(0, i).concat(arr.slice(i+2, arr.length));
  //   } else if (element === '--discard-prev'){
  //     arr = arr.slice(0, i-1).concat(arr.slice(i+1, arr.length));
  //   } else if (element === '--double-next'){
  //    arr.splice(i, 1, arr[i+1])
  //   } else if (element === '--double-prev'){
  //     arr.splice(i, 1, arr[i-1])
  //    }
  // })
  
  // console.log(arr)
}

// transform([1, 2, 3, '--double-prev', 4, 5])

// transform(3)
// transform(3.312312)
// transform(false)
// transform(null)
// transform(undefined)
// transform({ 'foo': 'bar' })

module.exports = {
  transform
};
