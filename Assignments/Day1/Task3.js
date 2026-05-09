// Task 3
// Create student objects and:
// Calculate average marks
// Print topper student

const Students = [
    
    { id: 1, name: "Nisha", Age: 20, marks:340},
    { id: 2, name: "Teena", age: 20, marks: 440 },
    { id: 3, name: "Riya", age: 21, marks: 250},
    { id: 4, name: "Neha", age: 24, marks: 480 },
    { id: 5, name: "Sara", age: 23, marks: 100 },
    { id: 6, name: "naina", age: 24, marks: 200 }
    
]

const totalMarks = Students.reduce((sum,student)=>{
    return sum + student.marks;
},0);

const AverageMarks = totalMarks / Students.length;
console.log("Average Marks: ", AverageMarks);

const topperStudents = Students.filter(student => student.marks > 400);
console.log("Topper Students:", topperStudents);
