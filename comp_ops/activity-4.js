/*
 * ACTIVITY 4: Comparison Operators in Conditional Logic
 * 
 * Problem 1: Using Comparisons in if Statements
 */

// const userAge = 20;
// const userScore = 85;
// const hasMembership = true;

// Your task:
// 1. Write an if statement to check if user is adult (age >= 18)
// 2. Write an if-else to check if score is passing (>= 70)
// 3. Write nested if statements to check:
//    - If user is adult AND has membership, give discount
//    - If user is adult but no membership, show membership offer
//    - If user is not adult, show age restriction message
//
// 4. Challenge: Create a 'calculateDiscount' function that:
//    - Takes age, score, hasMembership
//    - Returns discount percentage based on multiple comparisons
//    - Uses clear comparison logic

// ============================================================================
// Problem 2: Ternary Operator with Comparisons
// Use ternary operator for simple comparisons
// ============================================================================

// const price = 100;
// const isMember = true;

// Your task:
// 1. Use ternary to set discount: isMember ? 0.1 : 0
// 2. Use ternary to set status: price > 50 ? "expensive" : "affordable"
// 3. Create nested ternary for:
//    - If member: 20% discount
//    - Else if price > 100: 10% discount
//    - Else: 0% discount
//
// 4. Challenge: Convert a multi-condition if-else to a readable ternary chain
// 5. Explain when to use ternary vs if-else

// ============================================================================
// Problem 3: Comparison in Loops
// Use comparisons to control loop execution
// ============================================================================

// const numbers = [5, 10, 15, 20, 25, 30];

// Your task:
// 1. Use for loop to find all numbers greater than 15
// 2. Use while loop to find first number greater than 20
// 3. Use forEach with comparison to count numbers between 10 and 25
//
// 4. Challenge: Create a 'filterByRange' function that:
//    - Takes an array, min, and max
//    - Returns filtered array using comparisons
//    - Handles edge cases (min > max, empty array, etc.)

// ============================================================================
// Problem 4: Comparison-Based Sorting
// Use comparisons to sort data
// ============================================================================

// const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 92 },
//     { name: "Charlie", grade: 78 },
//     { name: "Diana", grade: 95 }
// ];

// Your task:
// 1. Sort students by grade (ascending) using comparison in sort()
// 2. Sort students by grade (descending) using comparison
// 3. Sort students by name alphabetically
//
// 4. Challenge: Create a 'multiSort' function that:
//    - Takes an array and sort criteria
//    - Can sort by multiple fields (e.g., grade then name)
//    - Uses comparison operators effectively
//    Example: multiSort(students, ["grade", "desc"], ["name", "asc"])

// ===================== Problem 1: Using Comparisons in if Statements =====================

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// 1. Check if user is adult
if (userAge >= 18) {
    console.log("User is an adult");
}

// 2. Check if score is passing
if (userScore >= 70) {
    console.log("Score is passing");
} else {
    console.log("Score is failing");
}

// 3. Nested if statements
if (userAge >= 18) {
    if (hasMembership) {
        console.log("Give discount");
    } else {
        console.log("Offer membership");
    }
} else {
    console.log("Age restriction applies");
}

// 4. Challenge: calculateDiscount function
function calculateDiscount(age, score, hasMembership) {
    if (age < 18) return 0; // no discount if underage
    if (score < 70) return 5; // low score, small discount
    if (hasMembership) return 20;
    if (!hasMembership) return 10;
    return 0;
}

console.log(calculateDiscount(20, 85, true));  // 20
console.log(calculateDiscount(16, 90, true));  // 0

// ===================== Problem 2: Ternary Operator with Comparisons =====================

const price = 100;
const isMember = true;

// 1. Simple ternary
const discount = isMember ? 0.1 : 0;
console.log(discount); // 0.1

// 2. Price status
const status = price > 50 ? "expensive" : "affordable";
console.log(status); // "expensive"

// 3. Nested ternary
const nestedDiscount = isMember ? 0.2 : price > 100 ? 0.1 : 0;
console.log(nestedDiscount); // 0.2

// 4. Multi-condition if-else converted to ternary
// Example: if (a > b) {...} else if (a === b) {...} else {...}
const a = 10, b = 5;
const comparison = a > b ? "greater" : a === b ? "equal" : "less";
console.log(comparison); // "greater"

// 5. Explanation: 
// Use ternary for short, simple conditionals; if-else is better for complex or nested logic

// ===================== Problem 3: Comparison in Loops =====================

const numbers = [5, 10, 15, 20, 25, 30];

// 1. For loop: numbers > 15
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        console.log(numbers[i]); // 20, 25, 30
    }
}

// 2. While loop: first number > 20
let idx = 0;
while (idx < numbers.length) {
    if (numbers[idx] > 20) {
        console.log(numbers[idx]); // 25
        break;
    }
    idx++;
}

// 3. forEach count numbers between 10 and 25
let count = 0;
numbers.forEach(n => {
    if (n >= 10 && n <= 25) count++;
});
console.log(count); // 4 (10,15,20,25)

// 4. Challenge: filterByRange
function filterByRange(arr, min, max) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    if (min > max) [min, max] = [max, min]; // swap if min > max
    return arr.filter(n => n >= min && n <= max);
}

console.log(filterByRange(numbers, 15, 25)); // [15, 20, 25]
console.log(filterByRange(numbers, 25, 15)); // [15, 20, 25]

// ===================== Problem 4: Comparison-Based Sorting =====================

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// 1. Sort by grade ascending
students.sort((a, b) => a.grade - b.grade);
console.log(students);

// 2. Sort by grade descending
students.sort((a, b) => b.grade - a.grade);
console.log(students);

// 3. Sort by name alphabetically
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);

// 4. Challenge: multiSort function
function multiSort(arr, ...criteria) {
    return arr.sort((a, b) => {
        for (let [key, order] of criteria) {
            let valA = a[key], valB = b[key];
            let comparison = 0;
            if (typeof valA === "string") comparison = valA.localeCompare(valB);
            else comparison = valA - valB;
            if (comparison !== 0) return order === "desc" ? -comparison : comparison;
        }
        return 0;
    });
}

// Example usage:
const sorted = multiSort(
    students,
    ["grade", "desc"],
    ["name", "asc"]
);
console.log(sorted);
