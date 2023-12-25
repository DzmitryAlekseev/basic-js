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
  
    if(options.hasOwnProperty('repeatTimes') === false){
       if(options.hasOwnProperty('addition')){
          return str + options.addition
           console.log(str)
       } 
    }
  
    for(let i = 0; i < options.repeatTimes; i++){
     
       if(options.hasOwnProperty('addition')){
           if(options.hasOwnProperty('additionRepeatTimes')){
                arr2 = [];

                for(let j = 0; j < options.additionRepeatTimes; j++){
                  arr2.push(options.addition);
                }
            
                arr2 = str + arr2.join(options.additionSeparator);
                arr.push(arr2);
                console.log(arr)
           } else {
                arr.push(str + options.addition)
                console.log(arr)
           }
       } else {
            arr.push(str)
            console.log(arr);
       }
    }

    if(options.hasOwnProperty('separator')){
        arr = arr.join(options.separator);
    } else {
        arr = arr.join('+');
    }
    return arr
}
  // let arr = []
  // let arr2 = []
  // for(let i = 0; i < options.repeatTimes; i++){
  //   arr2 = [];

  //   for(let j = 0; j < options.additionRepeatTimes; j++){
  //     arr2.push(options.addition);
  //   }

  //   arr2 = str + arr2.join(options.additionSeparator);
  //   arr.push(arr2);
  // }

  // arr = arr.join(options.separator);


repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
