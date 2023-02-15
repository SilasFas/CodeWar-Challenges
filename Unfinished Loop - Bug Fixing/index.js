/*
Unfinished Loop
Create a function in which the user can decide the length of the array.
*/
function createArray(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
let fixing = console.log(createArray(10))