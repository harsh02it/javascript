// Stack and Heap Memory in JavaScript

// All primitives data types are stored in the stack memory
// All non-primitive data types are stored in the heap memory

let myName = "John";
let anotherName = myName; // Stack memory
anotherName = "Stark";
console.log(myName); // Output: John
console.log(anotherName); // Output: Stark

// heap memory example
// Objects, arrays, and functions are stored in the heap memory

let userOne = {
  email: "user@email.com",
  name: "User One",
};

let userTwo = userOne; // Heap memory
userTwo.email = "temp@gmail.com";
console.log(userOne.email); // temp@gmail.com
console.log(userTwo.email); // temp@gmail.com

// const person = { name: "Harshit", age: 25 };
// Here’s what’s happening behind the scenes:
// A reference (pointer) to the object is stored in the stack under the variable name person.
// The actual object { name: "Harshit", age: 25 } is stored in the heap.

// So:
// 📦 Stack: person --> [reference to object in heap]
// 📦 Heap: { name: "Harshit", age: 25 }
