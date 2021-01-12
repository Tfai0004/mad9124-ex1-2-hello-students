'use strict'

// 1. Read the JSON file into a variable called students
const students = require("./students.json");
console.log(); // empty line

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
students.forEach(student => {
    console.log(`Hello ${student.firstName} ${student.lastName}`);
});
console.log(); // empty line

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
const dcount = students.filter(student => {
    return student.lastName.charAt(0).toUpperCase() == 'D';
}).length;
console.log(`Count of last names starting with D is ${dcount}`);