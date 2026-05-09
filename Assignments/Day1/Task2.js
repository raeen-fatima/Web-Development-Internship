// Task 2
// Create a calculator using arrow functions.
// Functions:
// add
// subtract
// multiply
// divide


const calculator = (num1, num2, operation) => {
    switch (operation) {
        case "add":
            return num1 + num2;
        
        case "subtract":
            return num1 - num2;

        case "multiply":
            return num1 * num2;

        case "divide":
            return num1 / num2;
    
        default:
            return "invalid operation"
            break;
    }
}


console.log("Addition: ",calculator(2,4,"add"));
console.log("Subtract: ",calculator(6,3,"subtract"));
console.log("Multiply: ", calculator(3,5,"multiply"));
console.log("Divide: ", calculator(25,5,"divide"));
