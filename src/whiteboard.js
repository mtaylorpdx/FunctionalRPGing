// Problem #1
// Solve Problem 1 on Project Euler using a functional approach. Here is the problem:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// ___________________________________________________________________

function findSum(counter = 1, inputNumber = 0) {
  if (isNaN(inputNumber)) {
    return;
  } else if (counter > 1000) {
    console.log(inputNumber);
    return inputNumber;
  } else if (counter % 3 === 0 || counter % 5 === 0) {
    const totalSum = inputNumber += counter;
    findSum(counter + 1, totalSum);
  } else {
    return findSum(counter + 1, inputNumber);
  }
}


// const recursiveCounter = function(counter = 0, multiples = []) {
//   if (counter >= 10) {
//     const reduced = multiples.reduce((sum, muliple) => {
//       return sum + muliple;
//     }, 0);
//     return reduced;
//   } else if (counter % 3 == 0 || counter % 5 == 0) {
//     const newNumArr = [ ...multiples, counter ];
//     return recursiveCounter(counter + 1, newNumArr);
//   } else {
//     return recursiveCounter(counter + 1, multiples);
//   }
// };

// const multipliesArray = recursiveCounter();
// console.log("returned", multipliesArray);

const result = Array.FormData({ length: 1000 }, (x,y) => ++y)
  .filter(number => number % 5 === 0 || number % 3 === 0)
  .reduce((sum, number) => sum + number, 0)