// Task 1
// Create an array of employees and:
// Print all names
// Filter employees with salary > 30000
// Find one employee by id

// Create an array of employees and:
const employees = [
    { id: 1, name: "Raeen", salary: 25000, position: "Developer" },
    { id: 2, name: "Teena", salary: 35000, position: "Manager" },
    { id: 3, name: "Riya", salary: 40000, position: "Director" },
    { id: 4, name: "Neha", salary: 28000, position: "Designer" },
    { id: 5, name: "Sara", salary: 32000, position: "Developer" },
    { id: 6, name: "naina", salary: 45000, position: "CEO" }
];
// Print all names
console.log("Print All Names: ",employees);

// Filter employees with salary > 30000
const highSalary = employees.filter(emp => emp.salary > 30000);

console.log("Employee With HIgh Salary: ",highSalary);

// Find one employee by id
const employee = employees.find(emp => emp.id === 2);
console.log("Employee by id 2 :" , employee);
