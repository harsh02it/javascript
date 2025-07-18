//number conversion
let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(
  typeof valueInNumber,
  "→ converted from string '33' to number:",
  valueInNumber
); //this will convert string to number however we don't have idea whether the conversion is successful or not
//see below for an example

let score2 = "22abc";
let valueInNumber2 = Number(score2);
console.log(valueInNumber2, "→ converting '22abc' yields NaN"); //NaN
//here we are trying to convert a string that contains non-numeric characters to a number, which results in NaN (Not a Number)
//NaN is a special value in JavaScript that indicates an invalid number

let score3 = null;
let valueInNumber3 = Number(score3);
console.log(
  valueInNumber3,
  "→ converting null to number gives:",
  valueInNumber3
); //0
//null is converted to 0 when using Number()

let score4 = undefined;
let valueInNumber4 = Number(score4);
console.log(valueInNumber4, "→ converting undefined gives NaN"); //NaN
//undefined is converted to NaN when using Number()

let score5 = true;
let valueInNumber5 = Number(score5);
console.log(valueInNumber5, "→ converting true gives:", valueInNumber5); //1
//true is converted to 1 when using Number()

// "33" => 33
// "22abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

//Boolean conversion

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, "→ Boolean(1) is true"); //true

let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2, "→ Boolean('') is false"); //false

let isLoggedIn3 = "abc";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3, "→ Boolean('abc') is true"); //true

// 1 => true; 0 => false
// '' => false; 'abc' => true

//String conversion
let someNumber = 123;
let stringFromNumber = String(someNumber);
console.log(
  stringFromNumber,
  "→ converted from number 123 to string:",
  stringFromNumber
); // "123"
console.log(typeof stringFromNumber, "→ type is now:", typeof stringFromNumber); // "string"

// ************************ Operations on different types ************************

let num1 = 5;
let negNum1 = -num1;
console.log("Negative of num1 is", negNum1); // -5

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // exponentiation
// console.log(2/2);
// console.log(2%2); // modulus

let str1 = "Harshit";
let str2 = " Savani";
let str3 = str1 + str2;
console.log("Concatenated string:", str3); // "Harshit Savani"

console.log("1" + 2); // "12" - string concatenation
console.log(1 + "2"); // "12" - string concatenation
console.log("1" + 2 + 3); // "123" - string concatenation
console.log(1 + 2 + "3"); // "33" - string concatenation

console.log(+true);
// console.log(true+); // error: unexpected token
// + cannot be at the end of a statement

console.log(+""); //0
// "" => 0 then 0 is converted to number

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); //x:4, y:3

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); //a:4, b:4
