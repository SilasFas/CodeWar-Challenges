// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


// function opposite(number) {
//     if (number > 0) {
//         return -number
//     } else if (number < 0) {
//         return -number
//     } else {
//         return number
//     }
// }
// console.log(opposite(1))


// Anoter Version
function opposite(number) {
    if (number != 0) {
        return -number;
    }
    return number;
}

console.log(opposite(0)); 