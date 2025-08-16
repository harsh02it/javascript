let scores = ["85.75", "92", "NaN", "100.9999", "fail", "77.2"];

const cleanedScores = scores
  .map(Number)
  .filter((score) => !isNaN(score))
  .map((score) => Number(score.toFixed(2)));

const highestScore = Math.max(...cleanedScores);
const lowestScore = Math.min(...cleanedScores);
const avgScore =
  cleanedScores.reduce((acc, cleanedScore) => acc + Number(cleanedScore), 0) /
  cleanedScores.length;

console.log(cleanedScores);
console.log(highestScore);
console.log(lowestScore);
console.log(avgScore);
