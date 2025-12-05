/*
 * ACTIVITY 5: Recursion
 * 
 * Problem 1: Basic Recursion
 * Understand and implement recursive functions
 */

// Your task:
// 1. Create a recursive function 'factorial' that:
//    - Takes a number n
//    - Returns n! (n * (n-1) * ... * 1)
//    - Base case: factorial(0) = 1
//
// 2. Create a recursive function 'fibonacci' that:
//    - Takes position n
//    - Returns nth Fibonacci number
//    - Base cases: fibonacci(0) = 0, fibonacci(1) = 1
//
// 3. Challenge: Create a recursive function 'power' that:
//    - Takes base and exponent
//    - Returns base^exponent
//    - Base case: power(x, 0) = 1

// ============================================================================
// Problem 2: Recursion with Arrays
// Use recursion to process arrays
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Create recursive function 'sumArray' that:
//    - Takes an array of numbers
//    - Returns sum of all elements
//    - Base case: empty array returns 0
//
// 2. Create recursive function 'findMax' that:
//    - Takes an array of numbers
//    - Returns maximum value
//    - Base case: single element returns that element
//
// 3. Challenge: Create recursive function 'reverseArray' that:
//    - Takes an array
//    - Returns reversed array
//    - Base case: empty or single element array

// ============================================================================
// Problem 3: Recursive Problem Solving
// Solve problems using recursion
// ============================================================================

// Your task:
// 1. Create recursive function 'countDown' that:
//    - Takes a number
//    - Logs countdown from that number to 0
//
// 2. Create recursive function 'isPalindrome' that:
//    - Takes a string
//    - Returns true if palindrome, false otherwise
//    - Base case: empty or single character
//
// 3. Challenge: Create recursive function 'flattenArray' that:
//    - Takes nested array
//    - Returns flattened array
//    - Example: flattenArray([1, [2, 3], [4, [5]]]) // [1, 2, 3, 4, 5]

// ============================================================================
// Problem 4: Advanced Recursion
// Handle complex recursive problems
// ============================================================================

// Your task:
// 1. Create recursive function 'binarySearch' that:
//    - Takes sorted array, target, start index, end index
//    - Returns index of target or -1
//    - Base case: element found or search space exhausted
//
// 2. Create recursive function 'permutations' that:
//    - Takes a string
//    - Returns array of all permutations
//    - Base case: single character
//
// 3. Challenge: Create recursive function 'pathFinder' that:
//    - Takes a 2D array (maze) and start/end positions
//    - Returns true if path exists, false otherwise
//    - Use recursion to explore paths

// Problem 1: Basic Recursion

const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
};

// Problem 2: Recursion with Arrays

const sumArray = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
};

const findMax = (arr) => {
    if (arr.length === 1) return arr[0];
    const maxRest = findMax(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
};

const reverseArray = (arr) => {
    if (arr.length <= 1) return arr;
    return reverseArray(arr.slice(1)).concat(arr[0]);
};

// Problem 3: Recursive Problem Solving

const countDown = (n) => {
    if (n < 0) return;
    console.log(n);
    countDown(n - 1);
};

const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
};

const flattenArray = (arr) => {
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    return Array.isArray(first)
        ? [...flattenArray(first), ...flattenArray(rest)]
        : [first, ...flattenArray(rest)];
};

// Problem 4: Advanced Recursion

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
};

const permutations = (str) => {
    if (str.length === 1) return [str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const perms = permutations(remaining);
        perms.forEach((p) => result.push(char + p));
    }
    return result;
};

const pathFinder = (maze, x, y, endX, endY, visited = new Set()) => {
    const key = `${x},${y}`;
    if (x === endX && y === endY) return true;
    if (
        x < 0 || y < 0 ||
        x >= maze.length || y >= maze[0].length ||
        maze[x][y] === 1 ||
        visited.has(key)
    ) return false;

    visited.add(key);

    return (
        pathFinder(maze, x + 1, y, endX, endY, visited) ||
        pathFinder(maze, x - 1, y, endX, endY, visited) ||
        pathFinder(maze, x, y + 1, endX, endY, visited) ||
        pathFinder(maze, x, y - 1, endX, endY, visited)
    );
};