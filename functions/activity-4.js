/*
 * ACTIVITY 4: Higher-Order Functions
 * 
 * Problem 1: Functions as Arguments
 * Pass functions as arguments to other functions
 */

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Create a function 'forEachCustom' that:
//    - Takes an array and a callback function
//    - Calls callback for each element
//    - Mimics Array.forEach behavior
//
// 2. Create a function 'mapCustom' that:
//    - Takes an array and a transformation function
//    - Returns new array with transformed values
//    - Mimics Array.map behavior
//
// 3. Create a function 'filterCustom' that:
//    - Takes an array and a predicate function
//    - Returns new array with filtered values
//    - Mimics Array.filter behavior
//
// 4. Challenge: Create a function 'reduceCustom' that:
//    - Takes array, reducer function, and initial value
//    - Returns accumulated result
//    - Mimics Array.reduce behavior

// ============================================================================
// Problem 2: Functions as Return Values
// Return functions from other functions
// ============================================================================

// Your task:
// 1. Create a function 'createGreeter' that:
//    - Takes a greeting message
//    - Returns a function that takes a name
//    - Returned function uses the greeting message
//
// 2. Create a function 'createCalculator' that:
//    - Returns an object with methods: add, subtract, multiply, divide
//    - Each method is a function that performs the operation
//
// 3. Challenge: Create a function 'createPipeline' that:
//    - Takes multiple transformation functions
//    - Returns a function that applies all transformations in sequence
//    - Example: const pipeline = createPipeline(double, addOne, square);
//              pipeline(5) // applies all three functions

// ============================================================================
// Problem 3: Callback Functions
// Use callbacks for asynchronous-style operations
// ============================================================================

// Your task:
// 1. Create a function 'processData' that:
//    - Takes data and a callback function
//    - Processes data (e.g., doubles it)
//    - Calls callback with result
//
// 2. Create a function 'fetchUser' (simulate async) that:
//    - Takes userId and callback
//    - Simulates delay using setTimeout
//    - Calls callback with user data
//
// 3. Challenge: Create a function 'retryOperation' that:
//    - Takes an operation function and max retries
//    - Calls operation, retries on failure
//    - Calls success/error callbacks

// ============================================================================
// Problem 4: Functional Programming Patterns
// Apply functional programming concepts
// ============================================================================

const students = [
    { name: "Alice", score: 85, age: 20 },
    { name: "Bob", score: 92, age: 19 },
    { name: "Charlie", score: 78, age: 21 }
];

// Your task:
// 1. Create reusable transformation functions:
//    - getName: extracts name
//    - getScore: extracts score
//    - isPassing: checks if score >= 70
//
// 2. Use these functions with map/filter:
//    - Get all names
//    - Get all passing students
//
// 3. Challenge: Create a function 'compose' that:
//    - Takes multiple functions
//    - Returns composed function
//    - Applies functions right to left
//    Example: compose(upperCase, addPrefix)("hello")

// Problem 1: Functions as Arguments

const forEachCustom = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) callback(arr[i], i, arr);
};

const mapCustom = (arr, transform) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) result.push(transform(arr[i], i, arr));
    return result;
};

const filterCustom = (arr, predicate) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) if (predicate(arr[i], i, arr)) result.push(arr[i]);
    return result;
};

const reduceCustom = (arr, reducer, initial) => {
    let acc = initial;
    for (let i = 0; i < arr.length; i++) acc = reducer(acc, arr[i], i, arr);
    return acc;
};

// Problem 2: Functions as Return Values

const createGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

const createCalculator = () => ({
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
});

const createPipeline = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);

// Problem 3: Callback Functions

const processData = (data, callback) => {
    const processed = data * 2;
    callback(processed);
};

const fetchUser = (userId, callback) => {
    setTimeout(() => {
        callback({ id: userId, name: "User" + userId });
    }, 500);
};

const retryOperation = (operation, maxRetries, onSuccess, onError, attempt = 0) => {
    try {
        const result = operation();
        onSuccess(result);
    } catch (err) {
        if (attempt < maxRetries) {
            retryOperation(operation, maxRetries, onSuccess, onError, attempt + 1);
        } else {
            onError(err);
        }
    }
};

// Problem 4: Functional Programming Patterns

const getName = (student) => student.name;
const getScore = (student) => student.score;
const isPassing = (student) => student.score >= 70;

const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);
