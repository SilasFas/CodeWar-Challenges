// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (number) {
    let result = ''
    for (let index = 1; index <= number; index++) {
        result += index + ' sheep...' 
    }
    return result
}
console.log(countSheep(3))