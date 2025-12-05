/*
 * ACTIVITY 1: Function Basics
 * 
 * Problem 1: Function Declarations
 * Create and use basic functions
 */

// Your task:
// 1. Create a function 'greet' that takes a name parameter and returns "Hello, [name]!"
// 2. Create a function 'add' that takes two numbers and returns their sum
// 3. Create a function 'multiply' that takes two numbers and returns their product
// 4. Test each function with different arguments
//
// 5. Challenge: Create a function 'calculate' that:
//    - Takes two numbers and an operation string ("add", "subtract", "multiply", "divide")
//    - Returns the result of the operation
//    - Handles division by zero

// ============================================================================
// Problem 2: Function Expressions
// Use function expressions and understand hoisting
// ============================================================================

// Function declaration
function sayHello() {
    return "Hello!";
}

// Your task:
// 1. Create a function expression: const sayGoodbye = function() { ... }
// 2. Test: Can you call sayHello before it's declared? (hoisting)
// 3. Test: Can you call sayGoodbye before it's assigned? Why not?
//
// 4. Challenge: Create three versions of the same function:
//    - Function declaration
//    - Function expression
//    - Arrow function
//    Compare their behavior and hoisting

// ============================================================================
// Problem 3: Parameters and Arguments
// Understand function parameters and arguments
// ============================================================================

// Your task:
// 1. Create a function 'introduce' that takes name and age parameters
//    - Returns formatted string: "I'm [name] and I'm [age] years old"
//
// 2. Create a function 'fullName' that takes firstName and lastName
//    - Returns full name
//    - What happens if you only pass one argument?
//
// 3. Challenge: Create a function 'sumAll' that:
//    - Takes any number of arguments
//    - Returns sum of all arguments
//    - Use 'arguments' object or rest parameters
//    - Handle edge cases (no arguments, non-numbers)

// ============================================================================
// Problem 4: Return Values
// Understand how functions return values
// ============================================================================

// Your task:
// 1. Create a function 'isEven' that takes a number and returns true/false
// 2. Create a function 'getMax' that takes two numbers and returns the larger one
// 3. Create a function 'formatName' that takes first and last name, returns formatted string
//
// 4. Challenge: Create a function 'analyzeNumber' that:
//    - Takes a number
//    - Returns an object with: {value, isEven, isPositive, square, double}
//    - All properties calculated from the input number

// ACTIVITY 1: Function Basics

// Problem 1: Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    switch (operation) {
        case "add": return add(a, b);
        case "subtract": return a - b;
        case "multiply": return multiply(a, b);
        case "divide": return b !== 0 ? a / b : "Error: Division by zero";
        default: return "Error: Invalid operation";
    }
}

// Problem 2: Function Expressions
const sayGoodbye = function() {
    return "Goodbye!";
};

// Variants (Declaration, Expression, Arrow)
function sampleDecl(x) { return x; }
const sampleExpr = function(x) { return x; };
const sampleArrow = x => x;

// Problem 3: Parameters and Arguments
function introduce(name, age) {
    return `I'm ${name} and I'm ${age} years old`;
}

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function sumAll(...args) {
    if (args.length === 0) return 0;
    return args.reduce((sum, num) => (typeof num === "number" ? sum + num : sum), 0);
}

// Problem 4: Return Values
function isEven(num) {
    return num % 2 === 0;
}

function getMax(a, b) {
    return a > b ? a : b;
}

function formatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

function analyzeNumber(num) {
    return {
        value: num,
        isEven: isEven(num),
        isPositive: num > 0,
        square: num * num,
        double: num * 2
    };
}

// Tests
console.log(greet("Alice"));
console.log(add(5, 3));
console.log(multiply(4, 7));
console.log(calculate(10, 2, "add"));
console.log(introduce("Alice", 25));
console.log(fullName("John", "Doe"));
console.log(sumAll(1, 2, 3));
console.log(isEven(4));
console.log(getMax(10, 20));
console.log(formatName("John", "Doe"));
console.log(analyzeNumber(5));