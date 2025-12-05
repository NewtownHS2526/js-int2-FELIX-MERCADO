/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * Understand the difference between loose and strict equality
 */

// Your task:
// 1. Predict the output of each comparison, then test:
// console.log(5 == "5");        // What does this return?
// console.log(5 === "5");       // What does this return?
// console.log(0 == false);      // What does this return?
// console.log(0 === false);     // What does this return?
// console.log(null == undefined); // What does this return?
// console.log(null === undefined); // What does this return?

// 2. Create 5 examples where == returns true but === returns false
// 3. Explain when you would use == vs === in real code

// ============================================================================
// Problem 2: Relational Operators
// Work with <, >, <=, >= operators
// ============================================================================

// const age1 = 18;
// const age2 = 21;
// const score1 = 85;
// const score2 = 90;

// Your task:
// 1. Compare ages: Is age1 less than age2? Is age1 at least 18?
// 2. Compare scores: Is score1 greater than 80? Is score2 at least 90?
// 3. Create expressions that check if a student can:
//    - Vote (age >= 18)
//    - Drive (age >= 16)
//    - Drink (age >= 21)
//    - Get senior discount (age >= 65)
// 4. Challenge: Write a function 'checkEligibility' that takes age and returns 
//    an object with all eligibility checks

// ============================================================================
// Problem 3: String Comparisons
// Understand how strings are compared
// ============================================================================

// const name1 = "Alice";
// const name2 = "Bob";
// const name3 = "alice";

// Your task:
// 1. Compare: name1 < name2 (what does this mean for strings?)
// 2. Compare: name1 === name3 (case-sensitive comparison)
// 3. How would you do a case-insensitive comparison?
// 4. Challenge: Create a function 'sortNames' that sorts an array of names 
//    alphabetically, case-insensitively

// ============================================================================
// Problem 4: Comparison with Different Data Types
// Understand type coercion in comparisons
// ============================================================================

// Your task:
// 1. Predict and test these comparisons:
//    "10" > 9
//    "10" < 20
//    "apple" > "banana"
//    true > false
//    null < 1
//    undefined == null

// 2. Create 3 examples where type coercion leads to unexpected results
// 3. Explain how to avoid these issues
// 4. Challenge: Write a 'safeCompare' function that compares two values 
//    strictly without type coercion, but handles edge cases gracefully

// ===================== Problem 1: Equality Operators =====================

// Predictions:
console.log(5 == "5");        // true -> loose equality converts string to number
console.log(5 === "5");       // false -> strict equality, different types
console.log(0 == false);      // true -> loose equality converts false to 0
console.log(0 === false);     // false -> strict equality, different types
console.log(null == undefined); // true -> loose equality treats them as equal
console.log(null === undefined); // false -> strict equality, different types

// 5 examples where == is true but === is false
console.log("1" == 1);        // true
console.log(true == 1);       // true
console.log(false == 0);      // true
console.log("0" == 0);        // true
console.log(null == undefined); // true

// Explanation:
// Use `===` in most cases to avoid unexpected type coercion.
// Use `==` only if you intentionally want loose equality.


// ===================== Problem 2: Relational Operators =====================

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// Comparisons
console.log(age1 < age2); // true
console.log(age1 >= 18); // true
console.log(score1 > 80); // true
console.log(score2 >= 90); // true

// Eligibility checks
console.log(age1 >= 18); // can vote
console.log(age1 >= 16); // can drive
console.log(age1 >= 21); // can drink
console.log(age1 >= 65); // senior discount

// Challenge: checkEligibility function
function checkEligibility(age) {
    return {
        canVote: age >= 18,
        canDrive: age >= 16,
        canDrink: age >= 21,
        seniorDiscount: age >= 65
    };
}

console.log(checkEligibility(20));


// ===================== Problem 3: String Comparisons =====================

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// 1. name1 < name2
console.log(name1 < name2); // true -> lexicographical comparison (A < B)

// 2. name1 === name3
console.log(name1 === name3); // false -> case-sensitive

// 3. Case-insensitive comparison
console.log(name1.toLowerCase() === name3.toLowerCase()); // true

// 4. Challenge: sortNames function
function sortNames(names) {
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortNames(["alice", "Bob", "Charlie", "bob"])); 
// Output: ["alice", "Bob", "bob", "Charlie"]


// ===================== Problem 4: Comparison with Different Data Types =====================

// Predictions:
console.log("10" > 9);       // true -> "10" coerced to number
console.log("10" < 20);      // true -> "10" coerced to number
console.log("apple" > "banana"); // false -> lexicographical string comparison
console.log(true > false);    // true -> true = 1, false = 0
console.log(null < 1);        // true -> null coerced to 0
console.log(undefined == null); // true -> loose equality treats them as equal

// 3 examples of unexpected type coercion
console.log([] == 0);         // true -> [] coerced to 0
console.log("" == false);     // true -> "" coerced to false
console.log([1] == true);     // true -> [1] coerced to 1, true = 1

// Avoid issues:
// - Use strict equality (===)
// - Explicitly convert types before comparison

// Challenge: safeCompare function
function safeCompare(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined)) return true;
    if ((a === null || a === undefined) || (b === null || b === undefined)) return false;
    return a === b;
}

console.log(safeCompare(null, undefined)); // true
console.log(safeCompare(5, "5"));         // false
console.log(safeCompare(10, 10));         // true
