const score = 400;
//javascript automatically assumes the type is number
console.log(score); //400

const balance = new Number(10000); //using Number constructor creates a Number object
console.log(balance); // [Number: 10000]
// If you run above code on browser console, it will show different properties and methods available on the Number object
console.log(typeof balance); //object; because it's a Number object, not a primitive number

//properties of Number object
console.log(balance.toString()); // "10000"; converts the Number object to a string
console.log(balance.toString().length); // 5; length of the string representation
console.log(balance.toFixed(2)); // "10000.00"; formats the number to 2 decimal places based on the number passed to toFixed

//toPrecision method
const otherNumber = 129.6532;
console.log(otherNumber.toPrecision(3)); // "130"; formats the number to 3 significant digits
console.log(otherNumber.toPrecision(2)); // "1.3e+2"; formats the number to 2 significant digits in scientific notation as the decimial point is at 3rd position
console.log(otherNumber.toPrecision(4)); // "129.7"; formats the number to 4 significant digits

// toLocaleString method
const salary = 250000;
console.log(salary.toLocaleString()); // "250,000"; formats the number with commas as thousands separators - US style
console.log(salary.toLocaleString("en-IN")); // "2,50,000"; formats the number according to Indian numbering system

// !Aha Moment: Number as a primitive type vs Number as an object
// Note: Number as a primitive type (let x = 5; or let x = new Number(5);) has different properties and methods than Number as an objects (Number).
console.log(Number); // [Function: Number] - this is the Number constructor function
// The above line has different properties and methods than the primitive number value
// Examples include Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, etc.
console.log(new Number(5)); // [Number: 5] - this is a Number object created using the constructor
console.log(salary); // This is a primitive number value
//Line 30 and 31 has properties like toString, toFixed, toPrecision, etc. which are available on the Number object

// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math); // [Math: Math] - this is the Math object in JavaScript
// The Math object has various properties and methods for mathematical operations

console.log(Math.abs(-5)); // 5; returns the absolute value of -5
console.log(Math.round(4.7)); // 5; rounds the number to the nearest integer
console.log(Math.ceil(4.1)); // 5; rounds the number UP to the nearest integer
console.log(Math.floor(4.9)); // 4; rounds the number DOWN to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // 5; returns the maximum value from the given numbers
console.log(Math.min(1, 2, 3, 4, 5)); // 1; returns the minimum value from the given numbers
console.log(Math.random()); // Random number between 0 and 1; generates a random floating point number between 0 (inclusive) and 1 (exclusive)

// random function is very useful for generating random numbers
// For example, to generate a random integer between 1 and 10 (inclusive):
const randomInt = Math.floor(Math.random() * 10) + 1; // Generates a random integer between 1 and 10
// Math.random() // generates a random number between 0 and 1
// Math.random() * 10 //multiplying it by 10 gives a number between 0 and 10
// Math.floor(Math.random() * 10) + 1 //Math.floor() rounds it down to the nearest integer. Adding 1 shifts the range to be between 1 and 10 as it can give 0 as well.
console.log(randomInt); // Random integer between 1 and 10

// To generate a random number between a specific range, say 5 to 78:
const min = 5;
const max = 78;

// Step by step explanation:
// 1. Math.random(); //Generate a random number between 0 and 1
// 2. Math.random() * (max - min + 1); //this will keep the range of number between 0 and (max - min + 1), however the result may show number less than min
// 3. Math.floor(Math.random() * (max - min + 1)) + min; //this will give us the range between min and max
// Math.floor() rounds down the number to the nearest integer, and adding min shifts the range to start from min number

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 5 and 78
