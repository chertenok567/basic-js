const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let newString = n.toString();
 let newN;
 let maxNumber = 0;
 let newNumber;

 for (i = 0; i < newString.length; i++){
   newN = newString.slice(0, i) + newString.slice(i+1);
      
   if(newN > maxNumber){
     maxNumber = newN;
   }
 }
 return +maxNumber;
}

module.exports = {
  deleteDigit
};
