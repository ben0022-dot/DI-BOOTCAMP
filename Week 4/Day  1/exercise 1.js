const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display choices using forEach
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists using includes()
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const position = index + 1;
    // Ternary logic: if position is 1, 2, or 3, use ordinal array, otherwise use "th"
    const suffix = position <= 3 ? ordinal[position] : ordinal[0];
    
    console.log(`${position}${suffix} choice is ${color}.`);
});


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Map to create welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Filter for Full Stack Residents
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// 3. Bonus: Chain filter and map for lastNames of Full Stack Residents
const fsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

console.log(fsLastNames);


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
});

console.log(sentence); 
// Output: "a long time ago in a galaxy far far away"

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Filter students that passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus: Chain filter and forEach to congratulate
students
    .filter(student => student.isPassed)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });

    