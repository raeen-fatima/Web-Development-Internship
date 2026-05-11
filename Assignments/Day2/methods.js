let num = [10,20,30,40]

const numbers = num.filter((result) => {
    return result > 20;
})
console.log(numbers)

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
//filter method
for(let i = 0; i < 3; i++){

    const marks = students[i].marks;
    const maxMarks = marks.filter((maxMark) => {
      return maxMark > 90 

    })
    console.log(students[i].name,maxMarks)
}

//push method

students.push({
    id: 4,
    name: "Neha",
    marks: [88, 90, 89],
  },
{
    id: 5,
    name: "John",
    marks: [88, 91, 70],
  },
);
console.log(students)

//to remove the last element of an array 
students.pop();
console.log(students);

//adds element(s) at the BEGINNING of array.

students.unshift({
    id: 6,
    name: "rakhi",
    marks: [88, 90, 89],
  },
{
    id: 7,
    name: "rani",
    marks: [88, 91, 70],
  },
);
console.log(students)

//removes the FIRST element from array.
students.shift();
console.log(students)

//include method 
const names = ["Riya","Neha","Mehak"]
const student = names.includes("Riya");
console.log(student);

//Some method

const studentName = students.some((stu) =>{
  return stu.name === "Riya";
});

console.log(studentName);
