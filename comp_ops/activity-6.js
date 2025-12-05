/*
 * ACTIVITY 6: Comparison Operators - Integration Challenge
 * 
 * Problem 1: Building a Validation System
 * Create a comprehensive validation system using comparisons
 */

// Your task:
// Create a 'Validator' class/object with methods using comparison operators:
// 1. isEmail(email) - checks email format (must contain @ and .)
// 2. isAge(age) - checks if age is between 0 and 150
// 3. isScore(score) - checks if score is between 0 and 100
// 4. isStringLength(str, min, max) - checks string length range
// 5. isPositive(num) - checks if number > 0
// 6. isInRange(num, min, max) - checks if number is in range

// Challenge: Create a 'validateForm' function that:
// - Takes form data and validation rules
// - Uses all comparison methods
// - Returns detailed validation results
// Example:
// validateForm({
//   email: "test@example.com",
//   age: 25,
//   score: 85
// }, {
//   email: ["isEmail"],
//   age: ["isAge"],
//   score: ["isScore", "isInRange", [0, 100]]
// })

// ============================================================================
// Problem 2: Building a Search/Filter System
// Create a flexible filtering system
// ============================================================================

const products = [
    { name: "Laptop", price: 999, rating: 4.5, stock: 10, category: "Electronics" },
    { name: "Phone", price: 699, rating: 4.8, stock: 5, category: "Electronics" },
    { name: "Book", price: 15, rating: 4.2, stock: 50, category: "Education" },
    { name: "Chair", price: 150, rating: 4.0, stock: 20, category: "Furniture" }
];

// Your task:
// Create a 'filterProducts' function that:
// 1. Filters by price range (minPrice, maxPrice)
// 2. Filters by minimum rating
// 3. Filters by stock availability (inStock: true/false)
// 4. Filters by category
// 5. Combines multiple filters using logical operators

// Challenge: Create an advanced filter that:
// - Takes a filter object: { price: [min, max], rating: min, inStock: boolean, category: string }
// - Applies all matching filters
// - Uses comparison operators efficiently
// - Returns filtered and sorted results

// ============================================================================
// Problem 3: Building a Priority Queue
// Use comparisons to prioritize items
// ============================================================================

// Your task:
// Create a 'PriorityQueue' class that:
// 1. Stores items with priority (number, higher = more important)
// 2. addItem(item, priority) - adds item with priority
// 3. getHighestPriority() - returns item with highest priority
// 4. removeHighest() - removes and returns highest priority item
// 5. Uses comparison operators to maintain order

// Challenge: Enhance it to:
// - Support priority ties (use secondary comparison like timestamp)
// - Have methods: isEmpty(), size(), peek()
// - Handle edge cases (empty queue, single item, etc.)
// - Use efficient comparison-based sorting

// ============================================================================
// Problem 4: Complete Comparison Challenge
// Build a comprehensive comparison-based application
// ============================================================================

const students = [
    { name: "Alice", grades: [85, 90, 88], age: 20, attendance: 95 },
    { name: "Bob", grades: [92, 88, 90], age: 19, attendance: 98 },
    { name: "Charlie", grades: [78, 82, 80], age: 21, attendance: 87 },
    { name: "Diana", grades: [95, 92, 94], age: 20, attendance: 100 }
];

// Your task:
// Create a comprehensive 'StudentAnalyzer' system with:

// 1. calculateAverage(grades) - calculates average grade
// 2. isPassing(student, passingGrade) - checks if average >= passingGrade
// 3. hasGoodAttendance(student, threshold) - checks attendance >= threshold
// 4. compareStudents(a, b) - compares by average grade
// 5. getTopPerformers(students, count) - returns top N students
// 6. getStudentsByCriteria(students, criteria) - filters by multiple criteria

// Challenge: Create a 'generateReport' function that:
// - Analyzes all students
// - Uses multiple comparison operations
// - Returns a report with:
//   - Students passing (grade >= 70 AND attendance >= 90)
//   - Students at risk (grade < 70 OR attendance < 90)
//   - Top 3 performers
//   - Average class performance
//   - Statistics by age group
// - All using comparison and logical operators effectively

// Problem 1: Validator

class Validator {
    static isEmail(email) {
        return typeof email === "string" && email.includes("@") && email.includes(".");
    }

    static isAge(age) {
        return typeof age === "number" && age >= 0 && age <= 150;
    }

    static isScore(score) {
        return typeof score === "number" && score >= 0 && score <= 100;
    }

    static isStringLength(str, min, max) {
        return typeof str === "string" && str.length >= min && str.length <= max;
    }

    static isPositive(num) {
        return typeof num === "number" && num > 0;
    }

    static isInRange(num, min, max) {
        return typeof num === "number" && num >= min && num <= max;
    }
}

// Challenge: validateForm
function validateForm(formData, rules) {
    const results = {};
    for (const field in rules) {
        results[field] = [];
        for (const rule of rules[field]) {
            if (Array.isArray(rule)) {
                const [ruleName, ...args] = rule;
                results[field].push(Validator[ruleName](formData[field], ...args));
            } else {
                results[field].push(Validator[rule](formData[field]));
            }
        }
    }
    return results;
}

// Example usage
console.log(validateForm(
    { email: "test@example.com", age: 25, score: 85 },
    {
        email: ["isEmail"],
        age: ["isAge"],
        score: ["isScore", ["isInRange", 0, 100]]
    }
));

// Problem 2: Filter Products

function filterProducts(products, filters) {
    return products.filter(p => {
        if (filters.price) {
            if (p.price < filters.price[0] || p.price > filters.price[1]) return false;
        }
        if (filters.rating && p.rating < filters.rating) return false;
        if (filters.inStock !== undefined && (filters.inStock && p.stock <= 0)) return false;
        if (filters.category && p.category !== filters.category) return false;
        return true;
    });
}

// Example usage
console.log(filterProducts(products, { price: [100, 1000], rating: 4.5, inStock: true }));

// Problem 3: Priority Queue

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    addItem(item, priority) {
        const timestamp = Date.now();
        this.items.push({ item, priority, timestamp });
        this.items.sort((a, b) => b.priority - a.priority || a.timestamp - b.timestamp);
    }

    getHighestPriority() {
        return this.items.length ? this.items[0].item : null;
    }

    removeHighest() {
        return this.items.length ? this.items.shift().item : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.getHighestPriority();
    }
}

// Example usage
const pq = new PriorityQueue();
pq.addItem("Task1", 2);
pq.addItem("Task2", 5);
pq.addItem("Task3", 5);
console.log(pq.peek()); // Task2 (higher priority, earlier timestamp)

// Problem 4: Student Analyzer

class StudentAnalyzer {
    static calculateAverage(grades) {
        const sum = grades.reduce((a, b) => a + b, 0);
        return sum / grades.length;
    }

    static isPassing(student, passingGrade = 70) {
        return this.calculateAverage(student.grades) >= passingGrade;
    }

    static hasGoodAttendance(student, threshold = 90) {
        return student.attendance >= threshold;
    }

    static compareStudents(a, b) {
        return this.calculateAverage(b.grades) - this.calculateAverage(a.grades);
    }

    static getTopPerformers(students, count = 3) {
        return [...students].sort(this.compareStudents.bind(this)).slice(0, count);
    }

    static getStudentsByCriteria(students, criteria) {
        return students.filter(student => {
            for (const key in criteria) {
                if (key === "minAverage" && this.calculateAverage(student.grades) < criteria[key]) return false;
                if (key === "minAttendance" && student.attendance < criteria[key]) return false;
                if (key === "maxAge" && student.age > criteria[key]) return false;
            }
            return true;
        });
    }

    static generateReport(students) {
        const passing = [];
        const atRisk = [];
        let totalAverage = 0;
        const ageGroups = {};

        students.forEach(student => {
            const avg = this.calculateAverage(student.grades);
            totalAverage += avg;

            const pass = avg >= 70 && student.attendance >= 90;
            if (pass) passing.push(student);
            else atRisk.push(student);

            if (!ageGroups[student.age]) ageGroups[student.age] = [];
            ageGroups[student.age].push(student);
        });

        const top3 = this.getTopPerformers(students, 3);
        const classAverage = totalAverage / students.length;

        return {
            passing,
            atRisk,
            top3,
            classAverage,
            ageGroups
        };
    }
}

// Example usage
console.log(StudentAnalyzer.generateReport(students));
