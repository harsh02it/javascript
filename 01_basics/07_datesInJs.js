//Date

let myCurrentDate = new Date(); //Date object instance representing the current date and time
console.log(myCurrentDate); // Current date and time

//date to string
console.log(myCurrentDate.toString()); // Converts the date to a string representation
console.log(myCurrentDate.toDateString()); // Converts the date to a more readable string format (without time)
console.log(myCurrentDate.toISOString()); // Converts the date to ISO 8601 string format
console.log(`JSON format: ${myCurrentDate.toJSON()}`); // Converts the date to a JSON string format
console.log(myCurrentDate.toLocaleDateString()); // Converts the date to a string based on the local date format
console.log(myCurrentDate.toLocaleString()); // Converts the date to a string based on the local date and time format

console.log(typeof myCurrentDate); // object

//Date object with specific date
let newDate = new Date(2023, 0, 23);
console.log(newDate.toDateString()); // Mon Jan 23 2023
//in javascript, the month is 0-indexed (0 = January, 1 = February, etc.)

//Date object with Time in 24 hour format
let updateDateAndTime = new Date(2023, 0, 23, 23, 30, 10);
console.log(updateDateAndTime.toLocaleString()); // 2023-01-23, 11:30:10 p.m.

//Date object in specified format
let specifiedDate = new Date("2025-01-05");
console.log(`Date in specified format: ${specifiedDate.toLocaleString()}`); // 2025-01-04, 7:00:00 p.m.
// new Date("2025-01-05") is interpreted as 2025-01-05 00:00:00 UTC (midnight UTC).
// the system (Toronto, UTC-5 in January) converts that UTC time into local time by subtracting 5 hours → 2025-01-04 19:00:00.

//timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); //current timestamp in milliseconds since January 1, 1970
console.log(specifiedDate.getTime()); //timestamp for specifiedDate

//convert timestamp (miliseconds) to seconds
let timeStampInSec = console.log(Math.floor(Date.now() / 1000));

//get specific day, month, and year from date
let myIndividualDate = new Date();
let myYear = myIndividualDate.getFullYear();
let myMonth = myIndividualDate.getMonth() + 1; // Months are zero-based so we add 1
let myDate = myIndividualDate.getDate();

console.log(`Year: ${myYear}, Month: ${myMonth}, Date: ${myDate}`);

let userFormattedDate = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(userFormattedDate);
