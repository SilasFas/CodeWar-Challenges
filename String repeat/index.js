// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr(num, str) {
//     let repeatedStr = ''

//     for (let index = 0; index < num; index++) {
//         repeatedStr += str;
//     }
//     return repeatedStr

// }
// console.log(repeatStr(5, 'Hello'))


// Another Version
function repeatStr(number, string) {
    return string.repeat(number);
}

console.log(repeatStr(3, 'Silas'))
