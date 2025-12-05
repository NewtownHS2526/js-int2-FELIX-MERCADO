/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// Your task:
// 1. Create an arrow function 'greet' with default name parameter ("Guest")
// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0) parameters
// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
// 4. Test each function with and without parameters

// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments
// ============================================================================

// Your task:
// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
//    Example: sumAll(1, 2, 3, 4, 5) should return 15
//
// 2. Create an arrow function 'findMax' that finds the maximum value from any number of arguments
//
// 3. Create an arrow function 'combineStrings' that combines any number of strings with a separator
//    Example: combineStrings("-", "a", "b", "c") should return "a-b-c"
//
// 4. Challenge: Create a function 'createLogger' that returns an arrow function accepting 
//    any number of arguments and logs them with a timestamp prefix

// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions
// ============================================================================

// Your task:
// 1. Create a curried arrow function 'add' where add(5)(10) returns 15
// 2. Create a curried arrow function 'multiply' where multiply(2)(3)(4) returns 24
// 3. Challenge: Create a generic 'curry' function that takes any function and curries it
//    Example: const curriedAdd = curry((a, b, c) => a + b + c);
//             curriedAdd(1)(2)(3) should return 6

// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that returns an object with arrow function methods:
//    - increment() - increases counter by 1
//    - decrement() - decreases counter by 1
//    - getValue() - returns current counter value
//    - reset() - resets counter to 0
//
// 2. Create a function 'createBankAccount' with arrow function methods:
//    - deposit(amount) - adds to balance
//    - withdraw(amount) - subtracts from balance (can't go below 0)
//    - getBalance() - returns current balance
//    The balance should be private and only accessible through these methods
//
// 3. Challenge: Create a 'createGameScore' that tracks multiple players' scores using closures
//    Methods: addScore(player, points), getScore(player), getLeader()

/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 */

// Problem 1: Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Felix"));

const calculatePrice = (price, tax = 0.1, discount = 0) => price * (1 + tax) - discount;
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2, 10));

const formatDate = (date = new Date(), format = "YYYY-MM-DD") => {
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return format === "YYYY-MM-DD" ? `${yyyy}-${mm}-${dd}` : `${mm}/${dd}/${yyyy}`;
};
console.log(formatDate());
console.log(formatDate("2025-12-04", "MM/DD/YYYY"));

// Problem 2: Rest Parameters
const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
console.log(sumAll(1,2,3,4,5));

const findMax = (...nums) => Math.max(...nums);
console.log(findMax(10,5,20,8));

const combineStrings = (sep, ...strings) => strings.join(sep);
console.log(combineStrings("-", "a","b","c"));

const createLogger = () => (...args) => console.log(`[${new Date().toISOString()}]`, ...args);
const logger = createLogger();
logger("Hello","world");

// Problem 3: Currying
const add = a => b => a + b;
console.log(add(5)(10));

const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4));

const curry = fn => {
    const arity = fn.length;
    const curried = (...args) => args.length >= arity ? fn(...args) : (...more) => curried(...args, ...more);
    return curried;
};
const curriedAdd = curry((a,b,c) => a+b+c);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1,2)(3));

// Problem 4: Closures
const createCounter = () => {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => { count = 0; return count; }
    };
};
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());
console.log(counter.reset());

const createBankAccount = () => {
    let balance = 0;
    return {
        deposit: amount => { balance += amount; return balance; },
        withdraw: amount => { balance = Math.max(0, balance - amount); return balance; },
        getBalance: () => balance
    };
};
const account = createBankAccount();
console.log(account.deposit(100));
console.log(account.withdraw(30));
console.log(account.withdraw(100));
console.log(account.getBalance());

const createGameScore = () => {
    const scores = {};
    return {
        addScore: (player, points) => { scores[player] = (scores[player] || 0) + points; return scores[player]; },
        getScore: player => scores[player] || 0,
        getLeader: () => {
            let leader = null, max = -Infinity;
            for (let player in scores) {
                if (scores[player] > max) { max = scores[player]; leader = player; }
            }
            return leader;
        }
    };
};
const game = createGameScore();
game.addScore("Alice",10);
game.addScore("Bob",15);
game.addScore("Alice",5);
console.log(game.getScore("Alice"));
console.log(game.getScore("Bob"));
console.log(game.getLeader());
