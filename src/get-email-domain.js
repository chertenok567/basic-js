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
  let Symbol = email.search('@');
  let domainLong = email.substring(Symbol+1);

  let elseSymbol = domainLong.search('@');
  let domainShort = domainLong.substring(elseSymbol+1);

  let lastSymbol = domainShort.search('@');
  let domain = domainShort.substring(lastSymbol+1)
  return domain;
}

module.exports = {
  getEmailDomain
};
