// # primitive data types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isPassed = true;
const outsideTemp = null;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false, symbols are unique
// Even though thet have the same value, they are not the same.

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// # non-primitive or reference data types
// Array, Object, Function

const heroes = ["Iron Man", "Captain America", "Thor"];
const person = {
  name: "Harshit",
  age: 25,
  isStudent: false,
};
const greet = function () {
  console.log("Hello, World!");
};
greet();

console.log(typeof heroes); // object
console.log(typeof person); // object
console.log(typeof greet); // function
// here, greet is shown as a function

// JavaScript has dynamic typing, meaning variables can hold any type of data and can change types.
