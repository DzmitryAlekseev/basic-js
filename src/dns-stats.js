const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let count = 0;
  let topLevelDomain;
  let domainName;
  let way;
 
  let obj = {};
  
  function countInArray(array, dns) {
        count = 0;
      let dnsArray = dns.split('.').reverse().filter(e => e);

      let dnsSearch = dnsArray.join('.')
     
      for(let i=0; i<array.length; i++){

          if(array[i].includes(dnsSearch)){
              count++;
          }
          
      }
      
      return count;
  }
  
  let domainsNew = [];

let keys0 = domains.forEach((element) => {
    domainsNew.push(element)
    for(let i=1; i<element.split('.').length; i++){
        domainsNew.push(element.split('.').slice(i,element.split('.').length).join('.'));
        }
    })

let domainsNew0 = domainsNew.filter((element,index) => {
    return domainsNew.indexOf(element) === index;
})
console.log(domainsNew0)

  
  for(let elem of domainsNew0){
      let arr = elem.split('.');
      arr.push('')
      arr = arr.reverse().join('.')
      console.log(arr)
      
      key = arr;
      obj[key] = countInArray(domains, arr);
  }
   
    
    return obj;
}


module.exports = {
  getDNSStats
};
