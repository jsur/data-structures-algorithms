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
  const isNegative = n < 0;
  const reversed = reverseStr(isNegative ? `${n}`.slice(1) : `${n}`);
  return Number(reversed) * (isNegative ? -1 : 1);
}

module.exports = reverseInt;
