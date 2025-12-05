/*
 * ACTIVITY 3: Function Scope and Closures
 * 
 * Problem 1: Variable Scope
 * Understand function scope and lexical scope
 */

// let globalVar = "I'm global";

// Your task:
// 1. Create a function 'testScope' that:
//    - Has a local variable with same name as globalVar
//    - Logs both global and local variables
//    - Demonstrates scope difference
//
// 2. Create nested functions to demonstrate:
//    - Outer function variable accessible in inner function
//    - Inner function variable NOT accessible in outer function
//
// 3. Challenge: Create a scope demonstration:
//    - Global variable
//    - Function-level variable
//    - Block-level variable (inside if/for)
//    - Show which variables are accessible where

// ============================================================================
// Problem 2: Closures
// Understand and create closures
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that:
//    - Returns a function
//    - Returned function increments and returns a counter
//    - Counter persists between calls (closure)
//    Example: const counter = createCounter(); counter(); // 1, counter(); // 2
//
// 2. Create a function 'createMultiplier' that:
//    - Takes a number
//    - Returns a function that multiplies its argument by that number
//    Example: const double = createMultiplier(2); double(5); // 10
//
// 3. Challenge: Create a function 'createBankAccount' that:
//    - Has private balance variable (closure)
//    - Returns object with methods: deposit, withdraw, getBalance
//    - Balance is only accessible through methods

// ============================================================================
// Problem 3: IIFE (Immediately Invoked Function Expression)
// Use IIFE for scope isolation
// ============================================================================

// Your task:
// 1. Create an IIFE that:
//    - Logs a message immediately
//    - Has its own scope
//
// 2. Create an IIFE that:
//    - Takes parameters
//    - Performs calculation
//    - Returns result
//
// 3. Challenge: Create a module pattern using IIFE:
//    - Private variables and functions
//    - Public API returned as object
//    - Example: calculator module with private operations

// ============================================================================
// Problem 4: Closure in Practice
// Apply closures to real-world scenarios
// ============================================================================

// Your task:
// 1. Create a function 'createLogger' that:
//    - Takes a prefix string
//    - Returns a function that logs messages with prefix
//    - Uses closure to remember prefix
//
// 2. Create a function 'createValidator' that:
//    - Takes validation rules
//    - Returns a function that validates values using those rules
//    - Rules stored in closure
//
// 3. Challenge: Create a function 'createCache' that:
//    - Returns an object with methods: get, set, clear
//    - Uses closure to store cache data privately
//    - Cache persists between method calls
//    - Example: const cache = createCache(); cache.set("key", "value"); cache.get("key");

// Problem 1: Variable Scope

let globalVar = "I'm global";

function testScope() {
    let globalVar = "I'm local";
    console.log("Global:", window.globalVar);
    console.log("Local:", globalVar);
}

function outerFunction() {
    let outerVar = "I'm outside";

    function innerFunction() {
        let innerVar = "I'm inside";
        console.log(outerVar);
        return innerVar;
    }

    const inner = innerFunction();

    // innerVar is NOT accessible here
    return { inner };
}

function scopeDemo() {
    var functionVar = "I'm function-scoped";

    if (true) {
        let blockVar = "I'm block-scoped";
        console.log(globalVar, functionVar, blockVar);
    }

    // blockVar is NOT accessible here
    console.log(globalVar, functionVar);
}

// Problem 2: Closures

const createCounter = () => {
    let count = 0;
    return () => ++count;
};

const createMultiplier = (num) => (value) => num * value;

const createBankAccount = () => {
    let balance = 0;
    return {
        deposit: (amount) => (balance += amount),
        withdraw: (amount) => {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return balance;
        },
        getBalance: () => balance
    };
};

// Problem 3: IIFE

(function () {
    console.log("IIFE executed immediately!");
})();

const sumIIFE = (function (a, b) {
    return a + b;
})(5, 3);

const calculatorModule = (function () {
    let history = [];

    function record(op, result) {
        history.push({ op, result });
    }

    return {
        add: (a, b) => {
            const r = a + b;
            record("add", r);
            return r;
        },
        subtract: (a, b) => {
            const r = a - b;
            record("subtract", r);
            return r;
        },
        getHistory: () => [...history]
    };
})();

// Problem 4: Closure in Practice

const createLogger = (prefix) => (msg) => console.log(`[${prefix}] ${msg}`);

const createValidator = (rules) => (value) => {
    for (let rule of rules) {
        if (!rule(value)) return false;
    }
    return true;
};

const createCache = () => {
    let store = {};
    return {
        set: (key, value) => (store[key] = value),
        get: (key) => store[key],
        clear: () => (store = {})
    };
};