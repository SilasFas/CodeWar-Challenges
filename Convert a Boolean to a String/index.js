// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(bool) {
    if (bool == true) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(booleanToString(true))


// Another version
function booleanToString(bool) {
    return bool ? 'true' : 'false';
}
console.log(booleanToString(false));

function booleanToString(b) {
    // return `${b}`
    // return b+'';
    return b.toString();
    // return String(b);
}
console.log(booleanToString(false))