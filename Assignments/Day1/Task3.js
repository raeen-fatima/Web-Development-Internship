// // Task 3
// // Create student objects and:
// // Calculate average marks
// // Print topper student


const students = [
  {
    id: 1,
    name: "Riya",
    marks: [92, 95, 89],
  },
  {
    id: 2,
    name: "Neha",
    marks: [89, 92, 79],
  },
  {
    id: 3,
    name: "Mehak",
    marks: [67, 79, 92],
  },
];

let highestMarks = 0;
let topper = "";

for (let i = 0; i < 3; i++) {
  const number = students[i].marks;

  const totalMarks = number.reduce((sum, student) => {
    return sum + student;
  }, 0);

  const averageMarks = totalMarks/students[i].marks.length;

  if(totalMarks > highestMarks ){
    highestMarks = totalMarks;
    topper = students[i].name;
   
  }

  console.log("Total Marks of", students[i].name,":" ,totalMarks,"Average Marks of", students[i].name,":",averageMarks);
 
}
 console.log("Topper Student:", topper, "with highest Marks:",highestMarks);