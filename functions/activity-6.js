/*
 * ACTIVITY 6: Functions - Integration Challenge
 * 
 * Problem 1: Building a Function Library
 * Create a collection of utility functions
 */

// Your task:
// Create a 'MathUtils' object with methods:
// 1. add(...numbers) - sums all arguments
// 2. multiply(...numbers) - multiplies all arguments
// 3. average(...numbers) - calculates average
// 4. range(min, max) - generates array of numbers from min to max
// 5. random(min, max) - generates random number in range

// Challenge: Add methods with error handling and validation

// ============================================================================
// Problem 2: Building a Function Composition System
// Create a system for composing and chaining functions
// ============================================================================

// Your task:
// 1. Create a 'pipe' function that:
//    - Takes multiple functions
//    - Returns a function that applies them left-to-right
//    Example: pipe(addOne, double, square)(5)
//
// 2. Create a 'compose' function that:
//    - Takes multiple functions
//    - Returns a function that applies them right-to-left
//
// 3. Challenge: Create a 'chain' function that:
//    - Takes an initial value and multiple functions
//    - Applies functions sequentially
//    - Each function receives result of previous

// ============================================================================
// Problem 3: Building a Function Decorator System
// Create decorators to enhance function behavior
// ============================================================================

// Your task:
// 1. Create a 'memoize' function that:
//    - Takes a function
//    - Returns memoized version (caches results)
//    - Useful for expensive calculations
//
// 2. Create a 'debounce' function that:
//    - Takes a function and delay
//    - Returns debounced version (delays execution)
//
// 3. Create a 'throttle' function that:
//    - Takes a function and limit
//    - Returns throttled version (limits execution rate)
//
// 4. Challenge: Create a 'retry' function that:
//    - Takes a function and max retries
//    - Retries on failure
//    - Returns promise-like result

// ============================================================================
// Problem 4: Complete Function-Based Application
// Build a comprehensive system using all function concepts
// ============================================================================

const inventory = [
    { id: 1, name: "Laptop", price: 999, stock: 10, category: "Electronics" },
    { id: 2, name: "Phone", price: 699, stock: 5, category: "Electronics" },
    { id: 3, name: "Book", price: 15, stock: 50, category: "Education" }
];

// Your task:
// Create a complete 'InventoryManager' system:

// 1. Query functions (using higher-order functions):
//    - findByCategory(category)
//    - filterByPrice(min, max)
//    - filterByStock(minStock)
//    - searchByName(name)

// 2. Transformation functions:
//    - applyDiscount(percent)
//    - addTax(taxRate)
//    - formatCurrency(currency)

// 3. Aggregation functions:
//    - totalValue()
//    - averagePrice()
//    - stockByCategory()

// 4. Operation functions (using closures):
//    - createUpdateStock(itemId)
//    - createPriceAdjuster(multiplier)

// Challenge: Create a complete 'processOrder' function that:
// - Takes order object
// - Validates items (using validator functions)
// - Calculates totals (using composition)
// - Applies discounts (using decorators)
// - Updates inventory (using closure-based updaters)
// - Returns detailed order summary
// - Uses all function concepts: closures, HOFs, composition, recursion where needed

// MathUtils Object
const MathUtils = {
    add: (...numbers) => numbers.reduce((a, b) => a + b, 0),
    multiply: (...numbers) => numbers.reduce((a, b) => a * b, 1),
    average: (...numbers) => numbers.length ? MathUtils.add(...numbers) / numbers.length : 0,
    range: (min, max) => {
        if (min > max) throw new Error("min cannot be greater than max");
        return Array.from({ length: max - min + 1 }, (_, i) => i + min);
    },
    random: (min, max) => {
        if (min > max) throw new Error("min cannot be greater than max");
        return Math.random() * (max - min) + min;
    }
};

// Function composition system
const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);
const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);
const chain = (initial, ...fns) => fns.reduce((v, fn) => fn(v), initial);

// Decorator system
const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

const throttle = (fn, limit) => {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
};

const retry = (fn, maxRetries = 3) => async (...args) => {
    let attempts = 0;
    while (attempts <= maxRetries) {
        try {
            return await fn(...args);
        } catch (err) {
            if (attempts === maxRetries) throw err;
            attempts++;
        }
    }
};

// InventoryManager system
const InventoryManager = (inventory) => ({
    // Query functions
    findByCategory: (category) => inventory.filter((item) => item.category === category),
    filterByPrice: (min, max) => inventory.filter((item) => item.price >= min && item.price <= max),
    filterByStock: (minStock) => inventory.filter((item) => item.stock >= minStock),
    searchByName: (name) => inventory.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())),

    // Transformation functions
    applyDiscount: (percent) => inventory.map((item) => ({ ...item, price: item.price * (1 - percent / 100) })),
    addTax: (rate) => inventory.map((item) => ({ ...item, price: item.price * (1 + rate / 100) })),
    formatCurrency: (currency) => inventory.map((item) => ({ ...item, price: `${currency}${item.price.toFixed(2)}` })),

    // Aggregation functions
    totalValue: () => inventory.reduce((sum, item) => sum + item.price * item.stock, 0),
    averagePrice: () => inventory.reduce((sum, item) => sum + item.price, 0) / inventory.length,
    stockByCategory: () => inventory.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.stock;
        return acc;
    }, {}),

    // Operation functions using closures
    createUpdateStock: (itemId) => (amount) => {
        const item = inventory.find((i) => i.id === itemId);
        if (item) item.stock += amount;
        return item;
    },
    createPriceAdjuster: (multiplier) => () => inventory.forEach((item) => (item.price *= multiplier)),

    // Full order processing system
    processOrder: function(order) {
        // validate items
        const isValidItem = (id) => inventory.some((item) => item.id === id);
        order.items.forEach((entry) => {
            if (!isValidItem(entry.id)) throw new Error(`Invalid item ID: ${entry.id}`);
        });

        // calculate totals using composition
        const calculateItemTotal = (item) => item.price * item.quantity;
        const total = order.items.reduce((sum, entry) => {
            const item = inventory.find((i) => i.id === entry.id);
            return sum + calculateItemTotal({ price: item.price, quantity: entry.quantity });
        }, 0);

        // apply discount using decorator
        const discountFn = memoize((t, d) => t * (1 - d / 100));
        const finalTotal = discountFn(total, order.discount || 0);

        // update inventory
        order.items.forEach((entry) => {
            const updateStock = this.createUpdateStock(entry.id);
            updateStock(-entry.quantity);
        });

        return {
            originalTotal: total,
            finalTotal,
            items: order.items,
            remainingInventory: inventory
        };
    }
});
