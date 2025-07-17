//number conversion
let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //this will convert string to number however we don't have idea whether the conversion is successful or not
//see below for an example

let score2 = "22abc";
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); //NaN
//here we are trying to convert a string that contains non-numeric characters to a number, which results in NaN (Not a Number)
//NaN is a special value in JavaScript that indicates an invalid number

let score3 = null;
let valueInNumber3 = Number(score3);
console.log(valueInNumber3); //0
//null is converted to 0 when using Number()

let score4 = undefined;
let valueInNumber4 = Number(score4);
console.log(valueInNumber4); //NaN
//undefined is converted to NaN when using Number()

let score5 = true;
let valueInNumber5 = Number(score5);
console.log(valueInNumber5); //1
//true is converted to 1 when using Number()

// "33" => 33
// "22abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

//Boolean conversion

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true

let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); //false

let isLoggedIn3 = "abc";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); //true

// 1 => true; 0 => false
// '' => false; 'abc' => true

//String conversion
let someNumber = 123;
let stringFromNumber = String(someNumber);
console.log(stringFromNumber); // "123"
console.log(typeof stringFromNumber); // "string"
