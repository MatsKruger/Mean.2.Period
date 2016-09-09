const calculator = {
  add: (n1, n2) => n1 + n2,
  substract: (n1, n2) => n1 - n2,
  divide: (n1, n2) => {
    if (n1 === 0 || n2 === 0) {
      throw new Error('Attempt to divide by zero')
    }
    return n1 / n2
  },
  multiply: (n1, n2) => n1 * n2
}

module.exports = calculator
