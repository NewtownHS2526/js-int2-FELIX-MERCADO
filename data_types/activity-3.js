/*
 * ACTIVITY 3: Objects and Arrays
 * 
 * Problem 1: Object Basics
 * Work with object data structure
 */

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Your task:
// 1. Access properties: person.name, person["age"]
// 2. Add new property: person.email = "alice@example.com"
// 3. Modify property: person.age = 31
// 4. Check if property exists: "name" in person, person.hasOwnProperty("name")
//
// 5. Challenge: Create a function 'objectInfo' that:
//    - Takes an object
//    - Returns object with: {keys: [], values: [], size: number, isEmpty: boolean}


// ============================================================================
// Problem 2: Array Basics
// Work with array data structure
// ============================================================================

const fruits = ["apple", "banana", "orange"];

// Your task:
// 1. Access elements: fruits[0], fruits[fruits.length - 1]
// 2. Add elements: fruits.push("grape"), fruits.unshift("mango")
// 3. Remove elements: fruits.pop(), fruits.shift()
// 4. Check if array: Array.isArray(fruits)
//
// 5. Challenge: Create a function 'arrayInfo' that:
//    - Takes an array
//    - Returns object with: {length, first, last, isEmpty, type: "array"}

// ============================================================================
// Problem 3: Nested Data Structures
// Work with objects and arrays inside other structures
// ============================================================================

const library = {
    books: [
        { title: "Book A", author: "Author 1", pages: 200 },
        { title: "Book B", author: "Author 2", pages: 150 }
    ],
    location: {
        city: "Boston",
        street: "Main St"
    }
};

// Your task:
// 1. Access nested properties: library.books[0].title
// 2. Add new book to array: library.books.push({...})
// 3. Access nested object: library.location.city
//
// 4. Challenge: Create a function 'deepAccess' that:
//    - Takes object and path string like "books.0.title"
//    - Returns value at that path
//    - Returns null if path doesn't exist
//    - Handles arrays and objects

// ============================================================================
// Problem 4: Reference vs Value
// Understand how objects and arrays are passed
// ============================================================================

const arr1 = [1, 2, 3];
const arr2 = arr1;
const obj1 = { a: 1 };
const obj2 = obj1;

// Your task:
// 1. Modify arr1: arr1.push(4)
//    - Check arr2, what happened? Why?
//
// 2. Modify obj1: obj1.b = 2
//    - Check obj2, what happened? Why?
//
// 3. Create copies:
//    - const arr3 = [...arr1] (spread operator)
//    - const obj3 = {...obj1} (spread operator)
//    - Modify arr3 and obj3, verify originals unchanged
//
// 4. Challenge: Create a function 'deepCopy' that:
//    - Takes any object or array
//    - Returns a complete independent copy
//    - Handles nested structures
//    - Test that modifications to copy don't affect original

// ACTIVITY 3: Objects and Arrays

// Problem 1: Object Basics
function objectInfo(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return {
        keys,
        values,
        size: keys.length,
        isEmpty: keys.length === 0
    };
}

// Problem 2: Array Basics
function arrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0],
        last: arr[arr.length - 1],
        isEmpty: arr.length === 0,
        type: "array"
    };
}

// Problem 3: Nested Data Structures
function deepAccess(obj, path) {
    const parts = path.split(".");
    let current = obj;

    for (const part of parts) {
        if (current == null) return null;
        current = current[part];
    }
    return current === undefined ? null : current;
}

// Problem 4: Reference vs Value
function deepCopy(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    const result = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            result[key] = deepCopy(value[key]);
        }
    }
    return result;
}