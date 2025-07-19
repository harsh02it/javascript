const person = "John Doe"; //string variable declaration
const age = 30;

//old way of concatenation
console.log(person + age + " years old"); // Concatenation

//string interpolation
console.log(`${person} is ${age} years old`); // Template literals

const person2 = new String("Jetha Gada"); //string object declaration
console.log(person2[0]); // Accessing first character of string object
console.log(person2.__proto__); // in console you will see a empty object however in browser you can actually see the prototype methods like charAt, indexOf, etc.
//we dont have to write .__proto__ to access the methods, we can directly use them like this:
console.log(person2.charAt(0)); // Accessing first character using charAt method
console.log(person2.toUpperCase()); // Converting string to uppercase
console.log(person2.indexOf("a"));

const newPerson = person2.substring(0, 5);
console.log(newPerson); // Extracting substring from index 0 to 5

const newPerson2 = person2.slice(5, 10);
console.log(newPerson2); // Extracting substring from index 5 to 10

const newString = "       Hello world!    ";
console.log(newString.trim()); // Removing whitespace from both ends of the string);

const url = "https://www.example.com/example%20website";
console.log(url.replace("%20", "-"));

console.log(url.includes("example")); // Checking if the string includes "example"

console.log(person2.split(" ")); // Splitting the string into an array based on space
