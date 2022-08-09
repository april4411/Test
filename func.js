const { odd, even } = require('./variable.js')

function checkNumberOddOrEven(number) {
    if (number % 2) {
      return odd
    }
    return even
  }
  
  function checkStringOddOrEven(string) {
    if ((string.length % 2)) {
      return odd
    }
    return even
}
  