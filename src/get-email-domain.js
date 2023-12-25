const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let nStr = email.slice(email.lastIndexOf('@')+1, email.length);
  if(nStr.startsWith('.')){
    return nStr.slice(1, nStr.length)
  } else {
    return nStr;
  }
}

module.exports = {
  getEmailDomain
};
