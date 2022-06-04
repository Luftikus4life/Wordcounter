const textarea = document.getElementById("input");
const charactersDisplay = document.getElementById("charactersDisplay");
const wordsDisplay = document.getElementById("wordsDisplay");
const paragraphsDisplay = document.getElementById("paragraphsDisplay");

function onChange() {
  let text = textarea.value;
  //   letters
  let lettercount = text.split("").filter((letter) => letter != " ").length;
  charactersDisplay.innerText = lettercount;
  // words

  let wordcount = text.split(/\s+/).filter(function (w) {
    return w.length > 0;
  }).length;
  wordsDisplay.innerText = wordcount;
  //   paragraph
  let paragraphcount = text.split("\n").filter(function (w) {
    return w.length > 0;
  }).length;
  paragraphsDisplay.innerText = paragraphcount;
}

textarea.addEventListener("input", onChange);

console.log(text.split(" "));
