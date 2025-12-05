/*
 * ACTIVITY 6: Data Types - Integration Challenge
 * 
 * Problem 1: Type-Safe Data Processing
 * Build a robust data processing system
 */

// const mixedData = [
//     42,
//     "hello",
//     true,
//     null,
//     undefined,
//     [1, 2, 3],
//     { name: "Alice" },
//     NaN,
//     Infinity
// ];

// Your task:
// Create a function 'categorizeData' that:
// 1. Takes an array of mixed data types
// 2. Returns object with categories:
//    {
//      numbers: [],
//      strings: [],
//      booleans: [],
//      arrays: [],
//      objects: [],
//      nulls: [],
//      undefined: [],
//      invalid: []  // NaN, Infinity
//    }
// 3. Properly identifies each type
// 4. Handles all edge cases

// Challenge: Enhance to also count occurrences and provide statistics

// ============================================================================
// Problem 2: Data Type Converter Utility
// Create a comprehensive type conversion utility
// ============================================================================

// Your task:
// Create a 'TypeConverter' object with methods:
// 1. toNumber(value) - converts to number, returns null if invalid
// 2. toString(value) - converts to string
// 3. toBoolean(value) - converts to boolean (truthy/falsy)
// 4. toArray(value) - converts to array (if possible)
// 5. toObject(value) - converts to object (if possible)

// Challenge: Add method 'smartConvert(value, targetType)' that:
// - Automatically determines best conversion
// - Handles nested structures
// - Returns detailed conversion result with success/error info

// ============================================================================
// Problem 3: Data Validation System
// Build a comprehensive validation system
// ============================================================================

// const formData = {
//    name: "Alice",
//    age: "25",
//    email: "alice@example.com",
//    score: "95.5",
//    isActive: "true"
//};

// Your task:
// Create a function 'validateAndConvert' that:
// 1. Takes form data object (all values are strings)
// 2. Validates and converts each field:
//    - name: string, required, min 2 chars
//    - age: number, 0-150
//    - email: valid email format
//    - score: number, 0-100
//    - isActive: boolean
// 3. Returns: {valid: true/false, data: converted object, errors: []}

// Challenge: Make it extensible with validation rules object

// ============================================================================
// Problem 4: Complete Data Type System
// Build a comprehensive data management system
// ============================================================================

// const studentData = [
//    { name: "Alice", age: "20", grades: [85, 90, 88], active: "true" },
//    { name: "Bob", age: "21", grades: [92, 88], active: "false" },
//    { name: "Charlie", age: "nineteen", grades: "invalid", active: "yes" }
// ];

// Your task:
// Create a complete 'DataProcessor' system:

// 1. 'cleanData' function:
//    - Takes raw student data
//    - Validates and converts all fields
//    - Removes invalid entries
//    - Returns cleaned array

// 2. 'analyzeData' function:
//    - Takes cleaned student data
//    - Calculates statistics:
//      - Average age (number)
//      - Average grade per student (number)
//      - Active students count (number)
//      - Grade distribution (object)

// 3. 'generateReport' function:
//    - Takes analyzed data
//    - Formats as readable report string
//    - Includes type information
//    - Handles missing/invalid data gracefully

// Challenge: Create complete system that:
// - Handles all data types correctly
// - Provides type-safe operations
// - Generates detailed error reports
// - Works with various input formats
// - Validates and converts throughout the pipeline

// ACTIVITY 6: Data Types - Integration Challenge

// -------------------------
// Problem 1: categorizeData
// -------------------------
function categorizeData(arr) {
    const categories = {
        numbers: [],
        strings: [],
        booleans: [],
        arrays: [],
        objects: [],
        nulls: [],
        undefined: [],
        invalid: [] // NaN, Infinity
    };

    for (const item of arr) {
        if (item === null) {
            categories.nulls.push(item);
            continue;
        }
        if (typeof item === 'undefined') {
            categories.undefined.push(item);
            continue;
        }
        if (Array.isArray(item)) {
            categories.arrays.push(item);
            continue;
        }
        if (typeof item === 'number') {
            if (Number.isNaN(item) || !Number.isFinite(item)) {
                categories.invalid.push(item);
            } else {
                categories.numbers.push(item);
            }
            continue;
        }
        if (typeof item === 'string') {
            categories.strings.push(item);
            continue;
        }
        if (typeof item === 'boolean') {
            categories.booleans.push(item);
            continue;
        }
        if (typeof item === 'object') {
            categories.objects.push(item);
            continue;
        }
        // fallback
        categories.invalid.push(item);
    }

    // Statistics
    const stats = {
        total: arr.length,
        counts: {
            numbers: categories.numbers.length,
            strings: categories.strings.length,
            booleans: categories.booleans.length,
            arrays: categories.arrays.length,
            objects: categories.objects.length,
            nulls: categories.nulls.length,
            undefined: categories.undefined.length,
            invalid: categories.invalid.length
        }
    };

    return { categories, stats };
}

// -------------------------
// Problem 2: TypeConverter
// -------------------------
const TypeConverter = {
    toNumber(value) {
        if (typeof value === 'number') {
            if (!Number.isFinite(value)) return null;
            return value;
        }
        if (value === null || typeof value === 'undefined') return null;
        if (typeof value === 'boolean') return value ? 1 : 0;
        if (typeof value === 'string') {
            const n = Number(value.trim());
            return Number.isFinite(n) ? n : null;
        }
        if (Array.isArray(value)) return null;
        if (typeof value === 'object') return null;
        return null;
    },

    toString(value) {
        if (typeof value === 'string') return value;
        if (value === null) return 'null';
        if (typeof value === 'undefined') return 'undefined';
        try {
            return JSON.stringify(value);
        } catch (e) {
            return String(value);
        }
    },

    toBoolean(value) {
        if (typeof value === 'boolean') return value;
        if (typeof value === 'number') return value !== 0 && !Number.isNaN(value);
        if (typeof value === 'string') {
            const v = value.trim().toLowerCase();
            if (v === 'true' || v === '1' || v === 'yes' || v === 'y') return true;
            if (v === 'false' || v === '0' || v === 'no' || v === 'n') return false;
            return v.length > 0; // non-empty strings truthy
        }
        return Boolean(value);
    },

    toArray(value) {
        if (Array.isArray(value)) return value.slice();
        if (value == null) return null;
        if (typeof value === 'string') return value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        if (typeof value === 'object') return Object.values(value);
        return [value];
    },

    toObject(value) {
        if (value == null) return null;
        if (typeof value === 'object' && !Array.isArray(value)) return { ...value };
        if (typeof value === 'string') {
            try {
                const parsed = JSON.parse(value);
                return typeof parsed === 'object' ? parsed : null;
            } catch (e) {
                return null;
            }
        }
        if (Array.isArray(value)) {
            // convert array of pairs or array of objects into object if possible
            const obj = {};
            for (const item of value) {
                if (Array.isArray(item) && item.length >= 2) {
                    obj[item[0]] = item[1];
                }
            }
            return Object.keys(obj).length ? obj : null;
        }
        return null;
    },

    smartConvert(value, targetType) {
        const result = { success: false, value: null, error: null, originalType: typeof value };
        try {
            switch (targetType) {
                case 'number':
                    result.value = this.toNumber(value);
                    result.success = result.value !== null;
                    if (!result.success) result.error = 'Cannot convert to number';
                    break;
                case 'string':
                    result.value = this.toString(value);
                    result.success = true;
                    break;
                case 'boolean':
                    result.value = this.toBoolean(value);
                    result.success = true;
                    break;
                case 'array':
                    result.value = this.toArray(value);
                    result.success = result.value !== null;
                    if (!result.success) result.error = 'Cannot convert to array';
                    break;
                case 'object':
                    result.value = this.toObject(value);
                    result.success = result.value !== null;
                    if (!result.success) result.error = 'Cannot convert to object';
                    break;
                default:
                    result.error = `Unknown target type: ${targetType}`;
            }
        } catch (e) {
            result.error = e.message;
        }
        return result;
    }
};

// -------------------------
// Problem 3: validateAndConvert
// -------------------------
function validateAndConvert(form, rules = null) {
    // default rules if not provided
    const defaultRules = {
        name: {
            required: true,
            convert: v => (typeof v === 'string' ? v.trim() : v),
            validate: v => typeof v === 'string' && v.length >= 2,
            message: 'Name must be at least 2 characters'
        },
        age: {
            required: true,
            convert: v => TypeConverter.toNumber(v),
            validate: v => typeof v === 'number' && v >= 0 && v <= 150,
            message: 'Age must be a number between 0 and 150'
        },
        email: {
            required: true,
            convert: v => (typeof v === 'string' ? v.trim() : v),
            validate: v => typeof v === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),
            message: 'Invalid email format'
        },
        score: {
            required: true,
            convert: v => TypeConverter.toNumber(v),
            validate: v => typeof v === 'number' && v >= 0 && v <= 100,
            message: 'Score must be a number between 0 and 100'
        },
        isActive: {
            required: false,
            convert: v => TypeConverter.toBoolean(v),
            validate: v => typeof v === 'boolean',
            message: 'isActive must be boolean'
        }
    };

    const appliedRules = rules || defaultRules;
    const errors = [];
    const data = {};

    for (const key of Object.keys(appliedRules)) {
        const rule = appliedRules[key];
        const raw = form[key];

        if ((raw === undefined || raw === null || raw === '') && rule.required) {
            errors.push({ field: key, message: `${key} is required` });
            continue;
        }

        const converted = rule.convert ? rule.convert(raw) : raw;
        if (!rule.validate(converted)) {
            errors.push({ field: key, message: rule.message || `${key} is invalid` });
            continue;
        }

        data[key] = converted;
    }

    // add any extra fields unchanged
    for (const k of Object.keys(form)) {
        if (!(k in data) && !(k in appliedRules)) data[k] = form[k];
    }

    return { valid: errors.length === 0, data: errors.length ? null : data, errors };
}

// -------------------------
// Problem 4: DataProcessor
// -------------------------
const DataProcessor = {
    cleanData(rawStudents) {
        const cleaned = [];
        const errors = [];

        for (let i = 0; i < rawStudents.length; i++) {
            const s = rawStudents[i];
            const rules = {
                name: {
                    required: true,
                    convert: v => (typeof v === 'string' ? v.trim() : v),
                    validate: v => typeof v === 'string' && v.length >= 2,
                    message: 'Name must be at least 2 characters'
                },
                age: {
                    required: true,
                    convert: v => TypeConverter.toNumber(v),
                    validate: v => typeof v === 'number' && v >= 0 && v <= 150,
                    message: 'Age must be numeric 0-150'
                },
                grades: {
                    required: true,
                    convert: v => Array.isArray(v) ? v.map(n => TypeConverter.toNumber(n)).filter(n => n !== null) : null,
                    validate: v => Array.isArray(v) && v.length > 0 && v.every(n => typeof n === 'number' && n >= 0 && n <= 100),
                    message: 'Grades must be an array of numbers 0-100'
                },
                active: {
                    required: true,
                    convert: v => TypeConverter.toBoolean(v),
                    validate: v => typeof v === 'boolean',
                    message: 'Active must be boolean'
                }
            };

            const { valid, data, errors: vs } = validateAndConvert(s, rules);
            if (!valid) {
                errors.push({ index: i, errors: vs });
            } else {
                cleaned.push({ name: data.name, age: data.age, grades: data.grades, active: data.active });
            }
        }

        return { cleaned, errors };
    },

    analyzeData(cleanedStudents) {
        if (!Array.isArray(cleanedStudents)) throw new Error('cleanedStudents must be an array');

        const totalStudents = cleanedStudents.length;
        const avgAge = totalStudents === 0 ? 0 : (cleanedStudents.reduce((s, p) => s + p.age, 0) / totalStudents);

        const studentsWithAvgGrade = cleanedStudents.map(s => {
            const avgGrade = s.grades.length ? s.grades.reduce((a, b) => a + b, 0) / s.grades.length : 0;
            return { ...s, averageGrade: avgGrade };
        });

        const avgGradePerStudent = studentsWithAvgGrade.map(s => ({ name: s.name, average: s.averageGrade }));

        const activeCount = cleanedStudents.filter(s => s.active === true).length;

        // grade distribution: buckets 0-59,60-69,70-79,80-89,90-100
        const distribution = { '0-59': 0, '60-69': 0, '70-79': 0, '80-89': 0, '90-100': 0 };
        for (const s of studentsWithAvgGrade) {
            const g = s.averageGrade;
            if (g < 60) distribution['0-59']++;
            else if (g < 70) distribution['60-69']++;
            else if (g < 80) distribution['70-79']++;
            else if (g < 90) distribution['80-89']++;
            else distribution['90-100']++;
        }

        return {
            totalStudents,
            averageAge: Number(avgAge.toFixed(2)),
            studentAverages: avgGradePerStudent,
            activeCount,
            gradeDistribution: distribution
        };
    },

    generateReport(analysis) {
        const lines = [];
        lines.push('Student Data Report');
        lines.push('===================');
        lines.push(`Total students: ${analysis.totalStudents}`);
        lines.push(`Average age: ${analysis.averageAge}`);
        lines.push(`Active students: ${analysis.activeCount}`);
        lines.push('Average grade per student:');
        for (const s of analysis.studentAverages) {
            lines.push(` - ${s.name}: ${Number(s.average.toFixed(2))}`);
        }
        lines.push('Grade distribution:');
        for (const k of Object.keys(analysis.gradeDistribution)) {
            lines.push(` - ${k}: ${analysis.gradeDistribution[k]}`);
        }
        lines.push('');
        lines.push('Type information:');
        lines.push(` - averageAge: ${typeof analysis.averageAge}`);
        lines.push(` - activeCount: ${typeof analysis.activeCount}`);

        return lines.join('\n');
    }
};

// -------------------------
// Example usage & tests
// -------------------------
const mixedData = [
    42,
    'hello',
    true,
    null,
    undefined,
    [1, 2, 3],
    { name: 'Alice' },
    NaN,
    Infinity
];

// categorizeData
const categorized = categorizeData(mixedData);
console.log('Categorized:', categorized.stats.counts);

// TypeConverter.smartConvert
console.log(TypeConverter.smartConvert(' 25 ', 'number'));
console.log(TypeConverter.smartConvert('yes', 'boolean'));
console.log(TypeConverter.smartConvert('[1,2,3]', 'array'));

// validateAndConvert
const formData = {
    name: 'Alice',
    age: '25',
    email: 'alice@example.com',
    score: '95.5',
    isActive: 'true'
};
console.log('Form validation:', validateAndConvert(formData));

// DataProcessor pipeline
const studentData = [
    { name: 'Alice', age: '20', grades: [85, 90, 88], active: 'true' },
    { name: 'Bob', age: '21', grades: [92, 88], active: 'false' },
    { name: 'Charlie', age: 'nineteen', grades: 'invalid', active: 'yes' }
];

const { cleaned, errors } = DataProcessor.cleanData(studentData);
console.log('Cleaned:', cleaned);
console.log('Errors:', errors);

const analysis = DataProcessor.analyzeData(cleaned);
console.log('Analysis:', analysis);

console.log('\nReport:\n' + DataProcessor.generateReport(analysis));

// Export for node or test environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categorizeData, TypeConverter, validateAndConvert, DataProcessor };
}
