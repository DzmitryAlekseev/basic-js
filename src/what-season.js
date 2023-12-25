const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  

  if (typeof date === 'undefined' || date === '') {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getMonth();
  } catch (e) {
    if (e instanceof TypeError) {

      return 'Invalid date!'
    } else {
      return 'Invalid date!'
    }
  }

  console.log('fgfgfg')

  

  console.log(Object.getOwnPropertyNames(date))

  

if(Object.getOwnPropertyNames(date).length > 0 ) {
  if (typeof date == 'number' || typeof date == 'string' ||  date === undefined) {
    console.log('here')
    return 'Unable to determine the time of year!'
  }
  console.log('here')
  return 'Invalid date!'
}

if (typeof date == 'number' || typeof date == 'string') {
  return 'Unable to determine the time of year!'
}

let month = date.getMonth();

 if(month >= 0 && month <= 1 || month === 11) {
  return 'winter'
 } else if (month >= 2 && month <= 4) {
  return 'spring'
 } else if (month >= 5 && month <= 7) {
  return 'summer'
 } else if (month >= 8 && month <= 10) {
  return 'autumn'
 }  else {
  return 'Invalid date!'
 }

 
}

console.log(getSeason('foo'))
getSeason({ John: 'Smith' })
getSeason(20192701)
getSeason([2019, '27', 0 + '1'])
getSeason(() => new Date())


module.exports = {
  getSeason
};
