/*
🟢 Stage 1: Beginner – Warm-up Challenge
Problem:
Write a function formatFullName(firstName, lastName) that:
Removes any extra spaces from both names.
Capitalizes the first letter of each name and makes the rest lowercase.
Joins them with a single space and returns the result.
*/

function formatFullName(firstName, lastName) {
  return `${capitalizeName(firstName)} ${capitalizeName(lastName)}`;
}

function capitalizeName(name) {
  name = name.trim();
  return name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "";
}

console.log(formatFullName("  JAcK      ", "  rEaChER   "));

/*
🟡 Stage 2: Intermediate – Pattern & Search Challenge
Problem:
Write a function maskEmail(email) that hides part of the username and keeps only the first 2 characters and the domain visible.
*/

function maskEmail(email) {
  let redactedChar = "*";
  let len = email.length;
  let position = email.indexOf("@");
  let twoChar = email.substr(0, 2);
  let domainName = email.substr(position, len);
  let redactedEmail = twoChar + redactedChar.repeat(9) + domainName;
  return redactedEmail;
}

console.log(maskEmail("jackTester.ABC@gmail.com"));

/*
🔴 Stage 3: Advanced – Parsing & Transformation Challenge
Problem:
You are given a paragraph string.
Count how many words are in the paragraph.
Find the longest word.
Replace all occurrences of "JavaScript" with "JS" (case-insensitive).
Return the updated paragraph and statistics in an object.
*/

let para =
  "JavaScript is fun. I like JavaScript because JavaScript is powerful!";
function processParagraph(para) {
  let updatedText = para.replaceAll("JavaScript", "JS");
  let splitPara = updatedText.split(" ");
  console.log(splitPara);
  splitPara.forEach((words) => {
    let lenLongWord = 0;
    if (words.length > lenLongWord) {
      longestWord = words;
    }
  });
  console.log(longestWord);
  let wordCount = splitPara.length;
  console.log(`word count is ${wordCount}`);
  return updatedText;
}

console.log(processParagraph(para));
