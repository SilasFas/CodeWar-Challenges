// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(number) {
    let result = 0
    if (number > 0) {
        return result = number * -1
    } else {
        return result = number
    }
}

console.log(makeNegative(0))


// Anoter Version

function makeNegative(number) {
    if (number > 0) {
        return -number;
    } else {
        return number;
    }
}

console.log(makeNegative(0));