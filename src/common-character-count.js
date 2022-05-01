const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let stringSh = 0;
  let stringLg = 0;
  let commonSymbol = 0;
  if (s1.length > s2.length){
    stringLg = s1;
    stringSh = s2;
  } else {
    stringLg = s2;
    stringSh = s1;
  }
  for (i = 0; i < stringLg.length; i++){
    if (stringSh.indexOf(stringLg[i]) !== -1) {
      commonSymbol++;
      stringSh = stringSh.replace(stringLg[i],'');
    }
    if (stringSh === ''){
      break;
    }
  }
  return commonSymbol;
}

module.exports = {
  getCommonCharacterCount
};
