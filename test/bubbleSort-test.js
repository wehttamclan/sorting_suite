const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('sort functionality', function () {
  context('bubble sort function', function () {
    it('it can sort an array', function () {
      assert.deepEqual(bubbleSort([1, 3, 4, 6, 2, 5, 2]), [1, 2, 2, 3, 4, 5, 6])
    })
  })
})