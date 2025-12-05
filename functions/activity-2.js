/*
 * ACTIVITY 2: Function Parameters and Defaults
 * 
 * Problem 1: Default Parameters
 * Use default parameter values
 */

// Your task:
// 1. Create a function 'greet' with default name parameter:
//    function greet(name = "Guest") { ... }
//    Test with and without arguments
//
// 2. Create a function 'calculateArea' with default dimensions:
//    - length default 10, width default 5
//    - Returns area
//
// 3. Challenge: Create a function 'createUser' with defaults:
//    - Takes: name, age (default 18), active (default true), role (default "user")
//    - Returns user object
//    - Test with different combinations of arguments

// ============================================================================
// Problem 2: Rest Parameters
// Use rest parameters for variable arguments
// ============================================================================

// Your task:
// 1. Create a function 'sum' using rest parameters:
//    function sum(...numbers) { ... }
//    - Takes any number of arguments
//    - Returns their sum
//
// 2. Create a function 'findMax' using rest parameters:
//    - Takes any number of numbers
//    - Returns the maximum value
//
// 3. Create a function 'joinStrings' using rest parameters:
//    - Takes separator and any number of strings
//    - Returns joined string
//
// 4. Challenge: Create a function 'calculate' that:
//    - Takes operation string ("add", "multiply", etc.) and rest of numbers
//    - Performs operation on all numbers
//    - Returns result

// ============================================================================
// Problem 3: Destructuring Parameters
// Use destructuring in function parameters
// ============================================================================

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Your task:
// 1. Create a function 'displayPerson' that:
//    - Takes object with {name, age, city}
//    - Uses destructuring in parameters
//    - Returns formatted string
//
// 2. Create a function 'processCoordinates' that:
//    - Takes object with {x, y}
//    - Uses destructuring
//    - Returns distance from origin
//
// 3. Challenge: Create a function 'createEmail' that:
//    - Takes object with {firstName, lastName, domain}
//    - Uses destructuring with default values
//    - Returns email string: firstName.lastName@domain.com

// ============================================================================
// Problem 4: Arguments Object
// Understand and use the arguments object
// ============================================================================

// Your task:
// 1. Create a function 'logArguments' that:
//    - Uses 'arguments' object
//    - Logs all arguments passed
//    - Converts arguments to array using Array.from()
//
// 2. Create a function 'findLongest' that:
//    - Uses arguments object
//    - Returns the longest string argument
//
// 3. Compare arguments object vs rest parameters:
//    - Create same function using both approaches
//    - Explain differences
//
// 4. Challenge: Create a function 'callWithDelay' that:
//    - Takes a function and delay time
//    - Takes additional arguments using arguments or rest
//    - Calls the function after delay with those arguments

// Problem 1: Default Parameters

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

function calculateArea(length = 10, width = 5) {
    return length * width;
}

function createUser(name, age = 18, active = true, role = "user") {
    return { name, age, active, role };
}

// Problem 2: Rest Parameters

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function findMax(...numbers) {
    return Math.max(...numbers);
}

function joinStrings(separator, ...strings) {
    return strings.join(separator);
}

function calculate(operation, ...numbers) {
    switch (operation) {
        case "add":
            return numbers.reduce((a, b) => a + b, 0);
        case "multiply":
            return numbers.reduce((a, b) => a * b, 1);
        case "subtract":
            return numbers.reduce((a, b) => a - b);
        case "divide":
            return numbers.reduce((a, b) => a / b);
        default:
            return null;
    }
}

// Problem 3: Destructuring Parameters

function displayPerson({ name, age, city }) {
    return `${name} is ${age} years old and lives in ${city}.`;
}

function processCoordinates({ x, y }) {
    return Math.sqrt(x * x + y * y);
}

function createEmail({ firstName = "user", lastName = "unknown", domain = "example" }) {
    return `${firstName}.${lastName}@${domain}.com`;
}

// Problem 4: Arguments Object

function logArguments() {
    const args = Array.from(arguments);
    console.log(args);
    return args;
}

function findLongest() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

// Comparison: arguments vs rest

function longestWithArguments() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i].length > longest.length) longest = arguments[i];
    }
    return longest;
}

function longestWithRest(...strings) {
    return strings.reduce((longest, str) => (str.length > longest.length ? str : longest), "");
}

function callWithDelay(fn, delay, ...args) {
    setTimeout(() => fn(...args), delay);
}