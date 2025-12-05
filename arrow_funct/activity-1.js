/*
 * ACTIVITY 1: Understanding Arrow Function Syntax
 * 
 * Problem 1: Basic Arrow Function Conversion
 * Convert the following traditional function to an arrow function:
 */

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// Your task:
// 1. Convert the above function to an arrow function (one-liner with implicit return)
// 2. Write it as a multi-line arrow function with explicit return
// 3. Write it without parentheses for the single parameter
// 4. Test all three versions with your name

// ============================================================================
// Problem 2: Arrow Function with Multiple Parameters
// Create an arrow function called 'calculateArea' that takes two parameters 
// (length and width) and returns the area of a rectangle.
// ============================================================================

// Your task:
// 1. Write calculateArea as a one-liner with implicit return
// 2. Write calculateArea with explicit return statement
// 3. Test both with length=5, width=10
// 4. Explain when you would use each version

// ============================================================================
// Problem 3: Arrow Function in Array Methods
// Given the array [1, 2, 3, 4, 5], use arrow functions to:
// ============================================================================

// const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Square each number (map)
// 2. Filter out numbers greater than 3
// 3. Find the sum of all numbers (reduce)
// 4. Chain all three operations together - what is the final result?

// ============================================================================
// Problem 4: Understanding 'this' in Arrow Functions
// Study the following code and predict the output. Then explain why.
// ============================================================================

// const person = {
//     name: "Alice",
//     traditional: function() {
//         console.log(this.name);
//     },
//     arrow: () => {
//         console.log(this.name);
//     }
// };

// Your task:
// 1. Run person.traditional() and person.arrow() - what happens?
// 2. Explain why they behave differently
// 3. How would you fix the arrow function to correctly access person.name?
// 4. Provide at least two different solutions

/*
 * ACTIVITY 1: Understanding Arrow Function Syntax
 */

// ===================== Problem 1 =====================
// Original function:
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// One-liner with implicit return
const greet1 = (name) => "Hello, " + name + "!";

// Multi-line with explicit return
const greet2 = (name) => {
    return "Hello, " + name + "!";
};

// Without parentheses for a single parameter
const greet3 = name => "Hello, " + name + "!";

// Test with your name
console.log(greet1("Felix")); // Hello, Felix!
console.log(greet2("Felix")); // Hello, Felix!
console.log(greet3("Felix")); // Hello, Felix!

// ===================== Problem 2 =====================
// Arrow function with multiple parameters

// One-liner with implicit return
const calculateArea1 = (length, width) => length * width;

// With explicit return
const calculateArea2 = (length, width) => {
    return length * width;
};

// Test with length=5, width=10
console.log(calculateArea1(5, 10)); // 50
console.log(calculateArea2(5, 10)); // 50

// Explanation:
// - One-liner: good for short and simple functions
// - Multi-line: useful when you have more complex logic

// ===================== Problem 3 =====================
// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];

// Square each number
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// Filter numbers <= 3
const filtered = numbers.filter(n => n <= 3);
console.log(filtered); // [1, 2, 3]

// Sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Chain all together (square, filter <=3, sum)
const finalResult = numbers
    .map(n => n * n)        // [1, 4, 9, 16, 25]
    .filter(n => n <= 3)    // [1]
    .reduce((acc, n) => acc + n, 0); // 1

console.log(finalResult); // 1

// ===================== Problem 4 =====================
// Understanding 'this' in arrow functions
const person = {
    name: "Alice",
    traditional: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

// Test
person.traditional(); // Alice
person.arrow();       // undefined

// Explanation:
// - traditional(): 'this' points to the object that called it (person)
// - arrow(): 'this' takes from the outer context, not the object

// How to fix the arrow function:
// Option 1: use a traditional function
// arrow: function() { console.log(this.name); }

// Option 2: reference the object directly
// arrow: () => { console.log(person.name); }
