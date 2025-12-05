/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

// const cart = [
//     { name: "Book", price: 12.99, quantity: 2 },
//     { name: "Pen", price: 1.50, quantity: 10 },
//     { name: "Notebook", price: 5.99, quantity: 3 },
//     { name: "Eraser", price: 0.99, quantity: 1 }
// ];

// Your task:
// 1. Create an arrow function to calculate total price (price * quantity) for each item
// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more
// 3. Create an arrow function to add tax of 8.5% to the final price
// 4. Create an arrow function to filter out items with total less than $10
// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

// Your task:
// Create a ShoppingCart object with:
// 1. items array property: []
// 2. addItem(name, price) - adds an item to the cart
// 3. removeItem(name) - removes an item by name
// 4. getTotal() - calculates total price using arrow function
// 5. applyCoupon(percent) - applies discount percentage

// Challenge: Implement this using both arrow functions and regular functions. 
// Test how 'this' behaves differently. Which approach works better and why?

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

// Given code (commented out - you'll rewrite it):
// fetch('https://api.example.com/data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         return data.filter(function(item) {
//             return item.status === 'active';
//         });
//     })
//     .then(function(activeItems) {
//         console.log(activeItems);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// Your task:
// 1. Rewrite the above using arrow functions for all callbacks
// 2. Challenge: Rewrite it again using async/await with arrow functions
// 3. Compare all three approaches and explain their advantages
// Note: You can test with a mock data array if fetch is not available

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

// Your task:
// 1. Create a createValidator function that returns an arrow function
//    The validator should:
//    - Check if a value is a string
//    - Check minimum length
//    - Check if it matches a pattern (regex)
//
// 2. Example usage:
//    const validateLength = createValidator((value) => value.length >= 5);
//
// 3. Challenge: Create a validator factory that can combine multiple validation rules.
//    Use arrow functions to create validators like:
//    - isValidEmail (must contain @ and .)
//    - isValidPassword (at least 8 chars, one number, one letter)
//    - isValidPhoneNumber (format: XXX-XXX-XXXX)
//    These should be reusable and chainable

/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 */

// ===================== Problem 1 =====================
// Data Processing Pipeline
const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Calculate total price for each item
const calcTotal = item => ({...item, total: item.price * item.quantity});

// Apply discount if quantity >= 5 (15%)
const applyDiscount = item => ({...item, total: item.quantity >= 5 ? item.total * 0.85 : item.total});

// Add tax 8.5%
const addTax = item => ({...item, total: item.total * 1.085});

// Filter items with total >= $10
const filterExpensive = item => item.total >= 10;

// Chain all operations and calculate grand total
const processedCart = cart
    .map(calcTotal)
    .map(applyDiscount)
    .map(addTax)
    .filter(filterExpensive);

console.log(processedCart);

const grandTotal = processedCart.reduce((acc, item) => acc + item.total, 0);
console.log("Grand Total:", grandTotal.toFixed(2));

// ===================== Problem 2 =====================
// Arrow Functions in Object Methods

const ShoppingCart = {
    items: [],
    addItem: function(name, price) { this.items.push({name, price}); },
    removeItem: function(name) { this.items = this.items.filter(item => item.name !== name); },
    getTotal: function() { return this.items.reduce((acc, item) => acc + item.price, 0); },
    applyCoupon: function(percent) { this.items = this.items.map(item => ({...item, price: item.price * (1 - percent/100)})); }
};

// Test
ShoppingCart.addItem("Laptop", 999);
ShoppingCart.addItem("Mouse", 25);
console.log(ShoppingCart.getTotal()); // 1024
ShoppingCart.applyCoupon(10);
console.log(ShoppingCart.getTotal()); // 921.6
ShoppingCart.removeItem("Mouse");
console.log(ShoppingCart.items);

// Note: Arrow functions inside object methods do NOT have their own 'this', so regular functions are preferred here.

// ===================== Problem 3 =====================
// Async Operations with Arrow Functions

// Mock data
const mockData = [
    {name: "Item1", status: "active"},
    {name: "Item2", status: "inactive"},
    {name: "Item3", status: "active"}
];

// Promise-based using arrow functions
Promise.resolve(mockData)
    .then(data => data.filter(item => item.status === 'active'))
    .then(activeItems => console.log("Active items:", activeItems))
    .catch(error => console.error(error));

// Async/await with arrow function
const fetchActiveItems = async () => {
    try {
        const data = await Promise.resolve(mockData);
        const activeItems = data.filter(item => item.status === 'active');
        console.log("Active items (async/await):", activeItems);
    } catch(error) {
        console.error(error);
    }
};
fetchActiveItems();

// Advantages: 
// - Arrow functions keep code concise.
// - Async/await improves readability and avoids chaining .then().
// - Regular Promises can be more flexible when chaining multiple operations.

// ===================== Problem 4 =====================
// Higher-Order Validators

// createValidator
const createValidator = rule => value => rule(value);

// Example
const validateLength = createValidator(value => value.length >= 5);
console.log(validateLength("Hello")); // true
console.log(validateLength("Hi")); // false

// Validator factory combining multiple rules
const combineValidators = (...validators) => value => validators.every(fn => fn(value));

// Example reusable validators
const isValidEmail = createValidator(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
const isValidPassword = createValidator(value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value));
const isValidPhoneNumber = createValidator(value => /^\d{3}-\d{3}-\d{4}$/.test(value));

// Combine rules
const validateUser = combineValidators(isValidEmail, isValidPassword);

console.log(validateUser("test@example.com123")); // true
console.log(validateUser("invalid")); // false

// Validators are reusable and chainable
console.log(isValidPhoneNumber("123-456-7890")); // true
console.log(isValidPhoneNumber("1234567890")); // false
