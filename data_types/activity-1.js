/*
 * ACTIVITY 1: Primitive Data Types
 * 
 * Problem 1: Number Type
 * Work with numbers and understand numeric operations
 */

// const num1 = 10;
// const num2 = 3.14;
// const num3 = -5;
// const num4 = 1e6; // Scientific notation

// Your task:
// 1. Log the type of each number using typeof operator
// 2. Perform arithmetic: addition, subtraction, multiplication, division, modulo
// 3. Understand special numbers:
//    - What is typeof Infinity?
//    - What is typeof NaN?
//    - Test: 0 / 0, 1 / 0, -1 / 0
//
// 4. Challenge: Create a function 'numberInfo' that:
//    - Takes a number
//    - Returns object with: {type, isInteger, isPositive, isFinite, value}
//    - Handles edge cases (NaN, Infinity)

// ============================================================================
// Problem 2: String Type
// Work with strings and string operations
// ============================================================================

// const str1 = "Hello";
// const str2 = 'World';
// const str3 = `Template`;

// Your task:
// 1. Log the type of each string
// 2. Concatenate strings: str1 + " " + str2
// 3. Use template literals: `${str1} ${str2}!`
// 4. Access string length: str1.length
// 5. Access characters: str1[0], str1.charAt(0)
//
// 6. Challenge: Create a function 'stringAnalyzer' that:
//    - Takes a string
//    - Returns object with: {length, firstChar, lastChar, isEmpty, type}
//    - Handle empty strings and edge cases

// ============================================================================
// Problem 3: Boolean Type
// Work with boolean values and logical operations
// ============================================================================

// const bool1 = true;
// const bool2 = false;
// const truthy1 = 1;
// const falsy1 = 0;

// Your task:
// 1. Log the type of bool1 and bool2
// 2. Understand truthy/falsy values:
//    - Test: Boolean(0), Boolean(""), Boolean(null), Boolean(undefined)
//    - Test: !!0, !!"", !!null
// 3. Use logical operators: &&, ||, !
//
// 4. Challenge: Create a function 'isTruthy' that:
//    - Takes any value
//    - Returns true if value is truthy, false if falsy
//    - Test with various data types

// ============================================================================
// Problem 4: Undefined and Null
// Understand the difference between undefined and null
// ============================================================================

// let undefVar;
// const nullVar = null;

// Your task:
// 1. Check types: typeof undefVar, typeof nullVar
// 2. Understand when variables are undefined vs null
// 3. Test comparisons:
//    - undefined == null
//    - undefined === null
//    - undefVar === undefined
//    - nullVar === null
//
// 4. Challenge: Create a function 'checkValue' that:
//    - Takes any value
//    - Returns: "undefined", "null", "empty string", "zero", or "has value"
//    - Handles all edge cases appropriately

// ACTIVITY 1: Primitive Data Types

// Problem 1: Number Type
// const num1 = 10;
// const num2 = 3.14;
// const num3 = -5;
// const num4 = 1e6;

console.log(typeof num1, typeof num2, typeof num3, typeof num4);
console.log(num1 + num2, num1 - num3, num2 * num3, num4 / num1, num1 % 3);
console.log(typeof Infinity, typeof NaN);
console.log(0 / 0, 1 / 0, -1 / 0);

function numberInfo(n) {
  return {
    type: typeof n,
    isInteger: Number.isInteger(n),
    isPositive: n > 0,
    isFinite: Number.isFinite(n),
    value: n
  };
}

// Problem 2: String Type
const str1 = "Hello";
const str2 = 'World';
const str3 = `Template`;

console.log(typeof str1, typeof str2, typeof str3);
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}!`);
console.log(str1.length, str1[0], str1.charAt(0));

function stringAnalyzer(str) {
  return {
    length: str.length,
    firstChar: str[0] || null,
    lastChar: str[str.length - 1] || null,
    isEmpty: str.length === 0,
    type: typeof str
  };
}

// Problem 3: Boolean Type
const bool1 = true;
const bool2 = false;
const truthy1 = 1;
const falsy1 = 0;

console.log(typeof bool1, typeof bool2);
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined));
console.log(!!0, !!"", !!null);
console.log(true && false, true || false, !true);

function isTruthy(value) {
  return Boolean(value);
}

// Problem 4: Undefined and Null
let undefVar;
const nullVar = null;

console.log(typeof undefVar, typeof nullVar);
console.log(undefined == null, undefined === null);
console.log(undefVar === undefined, nullVar === null);

function checkValue(val) {
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  if (val === "") return "empty string";
  if (val === 0) return "zero";
  return "has value";
}