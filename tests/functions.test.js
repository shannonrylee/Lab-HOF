const functions = require('../index')

console.error = jest.fn()
describe('Higher Order Functions', () => {
  test('getSquares should return an array of squares for the provided array', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(functions.getSquares(arr)).toEqual([1, 4, 9, 16, 25])
  })
  test('isDivBy3 should return an array of booleans indicating whether the element is divisible by 3', () => {
    let arr = [1, 3, 4, 6, 7, 8, 9]
    expect(functions.isDivBy3(arr)).toEqual([
      false,
      true,
      false,
      true,
      false,
      false,
      true
    ])
  })
  test('filterOdds should return an array of only odd numbers', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(functions.filterOdds(arr)).toEqual([1, 3, 5, 7, 9])
  })
  test('filterEvens should return an array of only even numbers', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(functions.filterEvens(arr)).toEqual([2, 4, 6, 8, 10])
  })
  test('filterDivBy4 should return an array of only numbers that are divisible by', () => {
    let arr = [1, 4, 6, 8, 12, 13]
    expect(functions.filterDivBy4(arr)).toEqual([4, 8, 12])
  })
  test('addAllUp should return the total sum of the numbers in the array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(functions.addAllUp(arr)).toEqual(55)
  })
  test('multiplyAllNums should return the total product of all numbers', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(functions.multiplyAllNums(arr)).toEqual(120)
  })
  // Bonus
  test('sumSquareAllNums should return the total sum of all numbers squared', () => {
    let arr = [3, 2, 3]
    expect(functions.sumSquareAllNums(arr)).toEqual(6561)
  })
  test('addAllAges should return the sum of all ages in the provided array', () => {
    let arr = [
      { name: 'Carl', age: 30 },
      { name: 'Cara', age: 10 },
      { name: 'Carmen', age: 15 }
    ]
    expect(functions.addAllAges(arr)).toEqual(55)
  })
  // Bonus
})
