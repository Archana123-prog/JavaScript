// =====================================
// JAVASCRIPT PRACTICE FILE (BEGINNER)
// =====================================

// -------------------------------
// Q1: Print numbers from 1 to 10
// -------------------------------
console.log("Q1: Print 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// -------------------------------
// Q2: Check even or odd
// -------------------------------
console.log("\nQ2: Even or Odd");
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// -------------------------------
// Q3: Sum of two numbers
// -------------------------------
console.log("\nQ3: Sum of two numbers");
let a = 5;
let b = 10;

let sum = a + b;
console.log(sum);


// -------------------------------
// Q4: Find largest number
// -------------------------------
console.log("\nQ4: Largest number");
let x = 10;
let y = 25;

if (x > y) {
    console.log("X is greater");
} else {
    console.log("Y is greater");
}


// -------------------------------
// Q5: Sum of 1 to n
// -------------------------------
console.log("\nQ5: Sum of 1 to n");
let n = 5;
let total = 0;

for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);


// -------------------------------
// Q6: Reverse a string
// -------------------------------
console.log("\nQ6: Reverse string");
let str1 = "hello";
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}

console.log(reversed);


// -------------------------------
// Q7: Count vowels
// -------------------------------
console.log("\nQ7: Count vowels");

let str2 = "javascript";
let count = 0;

for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (
        ch === 'a' || ch === 'e' || ch === 'i' ||
        ch === 'o' || ch === 'u'
    ) {
        count++;
    }
}

console.log(count);


// -------------------------------
// Q8: Factorial
// -------------------------------
console.log("\nQ8: Factorial");
let num2 = 5;
let fact = 1;

for (let i = 1; i <= num2; i++) {
    fact *= i;
}

console.log(fact);


// -------------------------------
// Q9: Simple Calculator
// -------------------------------
console.log("\nQ9: Calculator");
let num1 = 10;
let num3 = 5;
let operator = "+"; // change operator

if (operator === "+") {
    console.log(num1 + num3);
} else if (operator === "-") {
    console.log(num1 - num3);
} else if (operator === "*") {
    console.log(num1 * num3);
} else if (operator === "/") {
    console.log(num1 / num3);
}


// -------------------------------
// Q10: Sum of array
// -------------------------------
console.log("\nQ10: Sum of array");
let arr1 = [1, 2, 3, 4, 5];
let sumArr = 0;

for (let i = 0; i < arr1.length; i++) {
    sumArr += arr1[i];
}

console.log(sumArr);


// -------------------------------
// Q11: Find max in array
// -------------------------------
console.log("\nQ11: Max in array");
let arr2 = [10, 25, 5, 40, 15];
let max = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}

console.log(max);


// -------------------------------
// Q12: Palindrome check
// -------------------------------
console.log("\nQ12: Palindrome");
let str3 = "madam";
let rev = "";

for (let i = str3.length - 1; i >= 0; i--) {
    rev += str3[i];
}

if (str3 === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// =====================================
// END OF FILE🙂‍↕️ 
// =====================================