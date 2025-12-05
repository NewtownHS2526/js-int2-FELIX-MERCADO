/*
 * ACTIVITY 4: Special Data Types and Values
 * 
 * Problem 1: NaN (Not a Number)
 * Understand and handle NaN values
 */

const result1 = 0 / 0;
const result2 = Number("not a number");
const result3 = Math.sqrt(-1);

// Your task:
// 1. Check what typeof NaN returns
// 2. Test: NaN === NaN (what does this return? why?)
// 3. Test: isNaN(NaN), isNaN("text"), isNaN(123)
// 4. Use Number.isNaN() for more accurate checking
//
// 5. Challenge: Create a function 'safeDivide' that:
//    - Takes two numbers
//    - Returns result of division
//    - Returns null if result is NaN or Infinity
//    - Handles division by zero

// ============================================================================
// Problem 2: Infinity
// Understand Infinity values
// ============================================================================

const posInf = Infinity;
const negInf = -Infinity;
const largeNum = 1e308 * 2;

// Your task:
// 1. Check typeof Infinity
// 2. Test comparisons:
//    - Infinity > 1000
//    - -Infinity < -1000
//    - Infinity === Infinity
//
// 3. Test: Number.isFinite(Infinity), Number.isFinite(123)
//
// 4. Challenge: Create a function 'safeNumber' that:
//    - Takes any value
//    - Returns true if it's a finite number
//    - Returns false for NaN, Infinity, -Infinity, or non-numbers

// ============================================================================
// Problem 3: Symbol Type
// Understand Symbol data type
// ============================================================================

const sym1 = Symbol("description");
const sym2 = Symbol("description");

// Your task:
// 1. Check typeof sym1
// 2. Test: sym1 === sym2 (are they equal? why not?)
// 3. Create symbol property:
//    const obj = {};
//    obj[sym1] = "value";
//
// 4. Challenge: Create a function 'createUniqueKey' that:
//    - Takes a description
//    - Returns a unique Symbol
//    - Use it to create private properties in an object

// ============================================================================
// Problem 4: BigInt Type
// Work with large integers
// ============================================================================

const bigNum1 = BigInt(123);
const bigNum2 = 456n; // BigInt literal

// Your task:
// 1. Check typeof bigNum1
// 2. Perform operations: bigNum1 + bigNum2, bigNum1 * 2n
// 3. Understand limitations:
//    - Can't mix BigInt with regular numbers
//    - Test: bigNum1 + 5 (what error do you get?)
//
// 4. Challenge: Create a function 'safeBigInt' that:
//    - Takes a number or string
//    - Converts to BigInt safely
//    - Handles invalid inputs gracefully
//    - Returns null if conversion fails

// ACTIVITY 4: Special Data Types and Values

// Problem 1: NaN Handling
function safeDivide(a, b) {
    const result = a / b;
    if (!Number.isFinite(result) || Number.isNaN(result)) return null;
    return result;
}

// Problem 2: Infinity Handling
function safeNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}

// Problem 3: Symbol Type
function createUniqueKey(description) {
    return Symbol(description);
}

// Example of using symbol for private property
function createObjectWithPrivate(desc, value) {
    const key = Symbol(desc);
    return {
        [key]: value,
        getPrivate: () => value
    };
}

// Problem 4: BigInt Handling
function safeBigInt(input) {
    try {
        if (typeof input === "bigint") return input;
        if (typeof input === "number" && Number.isInteger(input)) return BigInt(input);
        if (typeof input === "string" && /^-?\d+$/.test(input)) return BigInt(input);
        return null;
    } catch {
        return null;
    }
}