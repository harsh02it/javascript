const accountId = 123456; //the value of accountId cannot be changed
let accountEmail = "temp@gmail.com"; //the value of accountEmail can be changed

/* 
old variable declarations
var had a problem of hoisting and scope, so it's not recommended to use it in modern JavaScript
prefer not to use var
*/
var accountPassword = "12345"; //the value of accountPassword can be changed
accountCity = "Toronto";
let accountState;

//accountId = 3; // not allowed as this will throw an error because accountId is a constant
accountEmail = "temp2@gmail.com";
accountPassword = "99999";
accountCity = "New York";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // This will log the values of the variables in a table format
console.log(typeof accountCity);
