/**
 * Utilizing the provided {arr} argument in each function, follow the prompts.
 * In order for the tests to pass, you MUST return the result!
 * The provided arr parameter for the non bonus questions will ALWAYS be an array with numbers from 1-15.
 * The bonus questions will tell you what to expect as an argument.
 */
const array = [1, 2, 3, 10, 11, 13, 16];

const getSquares = array.map((arr) => {
  const multiply = arr * 2;
  console.log(getSquare);
  return multiply;
});

/**
 * Use .map to return an array of all nums multiplied by 2
 */

const isDivBy3 = array.map((arr) => {
  console.log(Number.isInteger(arr / 3));
  return arr / 3;

  /**
   * Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
   * * The modulus % operator may be useful *
   */
});

const filterOdds = array.filter((arr) => {
  if (arr % 2 !== 0) {
    let finalArr = [];
    finalArr = finalArr + arr;
    console.log(finalArr);
    return arr % 2;
  }
});

/**
 * Use .filter to return an array of all odd numbers
 * * The modulus % operator may be useful *
 */

const filterEvens = array.filter((arr) => {
  if (arr % 2 !== 0) {
    console.log(arr);
    return arr % 2;
  }
});
/**
 * Use .filter to return all even numbers
 * * The modulus % operator may be useful *
 */
// };
const filterDivBy4 = array.filter((arr) => {
  if (arr % 4 == 0) {
    console.log(arr);
    return arr % 4;
  }
});
/**
 * Use .filter to return all numbers that are divisible by 4
 * * The modulus % operator may be useful *
 */
const addAllUp = array.reduce((a, b) => {
  console.log(a + b);
  return a + b;
}, 0);
console.log(addAllUp);
/**
 * Use .reduce to return the total sum of all numbers
 */

const multiplyAllNums = array.reduce((a, b) => {
  console.log(a * b);
  return a * b;
}, 0);
console.log(multiplyAllNums);
/**
 * Use .reduce to return the total product of all numbers
 */

// BONUS
const sumSquareAllNums = (arr) => {
  /**
   * Use .reduce to return the total sum of each number to the second power
   * @param {[Number]} arr will contain numbers from 1-15
   * Your final result should be 1240
   */
};
const addAllAges = (arr) => {
  /**
   * Use .reduce to return the total sum of all ages in the provided arr
   * The arr parameter contains:
      { name: 'Carl', age: 30 },
      { name: 'Cara', age: 10 },
      { name: 'Carmen', age: 15 }
    ]
    Your final result should be 55
   */
};
// BONUS

module.exports = {
  getSquares,
  isDivBy3,
  filterOdds,
  filterEvens,
  filterDivBy4,
  addAllUp,
  multiplyAllNums,
  sumSquareAllNums,
  addAllAges,
};
