const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = arr.map((elem, i) => elem === -1 ? i : '').filter((elem) => elem !== '');
  console.log(arr2);

  let sortArr = arr.sort((a, b) => a - b).filter((elem) => elem > -1);
  console.log(sortArr)

  arr2.forEach((elem) => {sortArr.splice(elem, 0, -1)})
  let res = sortArr

  return res;
}


module.exports = {
  sortByHeight
};
