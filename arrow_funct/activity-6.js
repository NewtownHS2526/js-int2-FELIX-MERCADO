/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

// const employees = [
//     { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
//     { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
//     { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
//     { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
// ];

// Your task:
// 1. Create arrow functions to:
//    - Filter employees by department
//    - Calculate average salary for a department
//    - Give a 10% raise to employees above a certain age
//    - Get employee names in "Last, First" format (assume single word names for simplicity)
//
// 2. Challenge: Create a function 'analyzeDepartment' that:
//    - Takes a department name
//    - Returns an object with: {dept, employeeCount, avgSalary, totalBudget, employees}
//    Use arrow functions throughout

// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions
// ============================================================================

// Your task:
// 1. Create validation arrow functions:
//    - isRequired(value) - checks if value exists
//    - minLength(str, len) - checks string length
//    - isEmail(str) - checks email format
//    - isNumber(val) - checks if number
//    - isPositive(num) - checks if positive number
//
// 2. Create a 'validateForm' function that takes an object and validation rules:
//    Example:
//    const rules = {
//        email: [isRequired, isEmail],
//        password: [isRequired, (p) => minLength(p, 8)]
//    };
//
// 3. Challenge: Create a validator that returns error messages for each field
//    Return format: {valid: true/false, errors: {field: ["error1", "error2"]}}

// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions
// ============================================================================

// const products = [
//     { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
//     { name: "Phone", price: 699, category: "Electronics", stock: 8 },
//     { name: "Book", price: 15, category: "Education", stock: 50 },
//     { name: "Chair", price: 150, category: "Furniture", stock: 20 }
// ];

// Your task:
// 1. Create arrow functions to:
//    - Sort products by price (ascending and descending)
//    - Sort products by multiple criteria (category, then price)
//    - Filter products by category
//    - Filter products with low stock (< 10 items)
//
// 2. Challenge: Create a 'smartFilter' function that:
//    - Takes an array and multiple filter criteria
//    - Returns filtered and sorted results
//    Example: smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10})

// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities
// ============================================================================

// Your task:
// Create a utilities object with arrow function methods:
// 1. debounce(func, delay) - delays function execution until after delay milliseconds
// 2. throttle(func, limit) - limits function execution to once per limit milliseconds
// 3. memoize(func) - caches function results for same inputs
// 4. pipe(...functions) - composes functions left to right
// 5. compose(...functions) - composes functions right to left
//
// Challenge: Test each utility with real scenarios:
// - Use debounce for a search input
// - Use throttle for scroll events
// - Use memoize for expensive calculations (like fibonacci)
// - Use pipe/compose for data transformations

/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 */

// ===================== Problem 1 =====================
// Employee Data Transformation
const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// Filter by department
const filterByDepartment = (dept, data) => data.filter(emp => emp.department === dept);

// Average salary
const averageSalary = data => data.reduce((sum, emp) => sum + emp.salary, 0) / data.length;

// Give raise to employees above age
const giveRaise = (age, percent, data) => data.map(emp => emp.age > age ? {...emp, salary: emp.salary * (1 + percent/100)} : emp);

// Names in "Last, First" format
const formatNames = data => data.map(emp => {
    const [first, last] = emp.name.split(" ");
    return `${last}, ${first}`;
});

// Analyze department
const analyzeDepartment = (dept) => {
    const deptEmployees = filterByDepartment(dept, employees);
    return {
        dept,
        employeeCount: deptEmployees.length,
        avgSalary: averageSalary(deptEmployees),
        totalBudget: deptEmployees.reduce((sum, emp) => sum + emp.salary, 0),
        employees: formatNames(deptEmployees)
    };
};

console.log(analyzeDepartment("IT"));

// ===================== Problem 2 =====================
// Data Validation

const isRequired = value => value !== undefined && value !== null && value !== '';
const minLength = (str, len) => str.length >= len;
const isEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isNumber = val => typeof val === "number" && !isNaN(val);
const isPositive = num => isNumber(num) && num > 0;

// Validate form with rules
const validateForm = (form, rules) => {
    const errors = {};
    let valid = true;
    for (const field in rules) {
        errors[field] = [];
        rules[field].forEach(fn => {
            if (!fn(form[field])) errors[field].push(fn.name);
        });
        if (errors[field].length > 0) valid = false;
    }
    return { valid, errors };
};

// Example usage
const rules = {
    email: [isRequired, isEmail],
    password: [isRequired, (p) => minLength(p, 8)]
};
console.log(validateForm({ email: "test@example.com", password: "12345678" }, rules));
console.log(validateForm({ email: "", password: "123" }, rules));

// ===================== Problem 3 =====================
// Products Sorting and Filtering

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// Sort by price
const sortByPriceAsc = data => [...data].sort((a,b) => a.price - b.price);
const sortByPriceDesc = data => [...data].sort((a,b) => b.price - a.price);

// Sort by multiple criteria: category then price
const sortByCategoryPrice = data => [...data].sort((a,b) => a.category.localeCompare(b.category) || a.price - b.price);

// Filter by category
const filterByCategory = (cat, data) => data.filter(p => p.category === cat);

// Filter low stock
const filterLowStock = (threshold, data) => data.filter(p => p.stock < threshold);

// Smart filter
const smartFilter = (data, criteria) => {
    return data
        .filter(p => (criteria.category ? p.category === criteria.category : true))
        .filter(p => (criteria.maxPrice !== undefined ? p.price <= criteria.maxPrice : true))
        .filter(p => (criteria.minStock !== undefined ? p.stock >= criteria.minStock : true))
        .sort((a,b) => (criteria.sortByPrice === "asc" ? a.price - b.price : criteria.sortByPrice === "desc" ? b.price - a.price : 0));
};

console.log(smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10}));

// ===================== Problem 4 =====================
// Utility Library

const utils = {
    debounce: (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    },
    throttle: (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    memoize: (func) => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (!cache[key]) cache[key] = func(...args);
            return cache[key];
        };
    },
    pipe: (...fns) => x => fns.reduce((v, fn) => fn(v), x),
    compose: (...fns) => x => fns.reduceRight((v, fn) => fn(v), x)
};

// Example usage
const fib = utils.memoize(n => n <= 1 ? n : fib(n-1)+fib(n-2));
console.log(fib(10)); // 55

const search = utils.debounce(q => console.log("Searching for:", q), 200);
search("Laptop");
search("Phone");

const scrollHandler = utils.throttle(() => console.log("Scroll event!"), 500);
scrollHandler();
scrollHandler();

const transform = utils.pipe(x => x+1, x => x*2, x => x*x);
console.log(transform(3)); // ((3+1)*2)^2 = 64

const transform2 = utils.compose(x => x+1, x => x*2, x => x*x);
console.log(transform2(3)); // ((3*3)^2)*2? Check order = ((3*3)*2)+1
