/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 * 
 * Problem 1: Implicit vs Explicit Returns
 * For each scenario, determine whether to use implicit or explicit return
 */

// Your task:
// 1. A function that returns a single expression - write with implicit return
// 2. A function that has conditional logic before returning - write with explicit return
// 3. A function that needs to log something before returning - write with explicit return
// 4. A function that returns an object literal - write both ways and explain the difference

// ============================================================================
// Problem 2: Arrow Functions with Destructuring
// Create arrow functions that use destructuring in their parameters
// ============================================================================

// Your task:
// 1. Create a function that takes an object {x, y} and returns the distance from origin
//    Example: distanceFromOrigin({x: 3, y: 4}) should return 5
// 
// 2. Create a function that takes an array [firstName, lastName, age] and returns 
//    a formatted string: "First Name: [name], Last Name: [name], Age: [age]"
//
// 3. Create a function that takes an object with nested properties {user: {name, email}} 
//    and extracts them to return "Name: [name], Email: [email]"
//
// 4. Challenge: Combine all three into a function that processes user data from different 
//    formats (object with coordinates, array format, nested object format)

// ============================================================================
// Problem 3: Arrow Functions and Event Handlers
// Given this scenario: You have a button element that you want to add event listeners to
// ============================================================================

// Simulated button element (in real scenario, you'd use document.getElementById)
const button = {
    text: "Click me",
    counter: 0,
    innerText: "Click me"
};

// Your task:
// 1. Write an arrow function for click event that increments a counter
// 2. Write an arrow function for double-click event that resets the counter
// 3. Write an arrow function for mouseover event that changes the button's text
// 4. Challenge: Create a counter component using arrow functions that handles multiple 
//    events. The counter should persist across page reloads using localStorage.
//    (You'll need to use: localStorage.setItem, localStorage.getItem)

// ============================================================================
// Problem 4: Functional Composition with Arrow Functions
// Create a series of arrow functions that can be composed together:
// ============================================================================

// Your task:
// 1. Create 'increment' - adds 1 to a number
// 2. Create 'double' - multiplies a number by 2
// 3. Create 'square' - squares a number
// 4. Challenge: Write a 'pipe' function that takes multiple functions and composes them 
//    left-to-right (pipe(increment, double, square)(5) = square(double(increment(5))))
// 5. Challenge: Write a 'compose' function that composes right-to-left
// 6. Use both to transform the number 5 using all three operations in different orders. 
//    What are the results?

/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 */

// ===================== Problem 1 =====================
// Implicit vs Explicit Returns

// 1️⃣ Single expression → implicit return
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// 2️⃣ Conditional logic → explicit return
const checkEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(checkEven(5)); // Odd

// 3️⃣ Needs to log before returning → explicit return
const greetWithLog = (name) => {
    console.log("Greeting user...");
    return "Hello, " + name + "!";
};
console.log(greetWithLog("Felix")); // Greeting user... Hello, Felix!

// 4️⃣ Return an object literal
// Implicit return (needs parentheses)
const createPointImplicit = (x, y) => ({x, y});
console.log(createPointImplicit(2, 3)); // {x: 2, y: 3}

// Explicit return
const createPointExplicit = (x, y) => {
    return {x, y};
};
console.log(createPointExplicit(5, 6)); // {x: 5, y: 6}

// ===================== Problem 2 =====================
// Arrow Functions with Destructuring

// 1️⃣ Object {x, y} → distance from origin
const distanceFromOrigin = ({x, y}) => Math.sqrt(x*x + y*y);
console.log(distanceFromOrigin({x: 3, y: 4})); // 5

// 2️⃣ Array [firstName, lastName, age] → formatted string
const formatPersonArray = ([firstName, lastName, age]) => 
    `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;
console.log(formatPersonArray(["Felix", "Mercado", 15]));

// 3️⃣ Nested object {user: {name, email}} → formatted string
const formatNestedUser = ({user: {name, email}}) => 
    `Name: ${name}, Email: ${email}`;
console.log(formatNestedUser({user: {name: "Felix", email: "felix@example.com"}}));

// 4️⃣ Challenge: Process different formats
const processUserData = (data) => {
    if (Array.isArray(data)) return formatPersonArray(data);
    if (data.user) return formatNestedUser(data);
    if (data.x !== undefined && data.y !== undefined) return distanceFromOrigin(data);
};
console.log(processUserData({x: 6, y: 8})); // 10
console.log(processUserData(["John", "Doe", 30])); // formatted string
console.log(processUserData({user: {name: "Alice", email: "alice@example.com"}})); // formatted string

// ===================== Problem 3 =====================
// Arrow Functions and Event Handlers

// Click event → increment counter
const onClick = () => button.counter += 1;
onClick();
console.log(button.counter); // 1

// Double-click event → reset counter
const onDoubleClick = () => button.counter = 0;
onDoubleClick();
console.log(button.counter); // 0

// Mouseover event → change button text
const onMouseOver = () => button.text = "Hovered!";
onMouseOver();
console.log(button.text); // Hovered!

// Challenge: Counter component with localStorage (simplified example)
const Counter = (() => {
    const key = "counterValue";
    const get = () => parseInt(localStorage.getItem(key)) || 0;
    const set = (val) => localStorage.setItem(key, val);
    let count = get();

    return {
        click: () => { count++; set(count); return count; },
        reset: () => { count = 0; set(count); return count; },
        value: () => get()
    };
})();

// Usage example:
// console.log(Counter.click()); // increment
// console.log(Counter.reset()); // reset

// ===================== Problem 4 =====================
// Functional Composition

// increment
const increment = x => x + 1;

// double
const doubleNum = x => x * 2;

// square
const square = x => x * x;

// pipe (left-to-right)
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// compose (right-to-left)
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// Transform number 5
const resultPipe = pipe(increment, doubleNum, square)(5); 
console.log(resultPipe); // ((5+1)*2)^2 = 144

const resultCompose = compose(increment, doubleNum, square)(5);
console.log(resultCompose); // increment(double(square(5))) = increment(double(25)) = increment(50) = 5