# Higher Order Functions Exercise

![Map](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F27c19b8cac761b97fb87c1868a349dce%2Ftenor.gif%3Fitemid%3D11835765&f=1&nofb=1)

## Lab Overview
In this lab, you will create functions that accomplish the specified goal to practice using High Order Functions.

## Objectives
  - Practice using .map(), .filter(), and .reduce()
  
## Lab Instructions
Go through each of the commonly used array methods provided below and practice applying them. Use the reference links to read up on their usage and syntax.

### `.map()` [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Write code using `.map()` to have the following input and output:

- `getSquares` – takes in an array of numbers and returns an array of their squares
  - ex: `getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]`

- `isDivisibleBy3` – takes in an array of numbers and returns an array of booleans indicating whether each element is divisible by 3
  - ex: `isDivisibleBy3([1, 3, 4, 6, 7, 8, 9]) => [false, true, false, true, false, false true]`
  

### `.filter()` [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Write code using `.filter()` to have the following input and output:

- `filterOdds` – takes in an array of numbers and returns an array of only odd numbers
  - ex: `getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [1, 3, 5, 7, 9]`

- `filterEvens` – takes in an array of numbers and returns an array of only even numbers
  - ex: `getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]`
  
- `filterDivisibleBy4` – takes in an array of numbers and returns an array of only numbers that are divisible by 4
  - ex: `getDivisibleBy4([1, 4, 6, 8, 12, 13]) => [4, 8, 12]`
  

### `.reduce()` [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Write code using `.reduce()` to have the following input and output:

- `addUpAll` – add up all numbers in a given array
  - ex. `addUpAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 55` 

- `multiplyAllNums` – multiply all numbers in a given array
  - ex. `multiplyAllNums([1, 2, 3, 4, 5]) => 120`
  
 
### Bonus (with `.reduce()`):
Write code using `.reduce()` to have the following input and output:

- `squareAllNums` – power up all numbers in a given array
  - ex. `squareAllNums([3, 2, 3]) => 729, bc (3 ^ 2) = 9, and (9 ^ 3) = 729`

- `addUpAllAges` – add up all the ages in an array of objects
  - ex. `addUpAllAges([{name: 'Carl', age: 30}, {name: 'Cara', age: 10}, {name: 'Carmen', age: 15}]) => 55`
