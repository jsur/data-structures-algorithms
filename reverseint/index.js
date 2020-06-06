// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseStr = (str = '') => str.split('').reverse().join('');

function reverseInt(n) {
  return parseInt(reverseStr(`${n}`)) * Math.sign(n);
}

module.exports = reverseInt;
