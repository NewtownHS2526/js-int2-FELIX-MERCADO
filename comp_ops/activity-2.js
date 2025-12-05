/*
 * ACTIVITY 2: Logical Operators in Comparisons
 * 
 * Problem 1: Combining Comparisons with &&, ||, !
 */

// const age = 25;
// const hasLicense = true;
// const hasInsurance = false;

// Your task:
// 1. Check if a person can drive: age >= 18 && hasLicense
// 2. Check if a person needs insurance: hasLicense && !hasInsurance
// 3. Check if a person can rent a car: age >= 21 && hasLicense && hasInsurance
// 4. Challenge: Create a 'canDrive' function that checks all conditions and 
//    returns a detailed message explaining which conditions are met/not met

// ============================================================================
// Problem 2: Complex Logical Expressions
// Build complex comparison logic
// ============================================================================

// const temperature = 75;
// const isSunny = true;
// const isWeekend = false;

// Your task:
// 1. Determine if it's a good day for picnic:
//    temperature between 70-85 AND isSunny AND isWeekend
//
// 2. Determine if it's good for indoor activities:
//    temperature < 60 OR temperature > 90 OR !isSunny
//
// 3. Challenge: Create a function 'recommendActivity' that:
//    - Takes temperature, isSunny, isWeekend
//    - Returns an activity recommendation based on conditions
//    - Use multiple comparison operators and logical operators

// ============================================================================
// Problem 3: Comparison Operator Precedence
// Understand operator precedence in complex expressions
// ============================================================================

// const x = 5;
// const y = 10;
// const z = 15;

// Your task:
// 1. Predict the result of: x < y && y < z
// 2. Predict the result of: x < y || y > z
// 3. Predict the result of: !(x > y) && z > x
// 4. Predict the result of: x === 5 && y !== 10 || z > 20
//    (Hint: && has higher precedence than ||)
//
// 5. Challenge: Add parentheses to make the logic explicit for question 4
// 6. Explain why operator precedence matters

// ============================================================================
// Problem 4: Real-World Comparison Scenarios
// Apply comparisons to practical problems
// ============================================================================

// const product = {
//     price: 50,
//     stock: 5,
//     rating: 4.5,
//     onSale: false
// };

// Your task:
// 1. Check if product is affordable: price < 100
// 2. Check if product is in stock: stock > 0
// 3. Check if product is highly rated: rating >= 4.0
// 4. Check if product is a good deal: (onSale === true || price < 75) && rating >= 4.0
//
// 5. Challenge: Create a 'evaluateProduct' function that:
//    - Takes a product object
//    - Returns a recommendation: "Buy", "Consider", or "Skip"
//    - Consider price, stock, rating, and sale status
//    - Use multiple comparison and logical operators

// ===================== Problem 1: Combining Comparisons =====================

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// 1. Can drive?
console.log(age >= 18 && hasLicense); // true

// 2. Needs insurance?
console.log(hasLicense && !hasInsurance); // true

// 3. Can rent a car?
console.log(age >= 21 && hasLicense && hasInsurance); // false

// 4. Challenge: canDrive function
function canDrive(age, hasLicense, hasInsurance) {
    const messages = [];
    if (age >= 18) messages.push("Age requirement met");
    else messages.push("Too young to drive");

    if (hasLicense) messages.push("Has license");
    else messages.push("No driving license");

    if (hasInsurance) messages.push("Has insurance");
    else messages.push("Needs insurance");

    const canRent = age >= 21 && hasLicense && hasInsurance;
    return {
        canDrive: age >= 18 && hasLicense,
        canRent: canRent,
        details: messages.join(", ")
    };
}

console.log(canDrive(25, true, false));
// Output: { canDrive: true, canRent: false, details: "Age requirement met, Has license, Needs insurance" }


// ===================== Problem 2: Complex Logical Expressions =====================

const temperature = 75;
const isSunny = true;
const isWeekend = false;

// 1. Good day for picnic?
console.log(temperature >= 70 && temperature <= 85 && isSunny && isWeekend); // false

// 2. Good for indoor activities?
console.log(temperature < 60 || temperature > 90 || !isSunny); // false

// 3. Challenge: recommendActivity function
function recommendActivity(temp, sunny, weekend) {
    if (temp >= 70 && temp <= 85 && sunny && weekend) return "Picnic";
    if (temp < 60 || temp > 90 || !sunny) return "Indoor activities";
    return "Outdoor walk";
}

console.log(recommendActivity(75, true, false)); // "Outdoor walk"


// ===================== Problem 3: Comparison Operator Precedence =====================

const x = 5;
const y = 10;
const z = 15;

// 1. x < y && y < z
console.log(x < y && y < z); // true

// 2. x < y || y > z
console.log(x < y || y > z); // true

// 3. !(x > y) && z > x
console.log(!(x > y) && z > x); // true

// 4. x === 5 && y !== 10 || z > 20
console.log(x === 5 && y !== 10 || z > 20); // false

// 5. Explicit parentheses
console.log((x === 5 && y !== 10) || (z > 20)); // false

// 6. Explanation:
// && (AND) has higher precedence than || (OR), so it's evaluated first.
// Parentheses make logic explicit and prevent mistakes.


// ===================== Problem 4: Real-World Comparison Scenarios =====================

const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

// 1. Affordable
console.log(product.price < 100); // true

// 2. In stock
console.log(product.stock > 0); // true

// 3. Highly rated
console.log(product.rating >= 4.0); // true

// 4. Good deal
console.log((product.onSale === true || product.price < 75) && product.rating >= 4.0); // true

// 5. Challenge: evaluateProduct function
function evaluateProduct(prod) {
    if (prod.stock <= 0) return "Skip";
    if ((prod.onSale || prod.price < 75) && prod.rating >= 4.0) return "Buy";
    if (prod.price < 100 && prod.rating >= 4.0) return "Consider";
    return "Skip";
}

console.log(evaluateProduct(product)); // "Buy"
