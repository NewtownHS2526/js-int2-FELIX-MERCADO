/*
 * ACTIVITY 2: Arrow Functions vs Regular Functions
 * 
 * Problem 1: Function Declaration Analysis
 * Compare and contrast these two implementations:
 */

// Version 1
// function double(x) {
//     return x * 2;
// }

// Version 2
// const double = (x) => x * 2;

// Your task:
// 1. Can you call 'double' before it's declared in each version? Test your hypothesis.
// 2. Can you reassign 'double' in each version? Why or why not?
// 3. Which would you use in different scenarios and why?
// 4. Create test cases for each scenario

// ============================================================================
// Problem 2: Arrow Function with Callbacks
// You need to process a list of students' grades. Write arrow functions to:
// ============================================================================

// const scores = [95, 82, 73, 88, 67, 91, 55, 78];

// Your task:
// 1. Filter students who scored above 75
// 2. Map their scores to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
// 3. Calculate the average score of all students
// 4. Challenge: Combine all operations to get letter grades for only passing students (75+), 
//    then calculate the average of those passing scores

// ============================================================================
// Problem 3: Nested Arrow Functions
// Create a function 'createMultiplier' that takes a number and returns an arrow function.
// The returned arrow function should take another number and multiply it by the first number.
// ============================================================================

// Example usage:
// const double = createMultiplier(2);
// console.log(double(5)); // Should output 10

// Your task:
// 1. Implement createMultiplier using arrow functions
// 2. Create triple = createMultiplier(3) and test it
// 3. Challenge: Create a 'createCalculator' function that returns an object with four 
//    arrow function methods: add, subtract, multiply, and divide, all using the initial 
//    number as one operand

// ============================================================================
// Problem 4: Debugging Arrow Functions
// The following code has errors. Identify and fix them:
// ============================================================================

// const processData = (data) => {
//     return data.map(item => {
//         if (item > 10) {
//             return item * 2;
//         }
//         return item;
//     }).filter(item => item > 5);
// }

// const numbers = [3, 8, 15, 22, 5];

// Your task:
// 1. Identify all errors in the code above
// 2. Fix the errors
// 3. Test with the numbers array
// 4. Challenge: Rewrite to handle edge cases like empty arrays, non-numeric values, 
//    and null/undefined

/*
 * ACTIVITY 2: Arrow Functions vs Regular Functions
 */

// ===================== Problem 1 =====================
// Function Declaration Analysis

// Version 1: Traditional function
function double1(x) {
    return x * 2;
}

// Version 2: Arrow function assigned to a const
const double2 = (x) => x * 2;

// Can we call 'double' before declaration?
// double1(5); // Works because function declarations are hoisted
// double2(5); // Error if called before assignment, because const is not hoisted

console.log(double1(5)); // 10
console.log(double2(5)); // 10

//  Can we reassign?
// double1 = function(x){ return x*3; } //  Yes, functions declared with 'function' can be reassigned
// double2 = (x) => x*3; //  Error, const cannot be reassigned

//  Usage scenarios:
// - Use function declaration when you need hoisting or plan to reassign
// - Use arrow function for concise expressions, callbacks, and to avoid its own 'this'

// Test cases
console.log(double1(7)); // 14
console.log(double2(7)); // 14

// ===================== Problem 2 =====================
// Arrow Function with Callbacks

const scores = [95, 82, 73, 88, 67, 91, 55, 78];

// Filter students who scored above 75
const passingScores = scores.filter(score => score > 75);
console.log(passingScores); // [95, 82, 88, 91, 78]

// Map to letter grades
const letterGrades = scores.map(score => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
});
console.log(letterGrades); // ["A", "B", "C", "B", "D", "A", "F", "C"]

// Calculate average score
const averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(averageScore); // 77.875

// Challenge: Passing students letter grades and average
const passingLetterGrades = scores
    .filter(score => score > 75)
    .map(score => {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else return "C";
    });
console.log(passingLetterGrades); // ["A", "B", "B", "A", "C"]

const passingAverage = scores.filter(score => score > 75)
    .reduce((acc, score) => acc + score, 0) / passingScores.length;
console.log(passingAverage); // 86.8

// ===================== Problem 3 =====================
// Nested Arrow Functions

// Implement createMultiplier
const createMultiplier = (x) => (y) => x * y;

// Test
const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15

// Challenge: createCalculator
const createCalculator = (num) => ({
    add: (x) => num + x,
    subtract: (x) => num - x,
    multiply: (x) => num * x,
    divide: (x) => x !== 0 ? num / x : "Cannot divide by zero"
});

const calc = createCalculator(10);
console.log(calc.add(5)); // 15
console.log(calc.subtract(3)); // 7
console.log(calc.multiply(2)); // 20
console.log(calc.divide(2)); // 5
console.log(calc.divide(0)); // "Cannot divide by zero"

// ===================== Problem 4 =====================
// Debugging Arrow Functions

const processData = (data) => {
    if (!Array.isArray(data) || data.length === 0) return [];
    return data
        .filter(item => typeof item === "number") // remove non-numeric
        .map(item => item > 10 ? item * 2 : item)
        .filter(item => item > 5);
}

const numbersArray = [3, 8, 15, 22, 5, null, "abc"];
console.log(processData(numbersArray)); // [8, 30, 44]

// Explanation of fixes:
// - Added check for empty array or non-array
// - Filtered out non-numeric values
// - Ensured map and filter work safely
