// ===============================
// DOM BUTTON INTERACTION FILE
// ===============================

// ----------- Counter Logic -----------
let count = 0;

// Select elements
const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase button
incBtn.addEventListener("click", function () {
    count++;
    countDisplay.innerText = count;
});

// Decrease button
decBtn.addEventListener("click", function () {
    count--;
    countDisplay.innerText = count;
});

// Reset button
resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.innerText = count;
});


// ----------- Greeting Logic -----------
const nameInput = document.getElementById("name");
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", function () {
    let userName = nameInput.value;
    greetOutput.innerText = "Hello " + userName;
});


// ----------- Even/Odd Checker -----------
const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    let num = numberInput.value;

    if (num % 2 == 0) {
        result.innerText = "Even";
    } else {
        result.innerText = "Odd";
    }
});


// ----------- Color Change Button -----------
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});


// ----------- Toggle Text -----------
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function () {
    if (toggleText.innerText === "ON") {
        toggleText.innerText = "OFF";
    } else {
        toggleText.innerText = "ON";
    }
});


// ===============================
// END OF FILE
// ===============================