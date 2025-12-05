/*
 * ACTIVITY 5: Working with Strings
 * 
 * Problem 1: String Methods and Operations
 * Master string manipulation
 */

// const text = "Hello World";
// const email = "user@example.com";

// Your task:
// 1. String methods:
//    - text.toUpperCase(), text.toLowerCase()
//    - text.indexOf("World"), text.includes("Hello")
//    - text.slice(0, 5), text.substring(0, 5)
//    - text.replace("World", "JavaScript")
//
// 2. Challenge: Create a function 'analyzeString' that:
//    - Takes a string
//    - Returns object with: {length, wordCount, hasNumbers, hasLetters, uppercase, lowercase}

// ============================================================================
// Problem 2: Template Literals
// Use template literals for string interpolation
// ============================================================================

// const name = "Alice";
// const age = 30;
// const city = "New York";

// Your task:
// 1. Create strings using template literals:
//    - `My name is ${name}`
//    - Multi-line strings with template literals
//    - Expressions inside: `Next year I'll be ${age + 1}`
//
// 2. Challenge: Create a function 'formatEmail' that:
//    - Takes user object: {firstName, lastName, domain}
//    - Returns formatted email using template literals
//    - Format: firstName.lastName@domain.com

// ============================================================================
// Problem 3: String Conversion and Parsing
// Convert and parse strings
// ============================================================================

// const numStr = "123.45";
// const dateStr = "2024-12-15";
// const csvLine = "apple,banana,orange";

// Your task:
// 1. Parse number from string:
//    - parseInt(numStr), parseFloat(numStr)
//    - Number(numStr), +numStr
//
// 2. Split string: csvLine.split(",")
//
// 3. Challenge: Create a function 'parseCSV' that:
//    - Takes a CSV string line
//    - Returns array of values
//    - Handles quotes and commas inside values
//    - Converts numbers automatically

// ============================================================================
// Problem 4: String Validation
// Validate string formats
// ============================================================================

// Your task:
// 1. Check if string is empty: str.length === 0, str === ""
// 2. Check if string contains only letters: use regex or loop
// 3. Check if string is valid email format (basic check)
//
// 4. Challenge: Create a function 'validateString' that:
//    - Takes a string and validation type ("email", "phone", "password")
//    - Returns {valid: true/false, errors: []}
//    - Validates format according to type
//    - Returns detailed error messages

// Problem 1: String Methods
const text = "Hello World";
const email = "user@example.com";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.indexOf("World"));
console.log(text.includes("Hello"));
console.log(text.slice(0,5));
console.log(text.substring(0,5));
console.log(text.replace("World","JavaScript"));

export function analyzeString(str){
  return {
    length: str.length,
    wordCount: str.trim().split(/\s+/).length,
    hasNumbers: /[0-9]/.test(str),
    hasLetters: /[a-zA-Z]/.test(str),
    uppercase: str.toUpperCase(),
    lowercase: str.toLowerCase()
  };
}

// Problem 2: Template Literals
const name = "Alice";
const age = 30;
const city = "New York";

console.log(`My name is ${name}`);
console.log(`I live in ${city}.
This is a multi-line string.`);
console.log(`Next year I'll be ${age + 1}`);

export function formatEmail({firstName, lastName, domain}){
  return `${firstName}.${lastName}@${domain}.com`;
}

// Problem 3: String Conversion and Parsing
const numStr = "123.45";
const dateStr = "2024-12-15";
const csvLine = "apple,banana,orange";

console.log(parseInt(numStr));
console.log(parseFloat(numStr));
console.log(Number(numStr));
console.log(+numStr);
console.log(csvLine.split(","));

export function parseCSV(line){
  const result=[];
  let curr='';
  let inQuotes=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'){
      inQuotes=!inQuotes;
    } else if(ch===',' && !inQuotes){
      result.push(autoConvert(curr.trim()));
      curr='';
    } else {
      curr+=ch;
    }
  }
  result.push(autoConvert(curr.trim()));
  return result;
}

function autoConvert(val){
  if(!isNaN(val) && val!=='' ) return Number(val);
  return val;
}

// Problem 4: String Validation
export function validateString(str,type){
  const errors=[];
  let valid=true;

  if(type==="email"){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(str)){ valid=false; errors.push("Invalid email format"); }
  }
  else if(type==="phone"){
    const regex=/^[0-9]{10}$/;
    if(!regex.test(str)){ valid=false; errors.push("Phone must be 10 digits"); }
  }
  else if(type==="password"){
    if(str.length<8) {valid=false; errors.push("Password too short");}
    if(!/[A-Z]/.test(str)) {valid=false; errors.push("Missing uppercase letter");}
    if(!/[0-9]/.test(str)) {valid=false; errors.push("Missing number");}
  }

  return {valid, errors};
}