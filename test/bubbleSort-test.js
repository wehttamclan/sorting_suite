const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('sort functionality', function () {
  context('add function', function () {
    it('it can add two numbers', function () {
      assert.equal(addNumbers(7, 8), 15)
    })
  })
})