/*
 * ACTIVITY 1: Basic Conditional Statements
 * 
 * Problem 1: Simple if Statements
 * Practice basic conditional logic
 */

// const age = 18;
// const temperature = 25;

// Your task:
// 1. Write an if statement to check if age is 18 or older, log "Adult"
// 2. Write an if statement to check if temperature is above 30, log "Hot day"
// 3. Write an if statement to check if temperature is below 0, log "Freezing"
// 4. Challenge: Create a function 'checkAgeStatus' that categorizes age:
//    - "Child" if age < 13
//    - "Teen" if age >= 13 and age < 18
//    - "Adult" if age >= 18

// ============================================================================
// Problem 2: if-else Statements
// Practice decision-making with two outcomes
// ============================================================================

// const score = 85;
// const isMember = true;

// Your task:
// 1. Write if-else to check if score >= 70, log "Pass" or "Fail"
// 2. Write if-else to check if isMember, log "Welcome back!" or "Join now!"
// 3. Create a function 'checkDiscount' that:
//    - Takes price and isMember
//    - Returns price with 10% discount if member, otherwise full price
//
// 4. Challenge: Write a function 'gradeAssignment' that:
//    - Takes a score (0-100)
//    - Returns letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (<60)
//    - Use if-else chains

// ============================================================================
// Problem 3: if-else if-else Chains
// Handle multiple conditions
// ============================================================================

// const time = 14; // hours in 24-hour format

// Your task:
// 1. Write if-else if-else to categorize time:
//    - "Morning" if 5 <= time < 12
//    - "Afternoon" if 12 <= time < 17
//    - "Evening" if 17 <= time < 21
//    - "Night" otherwise
//
// 2. Create a function 'getWeatherAdvice' that:
//    - Takes temperature
//    - Returns advice: "Too cold" (< 10), "Cold" (10-15), "Cool" (16-20), 
//      "Warm" (21-25), "Hot" (26-30), "Too hot" (> 30)
//
// 3. Challenge: Write a function 'calculateShipping' that:
//    - Takes weight (in kg)
//    - Returns shipping cost: $5 (< 1kg), $10 (1-5kg), $20 (5-10kg), $50 (> 10kg)

// ============================================================================
// Problem 4: Nested Conditionals
// Use conditionals inside other conditionals
// ============================================================================

// const age2 = 20;
// const hasLicense = true;
// const hasInsurance = true;

// Your task:
// 1. Write nested if statements to check:
//    - If age >= 18, check if hasLicense
//    - If hasLicense, check if hasInsurance
//    - Log appropriate messages at each level
//
// 2. Create a function 'canRentCar' that:
//    - Takes age, hasLicense, hasInsurance
//    - Returns true only if age >= 21 AND hasLicense AND hasInsurance
//    - Use nested conditionals with clear logic
//
// 3. Challenge: Write a function 'evaluateStudent' that:
//    - Takes grade and attendance percentage
//    - If grade >= 70, check attendance:
//      - If attendance >= 90, return "Excellent"
//      - If attendance >= 80, return "Good"
//      - Else return "Needs improvement"
//    - If grade < 70, return "Failed"
//    - Use nested cond
// 
//  Problem 1 

const age = 18;
const temperature = 25;

// 1. Check if age >= 18
if (age >= 18) {
    console.log("Adult");
}

// 2. Check if temperature > 30
if (temperature > 30) {
    console.log("Hot day");
}

// 3. Check if temperature < 0
if (temperature < 0) {
    console.log("Freezing");
}

// 4. Challenge: checkAgeStatus function
function checkAgeStatus(age) {
    if (age < 13) return "Child";
    else if (age >= 13 && age < 18) return "Teen";
    else return "Adult";
}

console.log(checkAgeStatus(age)); // Adult

//  Problem 2 

const score = 85;
const isMember = true;

// 1. Pass or Fail
if (score >= 70) console.log("Pass");
else console.log("Fail");

// 2. Membership check
if (isMember) console.log("Welcome back!");
else console.log("Join now!");

// 3. checkDiscount function
function checkDiscount(price, isMember) {
    if (isMember) return price * 0.9;
    else return price;
}

console.log(checkDiscount(100, true)); // 90

// 4. Challenge: gradeAssignment function
function gradeAssignment(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(gradeAssignment(score)); // B

//  Problem 3 

const time = 14;

// 1. Categorize time
if (time >= 5 && time < 12) console.log("Morning");
else if (time >= 12 && time < 17) console.log("Afternoon");
else if (time >= 17 && time < 21) console.log("Evening");
else console.log("Night");

// 2. getWeatherAdvice function
function getWeatherAdvice(temp) {
    if (temp < 10) return "Too cold";
    else if (temp <= 15) return "Cold";
    else if (temp <= 20) return "Cool";
    else if (temp <= 25) return "Warm";
    else if (temp <= 30) return "Hot";
    else return "Too hot";
}

console.log(getWeatherAdvice(25)); // Warm

// 3. Challenge: calculateShipping function
function calculateShipping(weight) {
    if (weight < 1) return 5;
    else if (weight <= 5) return 10;
    else if (weight <= 10) return 20;
    else return 50;
}

console.log(calculateShipping(6)); // 20

//  Problem 4 

const age2 = 20;
const hasLicense = true;
const hasInsurance = true;

// 1. Nested if statements
if (age2 >= 18) {
    console.log("Old enough to drive");
    if (hasLicense) {
        console.log("Has a license");
        if (hasInsurance) {
            console.log("Has insurance");
        } else {
            console.log("No insurance");
        }
    } else {
        console.log("No license");
    }
} else {
    console.log("Too young to drive");
}

// 2. canRentCar function
function canRentCar(age, hasLicense, hasInsurance) {
    if (age >= 21) {
        if (hasLicense) {
            if (hasInsurance) {
                return true;
            }
        }
    }
    return false;
}

console.log(canRentCar(22, true, true)); // true
console.log(canRentCar(20, true, true)); // false

// 3. Challenge: evaluateStudent function
function evaluateStudent(grade, attendance) {
    if (grade >= 70) {
        if (attendance >= 90) return "Excellent";
        else if (attendance >= 80) return "Good";
        else return "Needs improvement";
    } else {
        return "Failed";
    }
}

console.log(evaluateStudent(85, 92)); // Excellent
console.log(evaluateStudent(75, 85)); // Good
console.log(evaluateStudent(65, 90)); // Failed
itionals

