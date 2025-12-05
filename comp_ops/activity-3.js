/*
 * ACTIVITY 3: Advanced Comparison Techniques
 * 
 * Problem 1: Comparing Arrays and Objects
 * Understand how objects and arrays are compared
 */

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;

// const obj1 = { name: "Alice", age: 30 };
// const obj2 = { name: "Alice", age: 30 };
// const obj3 = obj1;

// Your task:
// 1. Test: arr1 === arr2 (what does this return and why?)
// 2. Test: arr1 === arr3 (what does this return and why?)
// 3. Test: obj1 === obj2 (what does this return and why?)
// 4. Test: obj1 === obj3 (what does this return and why?)
//
// 5. Challenge: Write a function 'deepEqual' that compares two objects/arrays 
//    by their values, not references
// 6. Challenge: Write a function 'compareArrays' that checks if two arrays 
//    have the same elements in the same order

// ============================================================================
// Problem 2: Chaining Comparison Operators
// Use comparison operator chaining effectively
// ============================================================================

// const score = 85;
// const age = 25;

// Your task:
// 1. Check if score is between 80 and 90: 80 <= score && score <= 90
// 2. Check if age is between 18 and 65: Use chaining
// 3. Check if score is NOT between 0 and 100 (invalid score)
//
// 4. Challenge: Create a function 'isInRange' that:
//    - Takes a value, min, and max
//    - Returns true if value is between min and max (inclusive)
//    - Handles edge cases (what if min > max?)
//
// 5. Challenge: Create a function 'validateInput' that checks:
//    - If a number is in valid range (0-100)
//    - If a string length is in valid range (1-50)
//    - Returns detailed validation result

// ============================================================================
// Problem 3: Comparison with Null and Undefined
// Handle edge cases in comparisons
// ============================================================================

// let value1;
// let value2 = null;
// let value3 = 0;
// let value4 = "";

// Your task:
// 1. Compare each value with: null, undefined, 0, ""
// 2. Predict: value1 == null, value1 === null, value2 == undefined
// 3. Create checks for:
//    - If a variable is defined (not undefined)
//    - If a variable has a value (not null or undefined)
//    - If a variable is "falsy" (0, "", null, undefined, false)
//
// 4. Challenge: Write a 'safeCompare' function that handles null/undefined gracefully:
//    safeCompare(a, b) should return:
//    - true if both are null/undefined
//    - false if one is null/undefined and other isn't
//    - actual comparison otherwise

// ============================================================================
// Problem 4: Performance Considerations
// Optimize comparison operations
// ============================================================================

// const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your task:
// 1. Compare: largeArray.length > 0 vs largeArray.length !== 0
//    Which is more readable? Which is slightly faster?
//
// 2. Compare: value == null vs value === null || value === undefined
//    Which is preferred and why?
//
// 3. Challenge: Create a 'findMax' function that:
//    - Takes an array of numbers
//    - Returns the maximum value
//    - Handles empty arrays, null/undefined
//    - Uses efficient comparisons
//
// 4. Challenge: Create a 'binarySearch' function that:
//    - Takes a sorted array and target value
//    - Uses comparisons efficiently (<, >, ===)
//    - Returns index if found, -1 otherwise

// ===================== Problem 1: Comparing Arrays and Objects =====================

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// 1. arr1 === arr2 -> false (diferentes referencias en memoria)
console.log(arr1 === arr2); // false

// 2. arr1 === arr3 -> true (misma referencia)
console.log(arr1 === arr3); // true

// 3. obj1 === obj2 -> false (diferentes referencias)
console.log(obj1 === obj2); // false

// 4. obj1 === obj3 -> true (misma referencia)
console.log(obj1 === obj3); // true

// 5. Challenge: deepEqual function
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null || typeof a !== "object" || typeof b !== "object") return false;

    if (Array.isArray(a) !== Array.isArray(b)) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(obj1, obj2)); // true

// 6. Challenge: compareArrays function
function compareArrays(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(compareArrays(arr1, arr2)); // true

// ===================== Problem 2: Chaining Comparison Operators =====================

const score = 85;
const age = 25;

// 1. Check score between 80-90
console.log(80 <= score && score <= 90); // true

// 2. Check age between 18-65
console.log(18 <= age && age <= 65); // true

// 3. Check invalid score
console.log(score < 0 || score > 100); // false

// 4. Challenge: isInRange function
function isInRange(value, min, max) {
    if (min > max) [min, max] = [max, min];
    return value >= min && value <= max;
}

console.log(isInRange(50, 100, 0)); // true (swapped min/max)

// 5. Challenge: validateInput function
function validateInput(input) {
    if (typeof input === "number") {
        return { valid: input >= 0 && input <= 100, type: "number" };
    } else if (typeof input === "string") {
        return { valid: input.length >= 1 && input.length <= 50, type: "string" };
    } else {
        return { valid: false, type: typeof input };
    }
}

console.log(validateInput(120)); // { valid: false, type: "number" }
console.log(validateInput("Hello")); // { valid: true, type: "string" }

// ===================== Problem 3: Comparison with Null and Undefined =====================

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// Comparisons
console.log(value1 == null); // true
console.log(value1 === null); // false
console.log(value2 == undefined); // true

// Checks
function isDefined(v) {
    return v !== undefined;
}
function hasValue(v) {
    return v != null; // no null or undefined
}
function isFalsy(v) {
    return !v;
}

console.log(isDefined(value1)); // false
console.log(hasValue(value2)); // false
console.log(isFalsy(value3)); // true
console.log(isFalsy(value4)); // true

// 4. Challenge: safeCompare function
function safeCompare(a, b) {
    if ((a == null) && (b == null)) return true;
    if ((a == null) || (b == null)) return false;
    return a === b;
}

console.log(safeCompare(null, undefined)); // true
console.log(safeCompare(5, 5)); // true
console.log(safeCompare(5, null)); // false

// ===================== Problem 4: Performance Considerations =====================

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. length > 0 vs length !== 0
console.log(largeArray.length > 0); // true
console.log(largeArray.length !== 0); // true
// >0 es más legible; !==0 puede ser marginalmente más rápido pero menos intuitivo

// 2. value == null vs value === null || value === undefined
// value == null cubre ambos null y undefined, es preferido para checks rápidos

// 3. Challenge: findMax function
function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = arr[0];
    for (let val of arr) {
        if (val != null && val > max) max = val;
    }
    return max;
}

console.log(findMax([1, 5, 3])); // 5
console.log(findMax([])); // null

// 4. Challenge: binarySearch function
function binarySearch(arr, target) {
    if (!Array.isArray(arr) || arr.length === 0) return -1;
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // -1
