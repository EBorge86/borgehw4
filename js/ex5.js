const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word !== "stop") {
    words.push(word);
  }
  else
  console.log("No words to display, Stop was the first word entered.");
 
}
if(words.length > 0)
console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w);
});
