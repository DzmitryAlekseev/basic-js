const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let arr2 = [];

  let defaultOptions = {repeatTimes: 0, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|'}

  options.repeatTimes != undefined ? defaultOptions.repeatTimes = Number(options.repeatTimes) : defaultOptions.repeatTimes = 1;
  options.separator != undefined ? defaultOptions.separator = String(options.separator) : defaultOptions.separator = '+';

  console.log(typeof String(null))
  console.log(options.addition)
  if (typeof options.addition != 'undefined') {
    console.log(options.addition)
      defaultOptions.addition = String(options.addition);
  } else {
    defaultOptions.addition = ''
  }
  // typeof options.addition != undefined ? defaultOptions.addition = 'null' : options.addition != undefined ? defaultOptions.addition = String(options.addition) : defaultOptions.addition = '';
  // console.log(defaultOptions.addition)
 

  options.additionRepeatTimes != undefined ? defaultOptions.additionRepeatTimes = Number(options.additionRepeatTimes) : defaultOptions.additionRepeatTimes = 1;
  options.additionSeparator != undefined ? defaultOptions.additionSeparator = String(options.additionSeparator) : defaultOptions.additionSeparator = '|';

  console.log(defaultOptions)



  
//     if(options.hasOwnProperty('repeatTimes') === false){
//        if(options.hasOwnProperty('addition')){
//           return str + options.addition
//            console.log(str)
//        } 
//     }
  
//     for(let i = 0; i < options.repeatTimes; i++){
     
//        if(options.hasOwnProperty('addition')){
//            if(options.hasOwnProperty('additionRepeatTimes')){
//                 arr2 = [];

//                 for(let j = 0; j < options.additionRepeatTimes; j++){
//                   arr2.push(options.addition);
//                 }
            
//                 arr2 = str + arr2.join(options.additionSeparator);
//                 arr.push(arr2);
//                 console.log(arr)
//            } else {
//                 arr.push(str + options.addition)
//                 console.log(arr)
//            }
//        } else {
//             arr.push(str)
//             console.log(arr);
//        }
//     }

//     if(options.hasOwnProperty('separator')){
//         arr = arr.join(options.separator);
//     } else {
//         arr = arr.join('+');
//     }
//     return arr
// }
  
  for(let i = 0; i < defaultOptions.repeatTimes; i++){
    arr2 = [];

    for(let j = 0; j < defaultOptions.additionRepeatTimes; j++){
      arr2.push(defaultOptions.addition);
    }

    arr2 = str + arr2.join(defaultOptions.additionSeparator);
    arr.push(arr2);
  }

  arr = arr.join(defaultOptions.separator);

  console.log(arr)

  return arr
}

repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })

module.exports = {
  repeater
};
