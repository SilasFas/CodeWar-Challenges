// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(array) {
  let result = 0;

  array.map((number) => {
    if (number >= 0) {
      result += number
    }
  })
  return result
}

positiveSum([1, 2, -3, -4, -5, -6, -7, -8, -9])


// Another alternative 

function positiveSum(array) {
  let result = 0;

  for (let number of array) {
    if (number >= 0) {
      result += number;
    }
  }

  return result;
}

positiveSum([1, 2, -3, -4, -5, -6, -7, -8, -9]);


// Another alternative 

/*
const positiveSum = array => array.reduce((sum, number) => number >= 0 ? sum + number : sum, 0);

positiveSum([1, 2, -3, -4, -5, -6, -7, -8, -9]);

*/