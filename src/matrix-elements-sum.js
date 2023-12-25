const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
let sumByRow = [];
let temp = 0;

for (let i = 0; i < matrix.length; i++) {
  if (i === 0) {
    sumByRow.push(matrix[i].reduce((a,b) => a + b, 0))
  } else {
  temp = 0;
  for (let j = 0; j < matrix[i].length; j++){
    if (matrix[i-1][j] != 0) {
      temp = temp + matrix[i][j];
    }
  }
  sumByRow.push(temp); }

}

return sumByRow.reduce((a,b) => a + b, 0);
}

matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
   ]

   getMatrixElementsSum(matrix)

module.exports = {
  getMatrixElementsSum
};
