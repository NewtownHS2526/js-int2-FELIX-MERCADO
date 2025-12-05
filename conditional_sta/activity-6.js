/*
 * ACTIVITY 6: Conditional Statements - Integration Challenge
 * 
 * Problem 1: Building a Decision Tree
 * Create a complex decision-making system
 */

const user = {
    age: 25,
    isMember: true,
    purchaseAmount: 150,
    hasCoupon: true
};

// Your task:
// Create a function 'calculateFinalPrice' that:
// 1. Base price: purchaseAmount
// 2. Age discount: 10% if age >= 65
// 3. Member discount: 5% if isMember
// 4. Coupon discount: 15% if hasCoupon
// 5. Large purchase discount: 10% if purchaseAmount > 200
// 6. Rules:
//    - Only one discount can apply (highest one)
//    - Except: member discount stacks with one other discount
//    - Minimum price: $10
//
// Challenge: Return detailed breakdown: {original, discounts, final, savings}

// ============================================================================
// Problem 2: State Machine
// Implement a simple state machine using conditionals
// ============================================================================

// Your task:
// Create a 'TrafficLight' state machine:
// 1. States: "red", "yellow", "green"
// 2. Function 'changeState(currentState)' that:
//    - red -> green
//    - green -> yellow
//    - yellow -> red
//    - Returns new state
//
// 3. Function 'canGo(currentState)' that returns true for "green"
//
// 4. Challenge: Create a 'GameState' machine with states:
//    - "menu", "playing", "paused", "gameOver"
//    - Implement transitions between states
//    - Validate that transitions are legal
//    - Use switch statements for state handling

// ============================================================================
// Problem 3: Conditional-Based Routing
// Create a routing system using conditionals
// ============================================================================

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/products": "Products"
};

// Your task:
// 1. Create function 'getPage(path)' that:
//    - Takes a path string
//    - Returns page name if route exists
//    - Returns "404 - Not Found" if route doesn't exist
//
// 2. Enhance to handle query parameters:
//    - "/products?category=electronics"
//    - Extract and validate query parameters
//
// 3. Challenge: Create a 'Router' that:
//    - Handles multiple routes with conditionals
//    - Supports route parameters: "/user/:id"
//    - Supports protected routes (requires authentication)
//    - Returns appropriate response or error

// ============================================================================
// Problem 4: Complete Conditional System
// Build a comprehensive system using all conditional techniques
// ============================================================================

const library = {
    books: [
        { title: "Book A", available: true, genre: "Fiction", rating: 4.5 },
        { title: "Book B", available: false, genre: "Non-Fiction", rating: 4.0 },
        { title: "Book C", available: true, genre: "Fiction", rating: 4.8 },
        { title: "Book D", available: true, genre: "Science", rating: 3.5 }
    ],
    members: [
        { id: 1, name: "Alice", type: "student", booksBorrowed: 2 },
        { id: 2, name: "Bob", type: "faculty", booksBorrowed: 5 }
    ]
};

// Your task:
// Create a complete 'LibrarySystem' with functions using conditionals:

// 1. 'findAvailableBooks(genre, minRating)'
//    - Filters books by availability
//    - Optional genre filter
//    - Optional minimum rating filter
//    - Returns array of matching books

// 2. 'canBorrowBook(memberId, bookTitle)'
//    - Checks if member exists
//    - Checks if book exists and is available
//    - Checks borrowing limits: students (3 max), faculty (10 max)
//    - Returns {canBorrow: true/false, reason: string}

// 3. 'recommendBooks(memberId)'
//    - Gets member's preferred genre from borrowing history
//    - Recommends available books in that genre
//    - Prioritizes highly rated books
//    - Returns top 3 recommendations

// Challenge: Create a complete 'borrowBook' function that:
// - Validates all conditions
// - Updates book availability
// - Updates member's borrowed count
// - Returns success/error with detailed message
// - Uses nested conditionals, guard clauses, and logical operators
// - Handles all edge cases

// ACTIVITY 6: Conditional Statements - Integration Challenge

// Problem 1: calculateFinalPrice
function calculateFinalPrice(user) {
  const original = Number(user.purchaseAmount || 0);
  const discounts = [];

  // define possible discounts (percent)
  const possible = [];
  if (user.age >= 65) possible.push({ key: 'age', percent: 10, reason: 'Age 65+' });
  if (user.isMember) possible.push({ key: 'member', percent: 5, reason: 'Member' });
  if (user.hasCoupon) possible.push({ key: 'coupon', percent: 15, reason: 'Coupon' });
  if (original > 200) possible.push({ key: 'large', percent: 10, reason: 'Large purchase' });

  // rule: only one discount applies (highest one) except member stacks with one other
  let applied = [];
  const member = possible.find(d => d.key === 'member');
  const others = possible.filter(d => d.key !== 'member');

  if (member) {
    // choose the highest other discount if any
    if (others.length > 0) {
      const highestOther = others.reduce((a, b) => (a.percent >= b.percent ? a : b));
      applied = [member, highestOther];
    } else {
      applied = [member];
    }
  } else {
    if (possible.length > 0) {
      const highest = possible.reduce((a, b) => (a.percent >= b.percent ? a : b));
      applied = [highest];
    }
  }

  // calculate combined percent (stacking only member + one other)
  const totalPercent = applied.reduce((s, d) => s + d.percent, 0);
  const discountAmount = (original * totalPercent) / 100;
  let final = original - discountAmount;

  if (final < 10) final = 10; // minimum price

  // build breakdown
  return {
    original: Number(original.toFixed(2)),
    discounts: applied.map(d => ({ key: d.key, percent: d.percent, reason: d.reason })),
    totalPercent,
    final: Number(final.toFixed(2)),
    savings: Number((original - final).toFixed(2))
  };
}

// Problem 2: TrafficLight state machine
const TrafficLight = {
  changeState(current) {
    switch (current) {
      case 'red': return 'green';
      case 'green': return 'yellow';
      case 'yellow': return 'red';
      default: return 'red';
    }
  },
  canGo(current) {
    return current === 'green';
  }
};

// GameState machine (legal transitions)
const GameState = (() => {
  const transitions = {
    menu: ['playing'],
    playing: ['paused', 'gameOver'],
    paused: ['playing', 'menu'],
    gameOver: ['menu']
  };

  function changeState(current, target) {
    if (!transitions[current]) return { ok: false, reason: 'Invalid current state' };
    if (transitions[current].includes(target)) return { ok: true, state: target };
    return { ok: false, reason: `Illegal transition from ${current} to ${target}` };
  }

  return { changeState };
})();

// Problem 3: Conditional-Based Routing
function getPage(path) {
  const [route, query] = path.split('?');
  if (routes[route]) return { page: routes[route], params: parseQuery(query) };
  return { page: '404 - Not Found', params: parseQuery(query) };
}

function parseQuery(q) {
  if (!q) return {};
  return Array.from(new URLSearchParams(q).entries()).reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc;
  }, {});
}

// Simple Router supporting path params and protected routes
function Router(definitions = []) {
  // definitions: [{ path: '/user/:id', handler, protected: true }]
  function match(path) {
    const [routePart] = path.split('?');

    for (const def of definitions) {
      const defParts = def.path.split('/').filter(Boolean);
      const routeParts = routePart.split('/').filter(Boolean);
      if (defParts.length !== routeParts.length) continue;

      const params = {};
      let matched = true;
      for (let i = 0; i < defParts.length; i++) {
        const dp = defParts[i];
        const rp = routeParts[i];
        if (dp.startsWith(':')) params[dp.slice(1)] = rp;
        else if (dp !== rp) { matched = false; break; }
      }

      if (matched) return { def, params };
    }
    return null;
  }

  function handle(path, ctx = {}) {
    const m = match(path);
    if (!m) return { status: 404, body: 'Not Found' };
    if (m.def.protected && !ctx.authenticated) return { status: 401, body: 'Unauthorized' };
    const query = parseQuery(path.split('?')[1]);
    return m.def.handler({ params: m.params, query, ctx });
  }

  return { handle };
}

// Problem 4: LibrarySystem
function LibrarySystem(initial) {
  // clone inputs to avoid external mutation
  const books = initial.books.map(b => ({ ...b }));
  const members = initial.members.map(m => ({ ...m }));
  // borrowing history per member id -> array of titles
  const history = {};

  function findMember(id) {
    return members.find(m => m.id === id) || null;
  }

  function findBook(title) {
    return books.find(b => b.title === title) || null;
  }

  function findAvailableBooks(genre = null, minRating = 0) {
    return books.filter(b => b.available && (!genre || b.genre === genre) && b.rating >= (minRating || 0));
  }

  function canBorrowBook(memberId, bookTitle) {
    const member = findMember(memberId);
    if (!member) return { canBorrow: false, reason: 'Member not found' };
    const book = findBook(bookTitle);
    if (!book) return { canBorrow: false, reason: 'Book not found' };
    if (!book.available) return { canBorrow: false, reason: 'Book not available' };

    const limit = member.type === 'student' ? 3 : (member.type === 'faculty' ? 10 : 5);
    if ((member.booksBorrowed || 0) >= limit) return { canBorrow: false, reason: `Borrowing limit reached (${limit})` };

    return { canBorrow: true, reason: 'OK' };
  }

  function recommendBooks(memberId) {
    const member = findMember(memberId);
    if (!member) return [];
    const memberHistory = history[memberId] || [];
    // derive preferred genre from history; fallback to most popular available genre
    const genreCounts = {};
    for (const title of memberHistory) {
      const bk = findBook(title);
      if (bk) genreCounts[bk.genre] = (genreCounts[bk.genre] || 0) + 1;
    }
    let preferred = null;
    if (Object.keys(genreCounts).length) {
      preferred = Object.keys(genreCounts).reduce((a, b) => (genreCounts[a] >= genreCounts[b] ? a : b));
    } else {
      // find most common genre among available books
      for (const b of books) if (b.available) genreCounts[b.genre] = (genreCounts[b.genre] || 0) + 1;
      preferred = Object.keys(genreCounts).sort((a,b) => genreCounts[b]-genreCounts[a])[0] || null;
    }

    const candidates = books.filter(b => b.available && (!preferred || b.genre === preferred));
    // sort by rating desc
    candidates.sort((x,y) => y.rating - x.rating);
    return candidates.slice(0,3);
  }

  function borrowBook(memberId, bookTitle) {
    const can = canBorrowBook(memberId, bookTitle);
    if (!can.canBorrow) return { success: false, message: can.reason };

    const book = findBook(bookTitle);
    const member = findMember(memberId);

    // update
    book.available = false;
    member.booksBorrowed = (member.booksBorrowed || 0) + 1;
    history[memberId] = history[memberId] || [];
    history[memberId].push(bookTitle);

    return { success: true, message: `Book '${bookTitle}' borrowed by ${member.name}` };
  }

  return {
    findAvailableBooks,
    canBorrowBook,
    recommendBooks,
    borrowBook,
    // expose for testing/debugging
    _internal: { books, members, history }
  };
}

// Export for environments where module.exports exists
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateFinalPrice, TrafficLight, GameState, getPage, Router, LibrarySystem };
}