// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, character) => character + reversed, "");
}

// function reverse(str) {
//   let newStr = ''

//   for (const character of str) {
//       newStr = character + newStr
//   }
//   return newStr
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverse;
