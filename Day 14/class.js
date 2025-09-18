// ========================
// Beginner Level
// ========================

// Spread to clone array and add new elements
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log("Spread Array:", newArr);

// Rest to sum any number of arguments
const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum(1, 2, 3, 4));

// Regular function → Arrow function
const greet = name => `Hello, ${name}`;
console.log("Greet:", greet("Alice"));

// If-else → Ternary
let age = 20;
let message = age >= 18 ? "Allowed" : "Denied";
console.log("Ternary Age Check:", message);


// ========================
// Intermediate Level
// ========================

// Merge two objects with spread, override value
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };
const merged = { ...obj1, ...obj2 };
console.log("Merged Object:", merged);

// Function with rest to multiply all values
const multiply = (...nums) => nums.reduce((acc, n) => acc * n, 1);
console.log("Multiply:", multiply(2, 3, 4));

// Concise arrow function for even check
const isEven = n => n % 2 === 0;
console.log("Is 4 Even?", isEven(4));

// Ternary for age check
let userAge = 16;
let access = userAge >= 18 ? "Access Granted" : "Access Denied";
console.log("User Access:", access);


// ========================
// Advanced Level
// ========================

// Destructure object, use rest for remaining properties
const user = { id: 1, name: "Sam", age: 25, country: "US" };
const extract = ({ name, ...rest }) => rest;
console.log("Extracted User:", extract(user));

// Object method with arrow (breaks 'this')
const person = {
  name: "Bob",
  regularMethod() {
    console.log("Regular Method:", this.name); // Bob
  },
  arrowMethod: () => {
    console.log("Arrow Method:", this.name); // undefined
  }
};
person.regularMethod();
person.arrowMethod();

// Nested ternary vs if...else
const score = 85;
const grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log("Grade (Ternary):", grade);

// Equivalent if...else
if (score >= 90) console.log("Grade (if-else): A");
else if (score >= 75) console.log("Grade (if-else): B");
else console.log("Grade (if-else): C");

// Rest + spread to process parameters into object
const processData = (...values) => {
  const doubled = values.map(v => v * 2);
  return { ...values, doubled };
};
console.log("Processed Data:", processData(1, 2, 3));

// Short one-line function
const quick = (...n) => [...n, n.reduce((a, b) => a + b, 0)];
console.log("Quick Function:", quick(1, 2, 3));
