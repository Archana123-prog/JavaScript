// ===============================
// 1. VARIABLES (store data)
// ===============================

let name = "Archana";   // string (text)
let age = 19;           // number
let isStudent = true;   // boolean (true/false)

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// ===============================
// 2. CHANGING VARIABLE VALUE
// ===============================

age = 20;  // updating value
console.log("Updated Age:", age);


// ===============================
// 3. OPERATORS
// ===============================

let a = 10;
let b = 5;

console.log("Addition:", a + b);       // 15
console.log("Subtraction:", a - b);    // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b);       // 2
console.log("Modulus:", a % b);        // 0


// ===============================
// 4. COMPARISON OPERATORS
// ===============================

console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == b);  // false
console.log(a != b);  // true


// ===============================
// 5. IF-ELSE (CONDITIONS)
// ===============================

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// ===============================
// 6. LOOPS (REPEAT TASK)
// ===============================

// for loop
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}


// ===============================
// 7. ARRAYS (LIST OF VALUES)
// ===============================

let nums = [1, 2, 3, 4];

console.log(nums);       // full array
console.log(nums[0]);    // first element
console.log(nums.length); // size of array

// loop through array
for (let i = 0; i < nums.length; i++) {
    console.log("Element:", nums[i]);
}


// ===============================
// 8. ARRAY METHODS
// ===============================

nums.push(5);       // add at end
console.log(nums);

nums.pop();         // remove last
console.log(nums);


// ===============================
// 9. FUNCTIONS (REUSABLE CODE)
// ===============================

function add(x, y) {
    return x + y;
}

let result = add(3, 4);
console.log("Sum:", result);


// ===============================
// 10. OBJECTS (KEY-VALUE PAIRS)
// ===============================

let person = {
    name: "Archana",
    age: 19,
    city: "Delhi"
};

console.log(person.name);
console.log(person.age);


// ===============================
// 11. MAP (ADVANCED - VERY IMPORTANT)
// ===============================

let map = new Map();

map.set(1, "One");
map.set(2, "Two");

console.log(map.get(1)); // One
console.log(map.has(2)); // true


// ===============================
// 12. IMPORTANT PRACTICE
// ===============================

// Find sum of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Total Sum:", sum);


// ===============================
// END OF BASICS 🎉
// ===============================