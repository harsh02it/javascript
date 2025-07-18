console.log("String '2' converted to number is greater than 1:", "2" > 1); //true; javascript converts "2" to a number
console.log("String '02' converted to number is greater than 1:", "02" > 1); //true; javascript converts "02" to a number

console.log(
  "String '2' converted to number is greater than boolean true (which is 1):",
  "2" > true
); //true; javascript converts "2" to a number and true to 1, so it compares 2 > 1

// for comparison, null is converted to 0
console.log("Null (converted to 0) is greater than 0:", null > 0); //false; null is converted to 0, so it compares 0 > 0
console.log("Null is loosely equal to 0:", null == 0); //false; null is not equal to 0
console.log("Null (converted to 0) is greater than or equal to 0:", null >= 0); //true; null is converted to 0
// The reason for this behavior is that null is treated as 0 in numeric comparisons, but it is not equal to 0 in equality checks.

//undefined gives fales for any comparison with a number
console.log("Undefined is loosely equal to 0:", undefined == 0); //false; undefined is not equal to 0
console.log("Undefined is greater than or equal to 0:", undefined >= 0); //false; undefined is not converted to a number
console.log("Undefined is less than or equal to 0:", undefined <= 0); //false; undefined is not converted to a number

console.log("Undefined is loosely equal to null:", undefined == null); //true; both are considered equal in loose equality checks

// === Strict Equality
console.log("String '1' is strictly equal to number 1:", "1" === 1); //false; strict equality checks type and value
