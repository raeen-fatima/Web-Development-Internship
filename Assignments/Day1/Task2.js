// Task 2
// Create a calculator using arrow functions.
// Functions:
// add
// subtract
// multiply
// divide

const add = (num1 , num2) => {
    return (num1 + num2);
}

const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide  = (num1 , num2) => num1 / num2;

console.log(add(2,4));
console.log(subtract(6,3));
console.log(multiply(3,5));
console.log(divide(25,5));
