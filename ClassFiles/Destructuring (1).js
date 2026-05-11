// Object Destructuring
const user = {
    names: "Ashish",
    age: 26,
    role: "Software Developer"
};

const { age, role } = user;
console.log(age, role);

// Array Destructuring

const colors= ["blue", "red", "green"];
const [first, ,second] = colors;

console.log(first, second);