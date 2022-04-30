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
let arrResult = [];
let sumEl = 1;
let res = '';

for (let i = 0; i <= str.length; i++){
  if (str[i] === str[i + 1]) {
    sumEl++;
    
  } else {
    if(sumEl === 1) {
      res += str[i];
    } else {
    res += (sumEl + str[i]);
  }
    sumEl = 1;
  }
} 
arrResult.push(res);
return (arrResult.join());
}

module.exports = {
  encodeLine
};
