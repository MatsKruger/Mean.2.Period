var chai = require('chai')
// var assert = chai.assert
var expect = chai.expect
var calculator = require('../lib/calculator')
describe('Test calculator', function () {
  describe('Add', function () {
    it('Should return the two parameters added', function () {
      expect(calculator.add(1, 3)).to.be.equal(4)
    })
  })
  describe('substract', function () {
    it('Should return the two parameters substracted', function () {
      expect(calculator.substract(4, 1)).to.be.equal(3)
    })
  })
  describe('multiply', function () {
    it('Should return the two parameters multiplied', function () {
      expect(calculator.multiply(2, 3)).to.be.equal(6)
    })
  })
  describe('divide', function () {
    it('Should return the two parameters divided', function () {
      expect(calculator.divide(4, 2)).to.be.equal(2)
    })
  })
})
