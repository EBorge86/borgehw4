const word = prompt("Enter a word:");

let vowelCount = 0;
let backwardWord = "";

[...word].forEach(letter => {
  const lowerLetter = letter.toLowerCase();
  if (
    lowerLetter === "a" ||
    lowerLetter === "e" ||
    lowerLetter === "i" ||
    lowerLetter === "o" ||
    lowerLetter === "u" ||
    lowerLetter === "y"
  ) {
    vowelCount++;
  }
  backwardWord = letter + backwardWord;
});

console.log(`It has ${vowelCount} vowels`);
console.log(`Its backwards value is ${backwardWord}`);
if (word.toLowerCase() === backwardWord.toLowerCase()) {
  console.log("It's a palindrome");
}