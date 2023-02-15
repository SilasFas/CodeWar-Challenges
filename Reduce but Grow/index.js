
// Given a non-empty array of integers, return the result of multiplying    the values together in order. 

// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(numbers) {
    numbers.sort()
    let result = 1
    for (let index = 0; index < numbers.length; index++){
        result *= numbers[index] // result = result * numbers[index]
    }
    return result
}
let numbers = [1, 4, 3, 2]
console.log(grow(numbers))